import { article } from './data';
import { ArticleLayout } from '@/components/ArticleLayout';
import { CodeBlock, InlineCode } from '@/components/Code';
import { ExternalLink, InternalLink } from '@/components/Links';
import Paragraph from '@/components/Paragraph';
import { Heading2, Heading3, Heading4 } from '@/components/Headings';
import { AdditionalImage } from '@/components/Images';
import { OrderedList, UnorderedList, ListItem } from '@/components/Lists';
import BlockQuote from '@/components/BlockQuote';

export default function Page() {
	return (
		<ArticleLayout article={article}>
			<Paragraph>
				'Clean Code: A Handbook of Agile Software Craftsmanship' by Robert
				C. Martin (Uncle Bob) is a seminal work in software development.
				Published in 2008, it emphasizes writing readable, maintainable, and
				elegant code. The book covers several key areas of software
				craftsmanship:
			</Paragraph>

			<Heading2>1. Meaningful Naming</Heading2>
			<Paragraph>
				Martin stresses the importance of choosing clear,
				intention-revealing names for variables, functions, and classes.
				Good names can make code self-explanatory and reduce the need for
				comments.
			</Paragraph>
			<Paragraph>
				I would like to add that it's okay if function names are quite long,
				if necessary, and that single-letter variable names are usually a
				terrible idea. <InlineCode>e</InlineCode> could mean{' '}
				<InlineCode>error</InlineCode>, <InlineCode>event</InlineCode>, or{' '}
				<InlineCode>evaluate</InlineCode>, so it can be confusing for
				someone else reading your code. It can even be confusing for your
				future self.
			</Paragraph>

			<Heading3>Bad example</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`let d: number; // elapsed time in days`}
			</CodeBlock>
			<Paragraph>
				This example uses a single letter variable name, which doesn't
				convey any meaning about its purpose or content.
			</Paragraph>

			<Heading3>Good example</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`let elapsedTimeInDays: number;`}
			</CodeBlock>
			<Paragraph>
				This improved version clearly indicates what the variable
				represents, making the code more readable and self-documenting.
			</Paragraph>

			<Heading3>For functions:</Heading3>
			<Heading4>Bad example</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`function getThem(): number[][] {
    const list1: number[][] = [];
    for (const x of theList)
        if (x[0] === 4)
            list1.push(x);
    return list1;
}`}
			</CodeBlock>
			<Paragraph>
				This function uses vague names and doesn't clearly communicate its
				purpose or the nature of the data it's processing.
			</Paragraph>

			<Heading4>Good example</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`interface Cell {
    isFlagged(): boolean;
}

function getFlaggedCells(gameBoard: Cell[]): Cell[] {
    return gameBoard.filter(cell => cell.isFlagged());
}`}
			</CodeBlock>
			<Paragraph>
				The improved version uses descriptive names and leverages
				TypeScript's type system and array methods to clearly express the
				function's intent.
			</Paragraph>

			<Heading2>2. Functions</Heading2>
			<Paragraph>
				Martin advocates for small, focused functions that do one thing and
				do it well. He provides guidelines on function length, parameter
				lists, and the Single Responsibility Principle.
			</Paragraph>

			<Heading3>Bad example (long function doing multiple things):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`function payEmployee(e: Employee): void {
    if (e.isActive()) {
        const salary = calculateSalary(e);
        const tax = calculateTax(salary);
        const net = salary - tax;
        saveToDB(e, net);
        generatePayslip(e, net);
        sendEmail(e, "Your payment has been processed");
    } else {
        sendEmail(e, "You are not an active employee");
    }
}`}
			</CodeBlock>
			<Paragraph>
				This function violates the Single Responsibility Principle by
				handling multiple concerns: calculation, database operations,
				document generation, and email notifications.
			</Paragraph>

			<Heading3>
				Good example (broken down into smaller, focused functions):
			</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`function processPayment(employee: Employee): void {
    if (employee.isActive()) {
        const netSalary = calculateNetSalary(employee);
        recordPayment(employee, netSalary);
        notifyEmployee(employee, netSalary);
    } else {
        notifyInactiveEmployee(employee);
    }
}

function calculateNetSalary(employee: Employee): number {
    const grossSalary = calculateGrossSalary(employee);
    const taxAmount = calculateTax(grossSalary);
    return grossSalary - taxAmount;
}

function recordPayment(employee: Employee, netSalary: number): void {
    saveToDB(employee, netSalary);
    generatePayslip(employee, netSalary);
}

function notifyEmployee(employee: Employee, netSalary: number): void {
    sendEmail(employee.getEmailAddress(), \`Your payment of \${netSalary} has been processed\`);
}

function notifyInactive Employee(employee: Employee): void {
    sendEmail(employee.getEmailAddress(), "You are not an active employee");
}`}
			</CodeBlock>
			<Paragraph>
				This improved version breaks down the large function into smaller,
				more focused functions. Each function has a single responsibility,
				making the code more modular and easier to maintain.
			</Paragraph>

			<Heading2>3. Comments and Documentation</Heading2>
			<Paragraph>
				While not dismissing comments entirely, Martin argues for code that
				is so clear and expressive that it requires minimal additional
				explanation. He distinguishes between necessary clarifications and
				redundant noise.
			</Paragraph>

			<Heading3>Bad example (redundant comment):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`// Check if the user is logged in
if (user.isLoggedIn()) {
    // ...
}`}
			</CodeBlock>
			<Paragraph>
				This comment is unnecessary as the code itself clearly expresses
				what's being checked.
			</Paragraph>

			<Heading3>Good example (comment explains why, not what):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`// We need to check login status before proceeding due to security requirements
if (user.isLoggedIn()) {
    // ...
}`}
			</CodeBlock>
			<Paragraph>
				This comment provides context that isn't immediately obvious from
				the code itself, explaining the reason behind the check.
			</Paragraph>

			<Heading2>4. Formatting and Aesthetics</Heading2>
			<Paragraph>
				The book delves into the visual aspects of code, discussing
				indentation, white space, and overall structure. Consistent, clean
				formatting enhances readability and reduces cognitive load.
			</Paragraph>

			<Heading3>Bad example (inconsistent formatting):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`class User {
private name: string;
    private age: number;
  constructor(name: string, age: number) {
        this.name = name;
    this.age = age;
    }
    getName(): string { return this.name; }
getAge(): number { return this.age; }
}`}
			</CodeBlock>
			<Paragraph>
				This example has inconsistent indentation and spacing, making it
				harder to read and understand the structure of the class.
			</Paragraph>

			<Heading3>Good example (consistent formatting):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`class User {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
}`}
			</CodeBlock>
			<Paragraph>
				The improved version uses consistent indentation and spacing, making
				the class structure clear and easy to read.
			</Paragraph>

			<Heading2>5. Error Handling</Heading2>
			<Paragraph>
				Martin emphasizes the importance of proper error handling
				techniques, writing code that gracefully handles exceptions and edge
				cases.
			</Paragraph>

			<Heading3>Bad example (poor error handling):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// badExample.ts"
			>
				{`function readFile(filename: string): void {
    try {
        // Read file
    } catch (e) {
        console.log("Error reading file");
    }
}`}
			</CodeBlock>
			<Paragraph>
				This example catches all errors and logs a generic message, losing
				important error details and potentially hiding serious issues.
			</Paragraph>

			<Heading3>Good example (specific error handling):</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`import { promises as fs } from 'fs';

async function readFile(filename: string): Promise<string> {
    try {
        return await fs.readFile(filename, 'utf8');
    } catch (error) {
        if (error instanceof Error) {
            if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
                throw new Error(\`File not found: \${filename}\`);
            }
            throw new Error(\`Error reading file \${filename}: \${e.message}\`);
        }
        throw error;
    }
}`}
			</CodeBlock>
			<Paragraph>
				This improved version handles specific error types, provides more
				detailed error messages, and properly propagates errors up the call
				stack.
			</Paragraph>

			<Heading2>6. Unit Testing</Heading2>
			<Paragraph>
				Martin is a strong advocate for Test-Driven Development (TDD) and
				dedicates several chapters to writing effective unit tests.
			</Paragraph>

			<Heading3>Example of a good unit test:</Heading3>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`import { expect } from 'chai';
import { Calculator } from './Calculator';

describe('Calculator', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should add two numbers correctly', () => {
        expect(calc.add(2, 2)).to.equal(4);
        expect(calc.add(-1, 1)).to.equal(0);
        expect(calc.add(-1, -1)).to.equal(-2);
    });
});`}
			</CodeBlock>
			<Paragraph>
				This test is clear, concise, and covers multiple scenarios for the
				add function, including positive, negative, and zero sum cases.
			</Paragraph>

			<Heading2>7. Problematic Code Patterns</Heading2>
			<Paragraph>
				Martin extensively discusses signs of suboptimal code and how to
				improve it. These include:
			</Paragraph>

			<Heading3>
				a) Rigidity: When software is difficult to change because every
				modification affects many other parts of the system.
			</Heading3>

			<Heading4>Example of rigid code:</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`class Report {
    generateReport(): void {
        this.getData();
        this.formatData();
        this.printReport();
        this.emailReport();
        this.saveToDatabase();
    }
    // ... other methods
}`}
			</CodeBlock>
			<Paragraph>
				This class is rigid because any change to the report generation
				process requires modifying this class, potentially affecting all its
				functionalities.
			</Paragraph>

			<Heading4>Improved version:</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`interface DataSource {
    getData(): Data;
}

interface Formatter {
    format(data: Data): FormattedData;
}

interface Printer {
    print(data: FormattedData): void;
}

interface EmailService {
    send(data: FormattedData): void;
}

interface DatabaseService {
    save(data: FormattedData): void;
}

class Report {
    constructor(
        private dataSource: DataSource,
        private formatter: Formatter,
        private printer: Printer,
        private emailService: EmailService,
        private dbService: DatabaseService
    ) {}

    generateReport(): void {
        const data = this.dataSource.getData();
        const formattedData = this.formatter.format(data);
        this.printer.print(formattedData);
        this.emailService.send(formattedData);
        this.dbService.save(formattedData);
    }
}`}
			</CodeBlock>
			<Paragraph>
				This version is more flexible as each component can be modified or
				replaced independently, adhering to the Dependency Inversion
				Principle.
			</Paragraph>

			<Heading3>
				b) Fragility: Changes in one part of the code unexpectedly break
				other, seemingly unrelated parts.
			</Heading3>

			<Heading4>Example of fragile code:</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`class UserService {
    registerUser(username: string, email: string): void {
        // Register user
        this.sendWelcomeEmail(username, email);
        this.updateUserCount();
    }

    private sendWelcomeEmail(username: string, email: string): void {
        // Send email
    }

    private updateUserCount(): void {
        // Update count in database
    }
}`}
			</CodeBlock>
			<Paragraph>
				If the email sending fails, it will prevent the user count from
				being updated, even though these operations are not logically
				dependent.
			</Paragraph>

			<Heading4>Improved version:</Heading4>
			<CodeBlock
				language="typescript"
				commentedOutFileName="// goodExample.ts"
			>
				{`class UserService {
    constructor(
        private emailService: EmailService,
        private countService: UserCountService
    ) {}

    registerUser(username: string, email: string): void {
        // Register user
        try {
            this.emailService.sendWelcomeEmail(username, email);
        } catch (e) {
            // Log error, but don't prevent further operations
            console.error('Failed to send welcome email', e);
        }
        this.countService.incrementUserCount();
    }
}`}
			</CodeBlock>
			<Paragraph>
				This version separates concerns and ensures that a failure in one
				operation doesn't affect others, making the system more robust.
			</Paragraph>

			<Heading2>Conclusion</Heading2>
			<Paragraph>
				'Clean Code' remains a pivotal text in software development,
				offering enduring principles that transcend specific programming
				languages. Its practical focus and concrete examples provide
				invaluable guidance for transforming problematic code into clean,
				efficient solutions. While some may find certain aspects
				prescriptive, the core concepts of writing clear, maintainable code
				are more relevant than ever in today's complex software landscape.
			</Paragraph>
		</ArticleLayout>
	);
}
