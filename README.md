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
lunde/
├── public/             static assets (favicons, web manifest)
├── src/
│   ├── styles/         global styles, reset, and design tokens
│   ├── assets/         fonts and images
│   └── main.tsx        site entry point
├── vite.config.ts
└── package.json
```

The CSS tokens live in [`src/styles/tokens.css`](src/styles/tokens.css).

## License

See [LICENSE](LICENSE).