# lunde

The threetides studio's design system, deployed at
[lunde.threetides.dev](https://lunde.threetides.dev).

`lunde` is a React design system built on top of [Base UI](https://base-ui.com).
It wraps Base UI's unstyled primitives in a smaller, friendlier API that exposes
only what most interfaces need, and ships them styled, along with a set of CSS
tokens for the studio's design language.

## Development

lunde uses [Bun](https://bun.sh) as its package manager. Clone the repo,
install dependencies, and start the dev server:

```sh
bun install
bun run dev      # serves the site at http://localhost:5173
```

Other scripts:

```sh
bun run build    # type-check, lint, and build into dist/
bun run preview  # preview the production build locally
bun run check    # format + lint + type-check
```

## Project structure

```
src/
├── components/   the design system — Base UI primitives wrapped and styled
├── features/     the documentation site that consumes them
├── routes/       file-based routes (TanStack Router)
└── styles/       reset, design tokens, and global styles
```

Two layers: `components/` is the library, `features/` is the site built on it.

A component is a thin wrapper over a Base UI primitive, styled with its own
CSS. Each one is documented by a route that renders live examples next to their
source — the source is imported with `?raw`, so the code shown is always the
code that runs.

Design tokens live in [`src/styles/tokens.css`](src/styles/tokens.css).

## License

See [LICENSE](LICENSE).