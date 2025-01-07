'use client'

import React, { useEffect, useState } from 'react'

interface Results {
  matches: boolean[]
  nonMatches: boolean[]
}

interface StringInputProps {
  value: string
  onChange: (value: string) => void
  onRemove: () => void
  matches: boolean
  type: 'match' | 'nonmatch'
  currentRegex: string
  isOnlyString: boolean
}

function StringInput(props: StringInputProps): JSX.Element {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    props.onChange(e.target.value)
  }

  return (
    <div className="flex items-center gap-2 mb-2">
      <input
        type="text"
        value={props.value}
        onChange={handleChange}
        className={`flex-grow p-2 border rounded ${
          props.currentRegex && props.value
            ? props.matches
              ? props.type === 'match'
                ? 'bg-green-100'
                : 'bg-red-100'
              : props.type === 'match'
                ? 'bg-red-100'
                : 'bg-green-100'
            : ''
        }`}
      />
      {!props.isOnlyString && (
        <button onClick={props.onRemove} className="p-2 text-gray-500 hover:text-gray-700" type="button">
          ✕
        </button>
      )}
    </div>
  )
}

export default function RegexTester(): JSX.Element {
  const [regex, setRegex] = useState<string>('')
  const [regexError, setRegexError] = useState<boolean>(false)
  const [matchStrings, setMatchStrings] = useState<string[]>([''])
  const [nonMatchStrings, setNonMatchStrings] = useState<string[]>([''])
  const [results, setResults] = useState<Results>({ matches: [], nonMatches: [] })

  useEffect(
    function () {
      function validateAndTestRegex(input: string): void {
        try {
          if (!input) {
            setRegexError(false)
            setResults({ matches: [], nonMatches: [] })
            return
          }

          const regexObj = new RegExp(input)
          setRegexError(false)

          const matchResults = matchStrings.map(function (str) {
            return regexObj.test(str)
          })
          const nonMatchResults = nonMatchStrings.map(function (str) {
            return !regexObj.test(str)
          })

          setResults({
            matches: matchResults,
            nonMatches: nonMatchResults,
          })
        } catch {
          setRegexError(true)
          setResults({ matches: [], nonMatches: [] })
        }
      }

      validateAndTestRegex(regex)
    },
    [regex, matchStrings, nonMatchStrings],
  )

  function handleStringChange(index: number, value: string, type: 'match' | 'nonmatch'): void {
    if (type === 'match') {
      const newStrings = [...matchStrings]
      newStrings[index] = value
      setMatchStrings(newStrings)
    } else {
      const newStrings = [...nonMatchStrings]
      newStrings[index] = value
      setNonMatchStrings(newStrings)
    }
  }

  function addString(type: 'match' | 'nonmatch'): void {
    if (type === 'match') {
      setMatchStrings([...matchStrings, ''])
    } else {
      setNonMatchStrings([...nonMatchStrings, ''])
    }
  }

  function removeString(index: number, type: 'match' | 'nonmatch'): void {
    if (type === 'match') {
      const newStrings = matchStrings.filter(function (_, i) {
        return i !== index
      })
      setMatchStrings(newStrings.length ? newStrings : [''])
    } else {
      const newStrings = nonMatchStrings.filter(function (_, i) {
        return i !== index
      })
      setNonMatchStrings(newStrings.length ? newStrings : [''])
    }
  }

  function resetStrings(type: 'match' | 'nonmatch'): void {
    if (type === 'match') {
      setMatchStrings([''])
    } else {
      setNonMatchStrings([''])
    }
  }

  function handleRegexChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setRegex(e.target.value)
  }

  return (
    <div className="mt-12 mb-32">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Your Regex Pattern</label>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={regex}
            onChange={handleRegexChange}
            className={`w-full p-2 border rounded ${regexError ? 'border-red-500' : ''}`}
          />
          {regexError && <span className="text-red-500">!</span>}
        </div>
      </div>

      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium">Strings that SHOULD match:</label>
          <button
            onClick={function () {
              resetStrings('match')
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
            type="button"
          >
            Reset
          </button>
        </div>
        {matchStrings.map(function (str, index) {
          return (
            <StringInput
              key={`match-${index}`}
              value={str}
              onChange={function (value) {
                handleStringChange(index, value, 'match')
              }}
              onRemove={function () {
                removeString(index, 'match')
              }}
              matches={results.matches[index]}
              type="match"
              currentRegex={regex}
              isOnlyString={matchStrings.length === 1}
            />
          )
        })}
        <button
          onClick={function () {
            addString('match')
          }}
          className="mt-2 px-4 py-2 border rounded hover:bg-gray-50"
          type="button"
        >
          + Add String
        </button>
      </div>

      <div className="bg-red-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <label className="block text-sm font-medium">Strings that should NOT match:</label>
          <button
            onClick={function () {
              resetStrings('nonmatch')
            }}
            className="text-sm text-gray-500 hover:text-gray-700"
            type="button"
          >
            Reset
          </button>
        </div>
        {nonMatchStrings.map(function (str, index) {
          return (
            <StringInput
              key={`nonmatch-${index}`}
              value={str}
              onChange={function (value) {
                handleStringChange(index, value, 'nonmatch')
              }}
              onRemove={function () {
                removeString(index, 'nonmatch')
              }}
              matches={!results.nonMatches[index]}
              type="nonmatch"
              currentRegex={regex}
              isOnlyString={nonMatchStrings.length === 1}
            />
          )
        })}
        <button
          onClick={function () {
            addString('nonmatch')
          }}
          className="mt-2 px-4 py-2 border rounded hover:bg-gray-50"
          type="button"
        >
          + Add String
        </button>
      </div>
    </div>
  )
}
