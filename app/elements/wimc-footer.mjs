export default function WIMCFooter({ html }) {
  return html`
    <style>
      nav {
        color: color-mix(in srgb, currentColor 85%, transparent);
      }

      nav a {
        text-decoration-color: color-mix(in srgb, var(--accent) 50%, transparent);
      }

      hr {
        border-block-start: 1px solid hsl(0deg 0% 50% / 0.25);
      }
    </style>
    <hr class="mbs6 pbs2" />
    <footer class="text-1">
      <h6 class="font-medium">Winnipeg Insight Meditation Community</h6>
      <nav class="mbs0">
        <ul class="list-none italic flex gap-2">
          <li>
            <a class="" href="/">Home</a>
          </li>
          <li>
            <a class="" href="/orientation">Orientation</a>
          </li>
          <li>
            <a class="" href="/sessions">Sessions</a>
          </li>
          <li>
            <a class="" href="/newsletter">Newsletter</a>
          </li>
          <li>
            <a class="" href="/contact">Contact</a>
          </li>
        </ul>
      </nav<
    </footer>
  `
}
