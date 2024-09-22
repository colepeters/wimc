export default function WIMCHeader({ html }) {
  return html`
    <style>
      :host {
        color: var(--charcoal);
      }

      wimc-enso {
        block-size: calc(var(--text-2) * 2.5);
        aspect-ratio: 1 / 1;
        z-index: -1;
        opacity: 0.333;
        color: var(--carob);
      }

      @media (prefers-color-scheme: dark) {
        :host,
        wimc-enso {
          color: var(--dust);
        }
      }

      @media (width >= 48em) {
        wimc-enso {
          translate: -50% 0;
        }
      }
    </style>

    <header class="flex-lg align-items-center justify-content-between text-center text-start-lg">
      <a class="relative inline-block no-underline pb0" href="/">
        <wimc-enso class="absolute inset-0 mb-auto mi-auto mi-none-lg"></wimc-enso>
        <h1 class="uppercase font-normal leading1">
          <span class="block text0 tracking2 font-medium">Winnipeg Insight</span>
          <span class="text-1 tracking3">Meditation Community</span>
        </h1>
      </a>

      <nav class="mb4 mb-none-lg">
        <ul class="list-none flex flex-wrap text-1 uppercase tracking2 leading5 font-medium justify-content-center">
          <li>
            <a class="no-underline p-4" href="/">Home</a>
          </li>
          <li>
            <a class="no-underline p-4" href="/orientation">Orientation</a>
          </li>
          <li>
            <a class="no-underline p-4" href="/sessions">Sessions</a>
          </li>
          <li>
            <a class="no-underline p-4" href="/newsletter">Newsletter</a>
          </li>
          <li>
            <a class="no-underline p-4" href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

  `
}
