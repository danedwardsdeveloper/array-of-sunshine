import * as fs from 'fs'
import * as path from 'path'
import { parse as dotenvParse } from 'dotenv'

interface EnvComparison {
  envFileVars: Set<string>
  dockerfileVars: Set<string>
  missingInEnv: string[]
  missingInDocker: string[]
}

interface Config {
  ignoredVars: Set<string>
}

class EnvValidatorError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EnvValidatorError'
  }
}

class FileReadError extends EnvValidatorError {
  constructor(
    public readonly filePath: string,
    public readonly originalError: Error,
  ) {
    super(`Error reading file ${filePath}: ${originalError.message}`)
    this.name = 'FileReadError'
  }
}

class FileParseError extends EnvValidatorError {
  constructor(
    public readonly filePath: string,
    public readonly originalError: Error,
  ) {
    super(`Error parsing file ${filePath}: ${originalError.message}`)
    this.name = 'FileParseError'
  }
}

class FileNotFoundError extends EnvValidatorError {
  constructor(public readonly filePath: string) {
    super(`File not found: ${filePath}`)
    this.name = 'FileNotFoundError'
  }
}

const defaultConfig: Config = {
  ignoredVars: new Set(['NODE_ENV', 'NODE_VERSION', 'PNPM_VERSION', 'NODE_ENV', 'PORT']),
}

function checkFileExists(filePath: string): void {
  if (!fs.existsSync(filePath)) {
    throw new FileNotFoundError(filePath)
  }
}

function parseEnvFile(filePath: string, config: Config): Set<string> {
  try {
    checkFileExists(filePath)
    const envContent = fs.readFileSync(filePath, 'utf8')

    try {
      const parsed = dotenvParse(envContent)
      return new Set(Object.keys(parsed).filter(key => !config.ignoredVars.has(key)))
    } catch (error) {
      throw new FileParseError(filePath, error as Error)
    }
  } catch (error) {
    if (error instanceof EnvValidatorError) {
      throw error
    }
    throw new FileReadError(filePath, error as Error)
  }
}

function parseDockerfile(filePath: string, config: Config): Set<string> {
  try {
    checkFileExists(filePath)
    const dockerContent = fs.readFileSync(filePath, 'utf8')

    try {
      const envVars = new Set<string>()

      const patterns = [
        // ENV VAR=value or ENV VAR="value" or ENV VAR='value'
        /^ENV\s+(?:--\w+\s+)?([A-Za-z_][A-Za-z0-9_]*)(?:=["']?(?:[^"']*)?["']?|\s+["']?(?:[^"']*)?["']?|\s|$)/gm,
        // ARG VAR=value or ARG VAR="value" or ARG VAR='value'
        /^ARG\s+(?:--\w+\s+)?([A-Za-z_][A-Za-z0-9_]*)(?:=["']?(?:[^"']*)?["']?|\s+["']?(?:[^"']*)?["']?|\s|$)/gm,
      ]

      for (const pattern of patterns) {
        const matches = dockerContent.matchAll(pattern)
        for (const match of matches) {
          const varName = match[1]
          if (!config.ignoredVars.has(varName)) {
            envVars.add(varName)
          }
        }
      }

      return envVars
    } catch (error) {
      throw new FileParseError(filePath, error as Error)
    }
  } catch (error) {
    if (error instanceof EnvValidatorError) {
      throw error
    }
    throw new FileReadError(filePath, error as Error)
  }
}

function compareEnvironments(envPath: string, dockerPath: string, config: Config): EnvComparison {
  const envFileVars = parseEnvFile(envPath, config)
  const dockerfileVars = parseDockerfile(dockerPath, config)

  const missingInEnv = [...dockerfileVars].filter(v => !envFileVars.has(v))
  const missingInDocker = [...envFileVars].filter(v => !dockerfileVars.has(v))

  return {
    envFileVars,
    dockerfileVars,
    missingInEnv,
    missingInDocker,
  }
}

function printResults(comparison: EnvComparison, config: Config): void {
  console.log('\n=== Environment Variables Comparison ===\n')

  console.log('Ignored variables:', [...config.ignoredVars].join(', '))
  console.log('\nVariables in .env:', comparison.envFileVars.size)
  console.log('Variables in Dockerfile:', comparison.dockerfileVars.size)

  if (comparison.missingInDocker.length > 0) {
    console.log('\n❌ Variables in .env but missing in Dockerfile:')
    comparison.missingInDocker.forEach(v => console.log(`  - ${v}`))
  }

  if (comparison.missingInEnv.length > 0) {
    console.log('\n❌ Variables in Dockerfile but missing in .env:')
    comparison.missingInEnv.forEach(v => console.log(`  - ${v}`))
  }

  if (comparison.missingInDocker.length === 0 && comparison.missingInEnv.length === 0) {
    console.log('\n✅ All environment variables match between files!')
  }

  console.log('\n=== End of Comparison ===')
}

// Main execution
const envPath = path.join(process.cwd(), '.env')
const dockerPath = path.join(process.cwd(), 'Dockerfile')

// Allow additional ignored vars through command line arguments
const additionalIgnoredVars = process.argv.slice(2)
const config: Config = {
  ignoredVars: new Set([...defaultConfig.ignoredVars, ...additionalIgnoredVars]),
}

try {
  const comparison = compareEnvironments(envPath, dockerPath, config)
  printResults(comparison, config)
} catch (error) {
  if (error instanceof FileNotFoundError) {
    console.error(`❌ ${error.message}`)
    console.error(`Please ensure ${error.filePath} exists in your project root.`)
  } else if (error instanceof FileParseError) {
    console.error(`❌ ${error.message}`)
    console.error('Please check the file format is correct.')
  } else if (error instanceof FileReadError) {
    console.error(`❌ ${error.message}`)
    console.error('Please check file permissions and try again.')
  } else {
    console.error('❌ An unexpected error occurred:', error)
  }
  process.exit(1)
}
