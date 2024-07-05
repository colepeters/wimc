export default function WIMCEnso({ html }) {
  return html`
    <style>
      @keyframes rotate {
        from { rotate: 0deg; }
        to   { rotate: 360deg; }
      }

      @keyframes scale {
        from { scale: 1; filter: blur(0px); }
        to   { scale: 1.125; filter: blur(6px); }
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
      <g class="enso">
        <circle cx="74" cy="67" r="67" class="fills"/>
        <g class="strokes">
          <g class="inner-stroke-shape">
            <defs>
              <clipPath id="b">
                <use href="#a"/>
              </clipPath>
              <circle cx="74" cy="67" id="a" style="fill: none; stroke-width: 4; stroke-opacity: 1;" r="67"/>
            </defs>
            <use href="#a" clip-path="url('#b')"/>
          </g>
        </g>
        <circle cx="67" cy="67" r="67" class="fills"/>
        <g class="strokes">
          <g class="inner-stroke-shape">
            <defs>
              <clipPath id="d">
                <use href="#c"/>
              </clipPath>
              <circle cx="67" cy="67" id="c" style="fill: none; stroke-width: 4; stroke-opacity: 1;" r="67"/>
            </defs>
            <use href="#c" clip-path="url('#d')"/>
          </g>
        </g>
        <circle cx="72" cy="74" r="67" class="fills"/>
        <g class="strokes">
          <g class="inner-stroke-shape">
            <defs>
              <clipPath id="f">
                <use href="#e"/>
              </clipPath>
              <circle cx="72" cy="74" id="e" style="fill: none; stroke-width: 4; stroke-opacity: 1;" r="67"/>
            </defs>
            <use href="#e" clip-path="url('#f')"/>
          </g>
        </g>
      </g>
    </svg>
  `
}
