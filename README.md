# Front-end Web Server Tool

- **Purpose**: This tool is designed as a web server catering to front-end developers, primarily for use during the development of web applications or websites.

- **Features**:
  1. **Execution of Transpilers and Bundlers**:
     - Automatically runs transpilers (e.g., TypeScript) and bundlers to convert code into executable forms and efficiently handle multiple files.

  2. **Utilization of bun and bun api Runtimes**:
     - Uses the bun and bun api runtimes for high-speed performance, ensuring rapid processing and a smooth development experience.

  3. **Command-Line Interface (CLI) for On-Site Development**:
     - Provides a command-line interface for developers, allowing them to use the tool locally with concise commands for tasks like project building and testing.

**Note**: The tool aims to offer a straightforward and efficient solution, empowering developers in their front-end development endeavors.

## Usage

```bash
bunx @infodb/serve
```

### Options

```
-v, --version           output the current version
--base <path>           base directory (default: ".")
--port <port>           port number (default: "8080")
--host <hostname>       host name (default: "localhost")
-e --entrypoint <file>  entrypoint file (default: "index.tsx")
-h, --help              display help for command
```

## License

MIT
