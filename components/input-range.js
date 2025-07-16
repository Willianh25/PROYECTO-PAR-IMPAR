class InputRange extends HTMLElement {
  constructor() {
    super();
    // Se crea el Shadow DOM
    this.attachShadow({ mode: 'open' }); 
  }

  connectedCallback() {
    // Se define el contenido del Shadow DOM
    this.shadowRoot.innerHTML = `
      <label>Inicio: <input type="number" id="inicio" value="1"></label>
      <label>Fin: <input type="number" id="fin" value="100"></label>
      <button id="enviar">Enviar</button>
    `;

    // Se agrega el evento al botón
    this.shadowRoot.querySelector('#enviar').addEventListener('click', () => {
      const inicio = parseInt(this.shadowRoot.querySelector('#inicio').value);
      const fin = parseInt(this.shadowRoot.querySelector('#fin').value);
        
      // Validación de los valores ingresados
      if (isNaN(inicio) || isNaN(fin)) {
        alert('Por favor, ingrese números válidos.');
        return;
      }

      if (inicio > fin) {
        alert('El valor de inicio debe ser menor o igual al valor del campo fin.');
        return;
      }

      this.dispatchEvent(new CustomEvent('rango-seleccionado', {
        detail: { inicio, fin },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('input-range', InputRange);