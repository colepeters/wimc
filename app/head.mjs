import { getStyles } from '@enhance/arc-plugin-styles'

export default function Head(state) {
  const { store = {} } = state

  // pageTitle is set in /app/preflight.mjs
  const { pageTitle = '' } = store

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${pageTitle}</title>
      ${getStyles.styleTag()}
      <link rel="icon" href="/_public/favicon.svg">
      <meta name="description" content="The Winnipeg Insight Meditation Community (WIMC) is a peer led, non sectarian sangha (or community) of meditation practitioners. We share a commitment to the study & practice of the dharma — the teachings of Buddhism — as a means to support one another in bringing awareness, compassion, and wisdom into our daily lives and the lives of our wider communities.">

      <style>
        body {
          background-color: white;
          color: var(--carob);
          font-feature-settings: "liga";
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        @media (prefers-color-scheme: dark) {
          body {
            background-color: var(--charcoal);
            color: var(--dust);
          }
        }

        .measure {
          max-inline-size: 72ch;
        }

        a {
          transition: color 0.125s linear;
        }

        a:not(.no-underline) {
          text-decoration-line: underline;
          text-decoration-thickness: 0.0625em;
          text-underline-offset: 0.0875em;
          text-decoration-color: var(--accent);
        }

        a:hover,
        a:focus {
          color: var(--accent);
        }
      </style>
    </head>
    <body class="font-sans leading4 pi0 pi5-lg pb4">
`
}
