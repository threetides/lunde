import type { Theme } from "react-shiki"

/**
 * Docs code-sample theme — a faithful take on VS Code's "2026 Dark" default
 * (whose syntax palette is the GitHub Dark palette), retargeted onto our Radix
 * scales (see src/styles/primitives/colors.css) so it shares the product's
 * color language.
 *
 * Colors are CSS `var(--…)` references rather than hex, so Shiki emits them
 * verbatim into inline styles and the browser resolves them against the
 * cascade — the scales flip with the site theme (see colors.css), so the code
 * block follows light/dark for free. Accents use Radix step 11 (the readable
 * accent-text step in both modes); strings use blue step 12 to mirror 2026
 * Dark's two-shades-of-blue (constants vs strings).
 *
 *   tomato-11  → keywords, storage, char constants  (2026 Dark #ff7b72)
 *   blue-11    → constants, support, properties      (#79c0ff)
 *   blue-12    → strings, regex                       (#a5d6ff)
 *   orange-11  → variable & declaration names         (#ffa657)
 *   purple-11  → function names                       (#d2a8ff)
 *   grass-11   → tags, components, JSON keys, escapes  (#7ee787)
 *   gray token → comments                              (#8b949e)
 */
export const shikiTheme: Theme = {
  name: "lunde",
  type: "dark",
  colors: {
    "editor.background": "var(--gray-2)",
    "editor.foreground": "var(--gray-12)"
  },
  tokenColors: [
    {
      scope: ["comment", "punctuation.definition.comment", "string.comment"],
      settings: { foreground: "var(--gray-11)", fontStyle: "italic" }
    },
    {
      // keywords, storage, char constants, embedded punctuation
      scope: [
        "keyword",
        "storage",
        "storage.type",
        "constant.character",
        "constant.other.placeholder",
        "punctuation.section.embedded"
      ],
      settings: { foreground: "var(--tomato-11)" }
    },
    {
      // import/package modifiers stay neutral, as 2026 Dark does
      scope: ["storage.modifier.import", "storage.modifier.package", "storage.type.java"],
      settings: { foreground: "var(--gray-12)" }
    },
    {
      // constants, enum members, support, language vars, property names
      scope: [
        "constant",
        "entity.name.constant",
        "variable.other.constant",
        "variable.other.enummember",
        "variable.language",
        "entity",
        "support",
        "support.constant",
        "support.variable",
        "meta.property-name",
        "meta.module-reference"
      ],
      settings: { foreground: "var(--blue-11)" }
    },
    {
      // strings & regex — the lighter blue
      scope: ["string", "string.regexp", "constant.other.reference.link", "string.other.link"],
      settings: { foreground: "var(--blue-12)" }
    },
    {
      // variable & declaration names
      scope: ["entity.name", "meta.definition.variable", "meta.export.default", "variable"],
      settings: { foreground: "var(--orange-11)" }
    },
    {
      // parameters, members and other plain identifiers stay neutral
      scope: [
        "variable.other",
        "variable.parameter.function",
        "meta.object.member",
        "meta.tag.attributes",
        "meta.embedded.expression"
      ],
      settings: { foreground: "var(--gray-12)" }
    },
    {
      scope: "entity.name.function",
      settings: { foreground: "var(--purple-11)" }
    },
    {
      // tags, components, JSON keys
      scope: ["entity.name.tag", "support.class.component", "support.type.property-name.json"],
      settings: { foreground: "var(--grass-11)" }
    },
    {
      scope: "string.regexp constant.character.escape",
      settings: { foreground: "var(--grass-11)", fontStyle: "bold" }
    },
    {
      scope: ["invalid.broken", "invalid.deprecated", "invalid.illegal", "invalid.unimplemented"],
      settings: { foreground: "var(--tomato-11)", fontStyle: "italic" }
    },
    // Markdown
    {
      scope: ["markup.heading", "markup.heading entity.name"],
      settings: { foreground: "var(--blue-11)", fontStyle: "bold" }
    },
    { scope: "markup.quote", settings: { foreground: "var(--grass-11)" } },
    { scope: "markup.bold", settings: { foreground: "var(--gray-12)", fontStyle: "bold" } },
    { scope: "markup.italic", settings: { foreground: "var(--gray-12)", fontStyle: "italic" } },
    { scope: "markup.inline.raw", settings: { foreground: "var(--blue-11)" } },
    { scope: "markup.underline", settings: { fontStyle: "underline" } },
    { scope: "markup.strikethrough", settings: { fontStyle: "strikethrough" } }
  ]
}
