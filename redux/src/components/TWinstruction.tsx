function TWinstruction() {
    return (
        <div className="p-6 bg-gray-900 text-white rounded-lg shadow-lg">
            {/* Header */}
            <p className="mt-2 text-lg font-semibold">
                Here’s how I solved the **Tailwind installation issues**:
            </p>

            {/* Error Message */}
            <p className="mt-2">Initially, I encountered the following error:</p>
            <pre className="bg-gray-700 text-white p-3 rounded-md">
                <code>
                    found 0 vulnerabilities{"\n"}
                    npm error: Could not determine executable to run{"\n"}
                    npm error: A complete log of this run can be found in:{"\n"}
                    C:\Users\sahas\AppData\Local\npm-cache\_logs\2025-03-02T01_42_53_770Z-debug-0.log
                </code>
            </pre>

            {/* Solution Steps */}
            <p className="mt-4 font-semibold">Steps to Fix the Issue:</p>
            <ol className="list-decimal list-inside space-y-2">
                <li>
                    Follow the official installation guide:{" "}
                    <a
                        className="text-blue-400 underline"
                        href="https://tailwindcss.com/docs/installation/using-vite"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Tailwind Installation with Vite
                    </a>
                </li>
                <li>
                    Manually create the file:{" "}
                    <code className="bg-yellow-600 text-white px-2 py-1 rounded">
                        tailwind.config.ts
                    </code>
                </li>
                <li>Update the `tailwind.config.ts` file with the following content:</li>
            </ol>

            {/* Tailwind Config File */}
            <pre className="bg-gray-700 text-white p-4 rounded-md mt-2">
                <code>
                    {`export default {
                        content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
                        theme: {
                            extend: {},
                        },
                        plugins: [],
                        };`}
                </code>
            </pre>

            {/* Package.json Update */}
            <p className="mt-4 font-semibold">
                4. Update `package.json` to Recognize TypeScript Configuration:
            </p>
            <pre className="bg-gray-700 text-white p-4 rounded-md mt-2">
                <code>
                    {`"scripts": {
                        "dev": "vite",
                        "build": "tsc -b && vite build",
                        "lint": "eslint .",
                        "preview": "vite preview",
                        "tailwind": "tailwindcss -c tailwind.config.ts -o src/tailwind.css --watch"
                        },`}
                </code>
            </pre>

            {/* Conclusion */}
            <p className="mt-4 font-semibold">
                🎉 And that’s it! You’re all set to enjoy coding with TailwindCSS!
            </p>
        </div>
    );
}

export default TWinstruction;
