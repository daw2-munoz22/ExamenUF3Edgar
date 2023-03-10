import {cervezas} from "./bd.js"
export const pedidos = {
    template: `<form form id="formCervezas" class="needs-validation" novalidate>
  <input type="hidden" id="id">
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre del grupo</label>
    <input id="nombre" type="text" class="form-control" aria-describedby="nombre" value="" required>
    <!-- mensaje si valida -->
    <div class="valid-feedback">Todo estupendo</div>
    <!-- mensaje si no valida -->
    <div class="invalid-feedback">Introduce el nick</div>
  </div>
  <div class="mb-3">
    <label for="mesa" class="form-label">Mesa</label>
    <input id="mesa" type="number" class="form-control" aria-describedby="mesa" min="0" value="" required>
    <!-- mensaje si valida -->
    <div class="valid-feedback">Todo estupendo</div>
    <!-- mensaje si no valida -->
    <div class="invalid-feedback">Introduce el correo electrónico</div>
  </div>
  <div class="mb-3">
    <label for="birra" class="form-label">Elige tu birra</label>
    <select class="custom-select" id="inputGroupSelect01">
      <option value="${cervezas[0].nombre}">Mahou Cinco Estrellas</option>
      <option value="${cervezas[1].nombre}">Estrella Galicia</option>
      <option value="${cervezas[2].nombre}">Alhambra Reserva 1925</option>
      <option value="${cervezas[3].nombre}">San Miguel Especial</option>
      <option value="${cervezas[4].nombre}">Damm Estrella</option>
    </select>
    <!-- mensaje si valida -->
    <div class="valid-feedback">Todo estupendo</div>
    <!-- mensaje si no valida -->
    <div class="invalid-feedback">Minimo 6 y maximo 16</div>
  </div>
  <div id="avatar" class="w-50"></div>
  <button id="editar" type="submit" class="btn btn-success enviarEditar">Añadir Pedido</button>
</form>
`,
    card: `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${cervezas[0].nombre}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${cervezas[0].descripcion}</h6>
      <img src='${cervezas[1].imagen}' alt="cerveza"> 
    </div>
  </div>`,
    script: () => {

    }
}