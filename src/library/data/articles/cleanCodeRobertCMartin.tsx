import { CodeBlock } from '@/components/Code'
import StyledLink from '@/components/StyledLink'
import { september, tags } from '@/library/constants'
import { createDate } from '@/library/utilities'
import type { Article } from '@/types'
import featuredImage from '@public/images/clean-code-robert-c-martin-summary-with-typescript-examples.png'

export const cleanCodeRobertCMartin: Article = {
	publishedAt: createDate(10, september, 2024),
	displayTitle: 'Clean Code by Robert C. Martin: summary with TypeScript examples',
	metaTitle: 'Clean Code by Robert C. Martin: summary with TypeScript examples',
	metaDescription: `Explore the key principles of writing maintainable and elegant code in my comprehensive review of Robert C. Martin's 'Clean Code'.`,
	tags: [tags.typescript, tags.bookReview],
	featuredImage,
	slug: 'clean-code-robert-c-martin-summary-with-typescript-examples',
	content: (
		<>
			<p>
				<StyledLink
					href="https://www.amazon.co.uk/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
					ariaLabel="Clean Code by Robert C Martin book on Amazon"
				>
					Clean Code: A Handbook of Agile Software Craftsmanship
				</StyledLink>{' '}
				by Robert C. Martin is probably the closest a software development book can get towards being a timeless classic. Published in 2008,
				it emphasizes writing readable, maintainable, and elegant code.
			</p>
			<p>
				{`The book covers several key areas of software craftsmanship and is
				not specific to any particular programming language. Here's what I
				found most useful when reading it, with some additional tips for
				working with TypeScript.`}
			</p>
			<h2>1. Meaningful Names</h2>
			<p>
				Martin stresses the importance of choosing clear, intention-revealing names for variables, functions, and classes. Well-chosen,
				expressive names can make code self-explanatory, reduce the need for comments, and reduce the number of things you need to remember.
			</p>
			<p>
				{`Finding the perfect expressive name for a variable or function can take a long time, so feel free to
        rename things if you're hit with inspiration later on. Modern IDEs make this easy, and your teammates
        won't complain if it's a genuine improvement.`}
			</p>
			<p>
				{`I want to add that it's okay if function names are pretty long, if necessary, and that single-letter
        variable names are usually terrible. `}
				<code>e</code> could mean <code>error</code>, <code>event</code>, or <code>evaluate</code>, so it can be confusing for someone (your
				future self included) reading your code.
			</p>
			<h3>For variables</h3>
			<CodeBlock language="typescript" fileName="badExample.ts">
				{'let d: number; // elapsed time in days'}
			</CodeBlock>
			<p>
				{`This example uses a single-letter variable name, which doesn't convey any meaning about its purpose or
        content.`}
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{'let elapsedTimeInDays: number;'}
			</CodeBlock>
			<p>{`This improved version indicates the variable's value, making the code readable and self-documenting.`}</p>
			<h3>For functions</h3>
			<CodeBlock language="typescript" fileName="badExample.ts">
				{`function getThem(): number[][] {
    const list1: number[][] = [];
    for (const x of theList)
        if (x[0] === 4)
            list1.push(x);
    return list1;
}`}
			</CodeBlock>
			<p>
				{`This function uses vague names and doesn't clearly communicate its purpose or the nature of the data
        it's processing.`}
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{`interface Cell {
    isFlagged(): boolean;
}

function getFlaggedCells(gameBoard: Cell[]): Cell[] {
    return gameBoard.filter(cell => cell.isFlagged());
}`}
			</CodeBlock>
			<p>
				{`The improved version uses descriptive names and leverages TypeScript's type system and array methods
        to clearly express the function's intent.`}
			</p>
			<h2>2. Functions</h2>
			<p>
				Martin advocates for small, focused functions that do one thing well. He provides guidelines on function length, parameter lists,
				and the Single Responsibility Principle.
			</p>
			<CodeBlock language="typescript" fileName="badExample.ts">
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
			<p>
				This function violates the Single Responsibility Principle by handling multiple concerns: calculation, database operations, document
				generation, and email notifications.
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
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
			<p>
				This improved version breaks down the colossal function into smaller, more focused functions. Each function has a single
				responsibility, making the code more modular and easier to maintain.
			</p>
			<h2>3. Comments</h2>
			<p>
				While not dismissing comments entirely, Martin argues for code that is so clear and expressive that it requires minimal additional
				explanation. He distinguishes between necessary clarifications and redundant noise.
			</p>
			<CodeBlock language="typescript" fileName="badExample.ts">
				{`// Check if the user is logged in
if (user.isLoggedIn()) {
    // ...
}`}
			</CodeBlock>
			<p>{`This comment is unnecessary as the code clearly expresses what's being checked.`}</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{`// IMPORTANT: Do not change the order of these operations.
// The API expects the data to be sent in this specific sequence,
// or it will reject the entire batch.
function processUserData(users: User[]): void {
    for (const user of users) {
        sendBasicInfo(user);
        updatePreferences(user);
        recordLoginTime(user);
        notifyConnectedServices(user);
    }
}`}
			</CodeBlock>
			<p>
				{`This imaginary API is probably not very well coded and should be rewritten. However, if it were an
        external API that you couldn't change, this comment would be justified.`}
			</p>
			<h3>JSDoc Comments</h3>
			<p>
				One TypeScript-specific feature I learned from another book,{' '}
				<StyledLink href="https://effectivetypescript.com/" ariaLabel="Effective TypeScript by Dan Vanderkam">
					Effective TypeScript, by Dan Vanderkam
				</StyledLink>{' '}
				is using JSDoc comments. You can put these in your types and interfaces, creating helpful popups when filling your variables with
				data.
			</p>
			<CodeBlock language="typescript" fileName="articles.ts">{`import { StaticImageData } from 'next/image';

export interface Article {
title: string;
description: string;
writer: string;

/** Lowercase, separated with a comma and space
 * 	Example; 'react, next.js, front-end'
 */
keywords: string;

/** Landscape meta image, PNG exactly 1,200 x 675px */
featuredImage: StaticImageData;

/**Year-Month-Day: '2024-09-04' */
date: string;
}`}</CodeBlock>
			<h2>4. Formatting</h2>
			<p>
				{`This chapter is dated, as modern IDEs like VS Code and powerful plugins like Prettier and ESLint can
        instantly enforce beautiful formatting. However, it's still an important consideration, as coding is
        probably 98% reading and 2% writing, and anything you can do to make your code more accessible for
        other people to understand is undoubtedly a good thing.`}
			</p>
			<h2>5. Error Handling</h2>
			<p>
				Martin emphasizes the importance of proper error handling techniques, writing code that gracefully handles exceptions and edge
				cases.
			</p>
			<CodeBlock language="typescript" fileName="badExample.ts">
				{`function readFile(filename: string): void {
    try {
        // Read file
    } catch (e) {
        console.log("Error reading file");
    }
}`}
			</CodeBlock>
			<p>
				This example catches all errors and logs a generic message, losing important error details and potentially hiding serious issues.
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{`import { promises as fs } from 'fs';

async function readFile(filename: string): Promise<string> {
    try {
        return await fs.readFile(filename, 'utf8');
    } catch (error) {
        if (error instanceof Error) {
            if ('code' in error && error.code === 'ENOENT') {
                throw new Error(\`File not found: \${filename}\`);
            }
            throw new Error(\`Error reading file \${filename}: \${error.message}\`);
        }
        throw error;
    }
}`}
			</CodeBlock>
			<p>
				This improved version handles specific error types, provides more detailed error messages, and correctly propagates errors up the
				call stack.
			</p>
			<h2>6. Testing</h2>
			<p>
				Martin strongly advocates Test-Driven Development (TDD) and dedicates several chapters to writing effective unit tests. For
				TypeScript projects, I love using Vitest, as you can also write your tests in TypeScript with minimal or no additional
				configuration.
			</p>
			<CodeBlock language="typescript" fileName="calculator.test.ts">
				{`import { describe, it, expect, beforeEach } from 'vitest';

import { Calculator } from './Calculator';

describe('Calculator', () => {
    let calc: Calculator;

    beforeEach(() => {
        calc = new Calculator();
    });

    it('should add two numbers correctly', () => {
        expect(calc.add(2, 2)).toBe(4);
        expect(calc.add(-1, 1)).toBe(0);
        expect(calc.add(-1, -1)).toBe(-2);
    });
});`}
			</CodeBlock>
			<p>
				This test is clear and concise and covers multiple scenarios for the add function, including positive, negative, and zero-sum cases.
			</p>
			<h2>7. Problematic Code Patterns</h2>
			<p>Martin extensively discusses signs of suboptimal code and how to improve it. These include:</p>
			<h3>a) Rigidity</h3>
			<p>When software is difficult to change because every modification affects many other parts of the system.</p>
			<CodeBlock language="typescript" fileName="badExample.ts">
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
			<p>
				This class is rigid because any change to the report generation process requires modifying this class, potentially affecting all its
				functionalities.
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{`interface Data {}
interface FormattedData {}

interface DataSource {
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
			<p>
				This version is more flexible as each component can be modified or replaced independently, adhering to the Dependency Inversion
				Principle.
			</p>
			<h3>b) Fragility</h3>
			<p>Changes in one part of the code unexpectedly break other seemingly unrelated parts.</p>
			<CodeBlock language="typescript" fileName="badExample.ts">
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
			<p>
				If the email sending fails, it will prevent the user count from being updated, even though these operations are not logically
				dependent.
			</p>
			<CodeBlock language="typescript" fileName="improvedExample.ts">
				{`interface EmailService {
    sendWelcomeEmail(username: string, email: string): void;
}

interface UserCountService {
    incrementUserCount(): void;
}

class UserService {
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
			<p>
				{`This version separates concerns and ensures that a failure in one operation doesn't affect others,
        making the system more robust.`}
			</p>
			<h2>Conclusion</h2>
			<p>
				{`'Clean Code' remains a pivotal text in software development, offering enduring principles that
        transcend specific programming languages. Its practical focus and concrete examples provide invaluable
        guidance for transforming problematic code into clean, efficient solutions. While some may find
        certain aspects prescriptive, the core concepts of writing clear, maintainable code are more relevant
        than ever in today's complex software landscape.`}
			</p>
		</>
	),
}
