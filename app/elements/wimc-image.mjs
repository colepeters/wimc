export default function WIMCImage({ html, state }) {
  const { attrs } = state
  const { src } = attrs

  return html`
    <style>
      figure {
        mask-image: linear-gradient(to bottom, white, transparent);
        opacity: 0.15;
      }

      img {
        aspect-ratio: 2 / 1;
      }
    </style>
    <figure class="absolute z-1 inset-bs-0 inset-i-0">
      <img src="${src}" alt="" class="si-100vw object-cover object-c" />
    </figure>
  `
}
