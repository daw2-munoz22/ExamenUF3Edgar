import {cervezas} from "./bd.js"
export const pedido = {
    template: `
  <div class="col-6" id="registrarPedido">
      <h1>Selecciona tu cerveza y haz tu pedido</h1>
      <form id="FormCervezas" class="w-50 pt-2 ps-2 FormCervezas needs-validation " novalidate>
          <div class="mb-3">
              <label for="nombre" class="form-label">Nombre del grupo:</label>
              <input id="nombre" type="text" class="form-control nombre" required pattern="[A-Z_a-z]{4,10}">
              <!-- mensaje si valida -->
              <div class="valid-feedback">Todo estupendo</div>
              <!-- mensaje si no valida -->
              <div class="invalid-feedback">Del 4 y 10, no espacios y solo _</div>
          </div>
          <div class="mb-3">
              <label for="mesa" class="form-label" id="mesa">Mesa:</label>
              <input type="number" class="form-control " id="mesa" value="" min="1" max="15" required>
               <!-- mensaje si valida -->
               <div class="valid-feedback">Todo estupendo</div>
               <!-- mensaje si no valida -->
               <div class="invalid-feedback">Mínimo 1 y máximo 15</div>
          </div>
              <label for="cervezas" class="form-label">Elige tu birra:</label>
              <select name="select" id="cervezas">
              </select>
          <div class="mb-3">
          <label for="cantidad" class="form-label">Cantidad:</label>
              <input type="number" class="form-control " id="cantidad" value="" min="1" required>
          </div>
    
          <button id="enviar" type="submit" class="btn btn-success w-100 enviarPedido">Añadir Pedido</button>
      </form>
  </div>
  <div class="col-6" d-flex justify-content-center align-items-center text-center" id="descripcionCervezas">
      <div class="card" style="width: 18rem;">
          <div class="card-body">
          <h3 class="card-text">Mahou Cinco Estrellas</h3> 
              <p class="card-text">Cerveza rubia, suave y refrescante con un sabor ligeramente amargo.</p>
          </div>
          <img src="https://www.mahou.es/wp-content/themes/mahou_v2/template-contents/mahou-familia/dist/images/Botella_Mahou_5_Estrellas.png" class="w-50">
      </div>
  </div>
  `,
    script: () => {
        console.log('hola soy pedidos')

        var html = ``

        cervezas.forEach(cerveza => {
            html += `<option value="${cerveza.id}">${cerveza.nombre}</option>`
        });

        const select = document.querySelector("#cervezas")

        select.innerHTML = html

        select.addEventListener("change", (event) => {
            //Busco la posicion donde esta el usuario
            const i = cervezas.findIndex(cerveza => cerveza.id == event.target.value)

            const html = `
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                 <h3 class="card-text">${cervezas[i].nombre}</h3> 
                  <p class="card-text">${cervezas[i].descripcion}</p>
              </div>
              <img src="${cervezas[i].imagen}" class="card-img-bottom w-50 h-25" alt="FotoCerveza">
          </div>
          `
            const descripcion = document.querySelector("#descripcionCervezas")

            descripcion.innerHTML = html
        });


        const main = document.querySelector("main")

        const formPedido = document.querySelector('#FormCervezas')

        main.addEventListener("click", (event) => {
            event.preventDefault();
            formPedido.classList.add('was-validated')

        })
    }
}