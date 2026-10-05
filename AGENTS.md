# Repository Guidelines

## Project Structure & Module Organization

This repository is currently an empty scaffold. As the project is introduced, keep the layout predictable:

- Place application source in `src/`.
- Place automated tests in `tests/` (or alongside source as `*.test.*` when the chosen framework supports it).
- Place static files such as images and fonts in `assets/` or the framework's public-assets directory.
- Keep configuration files at the repository root and document non-obvious choices in `README.md`.

Do not commit generated output, dependency folders, local environment files, or secrets.

## Build, Test, and Development Commands

No build system or package manifest has been configured yet. When adding one, provide reproducible root-level commands and record them in `README.md`. For a Node-based project, the expected baseline is typically:

```powershell
npm install       # install declared dependencies
npm run dev       # start local development
npm test          # run the test suite
npm run build     # produce a production build
```

Only document commands that exist in the committed configuration; keep scripts portable and non-interactive for CI.

## Coding Style & Naming Conventions

Follow the formatter and linter configured for the chosen stack. Use spaces (two spaces for JSON, YAML, and web styles unless the tool dictates otherwise). Name files and folders consistently with their ecosystem: use `kebab-case` for web assets and `PascalCase` for component files where applicable. Prefer descriptive names such as `customer-summary.ts` over abbreviations.

## Testing Guidelines

Add tests with new behavior and bug fixes. Use clear test names that describe the expected outcome, for example `checkout rejects an expired card`. Keep tests deterministic; mock external services and do not depend on local credentials. Run the complete test command before opening a pull request.

## Commit & Pull Request Guidelines

There is no existing commit history to establish a local convention. Use concise, imperative commit subjects, such as `Add customer search endpoint` or `Fix invoice total rounding`. Keep commits focused. Pull requests should explain the change and verification performed, link related issues, and include screenshots for visible UI changes. Note configuration changes, migrations, or follow-up work explicitly.

## Security & Configuration

Keep credentials in ignored local environment files (for example, `.env.local`) and commit only safe templates such as `.env.example`. Validate untrusted input and review dependency additions before merging.
