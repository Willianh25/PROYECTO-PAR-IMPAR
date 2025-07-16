// Se crea la clase del componente par-impar-lista
class ParImparLista extends HTMLElement {
  constructor() {
    super(); 
    // Se crea el Shadow DOM
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    // Se define el contenido del componente
    this.shadowRoot.innerHTML = `
      <div id="resultado"></div>
    `;

    // Se agrega un listener para escuchar el evento personalizado
    window.addEventListener('rango-seleccionado', (event) => {
      const inicio = event.detail.inicio;
      const fin = event.detail.fin;

      // Se llama a la función para generar la lista
      this.mostrarLista(inicio, fin);
    });
  }

  mostrarLista(inicio, fin) {
    // Se obtiene el contenedor donde se mostrará la lista
    const contenedor = this.shadowRoot.querySelector('#resultado');

    // Se limpia el contenido anterior (si existe)
    contenedor.innerHTML = '';

    // Se recorre el rango de números
    for (let i = inicio; i <= fin; i++) {
      const tipo = i % 2 === 0 ? 'Par' : 'Impar'; // Se verifica si es par o impar
      const parrafo = document.createElement('p'); // Se crea un párrafo por número
      parrafo.textContent = `${i} - ${tipo}`; // Se escribe el contenido
      contenedor.appendChild(parrafo); // Se agrega al contenedor
    }
  }
}

// Se registra el componente personalizado
customElements.define('par-impar-lista', ParImparLista);
