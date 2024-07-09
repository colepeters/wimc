export default function WIMCEnso({ html }) {
  return html`
    <style>
      @keyframes rotate {
        from { rotate: 0deg; }
        to   { rotate: 360deg; }
      }

      @keyframes scale {
        from { scale: 1; filter: blur(0px); }
        to   { scale: 1.125; filter: blur(4px); }
      }

      svg {
        animation: rotate 30s linear infinite;
        stroke: currentcolor;
        overflow: visible;
      }

      #a { animation: scale 10s linear infinite alternate; }
      #c { animation: scale 8s linear infinite alternate; }
      #e { animation: scale 6s linear infinite alternate; }
    </style>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 141 141">
      <circle cx="74" cy="67" id="a" style="fill: none; stroke-width: 1; stroke-opacity: 1;" r="67"/>
      <circle cx="67" cy="67" id="c" style="fill: none; stroke-width: 1; stroke-opacity: 1;" r="67"/>
      <circle cx="72" cy="74" id="e" style="fill: none; stroke-width: 1; stroke-opacity: 1;" r="67"/>
      <circle cx="74" cy="67" style="fill: none; stroke-width: 1; stroke-opacity: 0.5;" r="67"/>
      <circle cx="67" cy="67" style="fill: none; stroke-width: 1; stroke-opacity: 0.5;" r="67"/>
      <circle cx="72" cy="74" style="fill: none; stroke-width: 1; stroke-opacity: 0.5;" r="67"/>
    </svg>
  `
}
