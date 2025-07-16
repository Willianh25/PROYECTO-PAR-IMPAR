class InputRange extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <label>Inicio: <input type="number" id="inicio"></label>
      <label>Fin: <input type="number" id="fin"></label>
      <button id="enviar">Enviar</button>
    `;
  }
}

customElements.define('input-range', InputRange);