# Meowl CLI

## Installation

```bash
npm install meowljs
# or
pnpm add meowljs
```

Or use without installing:

```bash
npx meowl create my-app
npx meowl dev
npx meowl build
```

## Commands

### create

Create a new MeowlJS project.

```bash
npx meowl create my-app    # Create in ./my-app
npx meowl create           # Create in current directory
```

### dev

Start the dev server with file watching. Rebuilds on `.meow` or `index.html` changes and serves the build at http://localhost:3000.

```bash
npx meowl dev              # Use main.meow as entry
npx meowl dev app.meow     # Use app.meow as entry
```

### build

Build for production.

```bash
npx meowl build            # Build main.meow
npx meowl build app.meow   # Build app.meow
```

## Project setup

After `meowl create my-app`:

```bash
cd my-app
npm install
npx meowl dev
```

The template includes `main.meow`, `index.html`, and a `Btn` component.
