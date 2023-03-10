import { pedidos } from "../componentes/pedidos";

export const home = {
    template: 
    `<div class="container-fluid">
    <div class="derecha mr-1">
        ${pedidos.template}
    </div>
    <div class="izquierda">
        ${pedidos.card}
    </div>
</div>`
}
