# slpack

**slpack** is a powerful and simple command-line tool designed to quickly scaffold and initialize frontend projects. It supports multiple templates like React, Vue, TypeScript, and allows you to use either local or remote resources.

### Features

- Support for multiple project templates (React, Vue, Vanilla, etc.)
- Option to use local or remote templates
- Quickly generate project structure and initialize dependencies

## Quick Start

1. Install slpack globally:

   ```bash
   npm install -g slpack
   ```

2. Create a new project:

   ```bash
   slpack create my-new-project
   ```

3. Choose a project template and complete the initialization. The project will be created in the current directory.

## Options

### --template

Specify the template to use for your project. Available options include:

- `react`: Standard React project.
- `react-ts`: React project using TypeScript.
- `vue`: Standard Vue project.
- `vue-ts`: Vue project using TypeScript.
- `vanilla`: Vanilla JavaScript project.
- `vanilla-ts`: Vanilla JavaScript project using TypeScript.

If no template is specified, the CLI will prompt you to select one.

### --local

Use local template resources instead of fetching them from a remote source. Default is `false`.

## Examples

Here are some common usage examples:

Creating a React project

```bash
slpack create my-react-app -t react
```

Using local resources to create a Vue project

```bash
slpack create my-vue-app -t vue --local
```

## Contribution Guide

We welcome any contributions to slpack! Here's how you can contribute:

### Cloning the Project

```bash
git clone https://github.com/pgshaunl/slpack.git
cd slpack
npm install
```

### Project Structure

The project is organized as follows:

```bash
├─ packages
│  ├─ cli
│  │  ├─ bin
│  │  │  └─ slpack
│  │  ├─ dist
│  │  │  └─ index.js
│  │  ├─ package.json
│  │  ├─ src
│  │  │  ├─ cli.ts
│  │  │  ├─ commands
│  │  │  │  ├─ base
│  │  │  │  │  ├─ build.ts
│  │  │  │  │  ├─ create.ts
│  │  │  │  │  ├─ info.ts
│  │  │  │  │  ├─ preview.ts
│  │  │  │  │  └─ serve.ts
│  │  │  │  ├─ index.ts
│  │  │  │  └─ registerCommand.ts
│  │  │  ├─ constants
│  │  │  │  └─ templates.ts
│  │  │  ├─ index.ts
│  │  │  ├─ types
│  │  │  │  └─ template.ts
│  │  │  └─ utils
│  │  │     ├─ loadTemplate.ts
│  │  │     ├─ logger.ts
```

This structure shows the following key parts:

- `bin/slpack`: Entry point for the CLI executable.
- `src/commands`: Contains the CLI commands such as `create`, `build`, `info`, etc.
- `src/utils`: Utility functions for environment setup, logging, validation, and more.
- `src/constants`: Contains template-related constants.

### Development

You can test your changes locally using npm link:

```bash
npm link
slpack create test-project
```

## Changelog

### 0.0.3 - 2024-09-07

- Update documentation

### 0.0.2 - 2024-09-07

- Small fix

### 0.0.1 - 2024-09-07

- Initial release with support for React, Vue, and Vanilla templates

## License

This project is licensed under the [MIT License](LICENSE).
