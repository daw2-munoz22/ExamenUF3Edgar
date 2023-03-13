// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { header } from './componentes/header'
import { home } from './vistas/home'
import { pedido } from './componentes/pedidos'
import { tablaCervezas } from './componentes/tablaCervezas'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
document.querySelector('main').innerHTML = pedido.template
pedido.script()
//document.querySelector('main').innerHTML = tablaCervezas.template
//tablaCervezas.script()
