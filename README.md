# MeowlJS

A minimal reactive UI framework. Write `.meow` files, compile to JavaScript, get a live-updating app.

## Quick Start

**Create a new project:**

```bash
npx meowl create my-app
cd my-app
npm install
npx meowl dev
```

**Or in an existing project:**

```bash
npm install meowljs
npx meowl dev        # Start dev server with watch
npx meowl build      # Build for production
```

Then open http://localhost:3000 (dev) or `build/index.html` (build).

## Project Structure

```
meowljs/
├── cli.js            # CLI (create, dev, build)
├── compiler.js       # Compiler
├── templates/       # Project template for meow create
├── docs/             # Documentation
└── vscode-meow/      # VS Code syntax highlighting
```

## CLI

| Command               | Description                      |
| --------------------- | -------------------------------- |
| `meowl create [name]` | Create a new project             |
| `meowl dev [entry]`   | Start dev server (watch + serve) |
| `meowl build [entry]` | Build for production             |

Use via `npx meowl` or install globally: `npm i -g meowljs`

## Documentation

| Doc                            | Description                                |
| ------------------------------ | ------------------------------------------ |
| [CLI](docs/cli.md)             | create, dev, build commands                |
| [Syntax](docs/syntax.md)       | File format, prelude, template, components |
| [Reference](docs/reference.md) | Runtime API, errors, security              |
| [VS Code](docs/vscode.md)      | Syntax highlighting extension              |

## TL;DR

```meow
counter = 0

function increment = () => { counter = counter + 1 }

---

<div>
  <h1>{counter}</h1>
  <button onClick={increment}>+1</button>
</div>
```
