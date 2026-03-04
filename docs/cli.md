# Meow CLI

## Installation

```bash
npm install meowix
# or
pnpm add meowix
```

Or use without installing:

```bash
npx meowix create my-app
npx meowix dev
npx meowix build
```

## Commands

### create

Create a new MeowJS project.

```bash
meow create my-app     # Create in ./my-app
meow create            # Create in current directory
```

### dev

Start the dev server with file watching. Rebuilds on `.meow` or `index.html` changes and serves the build at http://localhost:3000.

```bash
meow dev               # Use main.meow as entry
meow dev app.meow      # Use app.meow as entry
```

### build

Build for production.

```bash
meow build             # Build main.meow
meow build app.meow    # Build app.meow
```

## Project setup

After `meow create my-app`:

```bash
cd my-app
npm install
meow dev
```

The template includes `main.meow`, `index.html`, and a `Btn` component.
