---
title: SvelteKit environment variables - A Simple Guide, 2024
date: June 01, 2024
writer: Dan Edwards
tags: Svelte, SvelteKit, JavaScript
metadescription: Learn how to properly use environment variables in SvelteKit, including when to avoid them, how to implement them for public information, and best practices for handling sensitive data. Discover built-in SvelteKit features for secure and efficient environment variable management.
keywords: SvelteKit, environment variables, web development, security, configuration management, frontend development, Vite, server-side rendering, client-side security, .env files, JavaScript frameworks
---

SvelteKit has fantastic built-in support for environment variables, but do you really need to use them? This guide will help you determine if you need to use them, and show you how to do it properly.

## Do You Really Need Environment Variables?

1. **Are you adding pointless complexity?**\
   It might be simpler to use a regular variable, and change it as required. Environment variables can easily be imported incorrectly as `null`, breaking your project. They're also less traceable than regular variables, so avoid them if you can.

```js
// +page.svelte

const env = 'production';
```

2. **Is this information sensitive?**\
   Remember that any environment variable accessible on the client side will be publicly available. Sensitive data should never be stored in client-side accessible environment variables. Server-side handling is often more secure.

If you've determined that environment variables are necessary for non-sensitive, environment-specific configuration, proceed.

## Using Environment Variables for Public (Non-Sensitive) Information

For non-sensitive information that can be safely exposed to the client, follow these steps:

1. **No extra packages**\
   You **don't** need to install or import any extras like `dotenv`. SvelteKit handles environment variables by itself.

2. **Create Environment Files**\
   Create one or more of the following files in your project root:

-  `.env` Loaded in all cases
-  `.env.local` Loaded in all cases, ignored by git
-  `.env.[mode]` Only loaded in specified mode
-  `.env.[mode].local` Only loaded in specified mode, ignored by git

Vite (the builder for SvelteKit) uses these files to manage environment-specific variables. For more details on how Vite handles these files, refer to the [Vite documentation on env files](https://vitejs.dev/guide/env-and-mode.html#env-files).

3. **Name Your Variables**\
   For variables that can be publicly exposed, use the `VITE_` prefix. For example:

   ```YAML
   // .env

   # Prefix the variable with VITE\_

   VITE_API_URL=https://api.example.com
   ```

   This naming convention tells Vite that it's safe to include this variable in the client-side bundle.

4. **Access Variables in Svelte Components**\
   In your Svelte component's script tags, access these variables using the build-in `import.meta.env` method like this:

   ```js
   // +page.svelte

    <script>

   const apiUrl = import.meta.env.VITE_API_URL;

   <script>
   ```

## Handling Sensitive Information

For sensitive data like API keys or secrets, follow these guidelines:

-  **Never Use Client-Side Environment Variables**\
   Do not use environment variables prefixed with `VITE_` for any sensitive information. These are bundled with your client-side code and are publicly accessible.

-  **Use Server-Side Solutions**\
   For sensitive data, implement server-side handling. This might involve setting up secure API endpoints or using server-side features of SvelteKit.

-  **Server-Side Environment Variables**\
   If using server-side features of SvelteKit, you can use non-`VITE_` prefixed variables in server-only files (like `+page.server.js`). These are not exposed to the client.

## Security Considerations

-  Always treat variables prefixed with `VITE_` as public. Never use this prefix for secrets, API keys, or any sensitive information.
-  For any data that must remain confidential, implement proper server-side handling and authentication mechanisms.
-  Regularly review your environment variable usage to ensure sensitive data isn't accidentally exposed.
-  Consider alternative methods for managing configuration that don't rely on environment variables when possible.

By following these guidelines, you can effectively manage public information in your SvelteKit application while ensuring that sensitive data remains secure. Remember, the safest approach is to minimize the use of environment variables, especially for any data that shouldn't be public.
