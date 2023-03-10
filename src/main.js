// Import our custom CSS
import './scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { header } from './componentes/header'
import { home } from './vistas/home'
import { pedidos } from './componentes/pedidos'

document.querySelector('header').innerHTML = header.template
document.querySelector('main').innerHTML = home.template
//document.querySelector('main').innerHTML = pedidos.template
