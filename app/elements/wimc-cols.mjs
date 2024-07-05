export default function WIMCCols({ html }) {
  return html`
    <div class="grid col-12">
      <div class="col-start-1 col-end-12 col-start-2-lg col-end-10-lg flex flex-col gap0">
        <slot></slot>
      </div>
    </div>
  `
}
