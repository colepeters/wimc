export default function WIMCNewsletterForm({ html, state }) {
  const { store } = state
  const { result } = store

  if (result === 'success') {
    return html`
      <p class="font-bold">Thanks for joining our newsletter! You’ll hear from us soon.</p>
    `
  }

  if (result === 'exists') {
    return html`<p class="font-bold">It looks like you’ve already subscribed to our list. Thank you!</p>`
  }

  return html`
    <style>
      [name="tell"] { 
        inset-inline-start: -200vw;
        opacity: 0;
      }

      input {
        border-block-end: 1px solid;
        border-color: color-mix(in srgb, var(--back), var(--fore) 30%);
        background: transparent;
        padding-inline-start: 0.25ch;
        color: var(--fore);
      }

      input:focus {
        outline: none;
      }

      input:focus-visible {
        border-radius: 4px;
        box-shadow: none;
        outline: none;
        box-shadow: 0 0 0 2px color-mix(in srgb, var(--back), var(--fore) 40%);
      }

      ::placeholder {
        font-weight: 300;
        font-style: italic;
        color: #999;
      }

      button {
        border-radius: 0.125em;
        background-color: var(--accent);
        color: var(--back);
      }
    </style>
    <form
      method="POST"
      action="/newsletter/signup"
      class="measure"
    >
      <label class="block mbe0">
        <span class="font-medium">
          Email address: <em class="text-1">(required)</em>
        </span>
        <input
          type="email"
          name="email"
          class="block si-100 pb-5"
          placeholder="you@youremail.com"
          required
        />
      </label>
      <label class="block mbe0">
        <span class="font-medium">
          First name: <em class="text-1">(required)</em>
        </span>
        <input
          type="text"
          name="first_name"
          class="block si-100 pb-5"
          placeholder="Your first name"
          required
        />
      </label>
      <label class="block mbe2">
        <span class="font-medium">
          Last name:
        </span>
        <input
          type="text"
          name="last_name"
          class="block si-100 pb-5"
          placeholder="Optionally, your last name"
        />
      </label>
      <input
        type="tel"
        name="tell"
        class="absolute"
        autocomplete="off"
        tabindex="-1"
      />
      <button
        type="submit"
        class="font-medium pi0 pb-4"
      >
        Subscribe
      </button>
    </form>
  `
}
