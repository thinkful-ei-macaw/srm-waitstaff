'use strict';
import store from '.store.js'

function earningsHTML() {

  return (`
  <div class="earnings">
    <h1>Customer Charges</h1>
    <p>Subtotal: ${store.tip}</p>
    <p>Tip: 0.00</p>
    <p class="total-line">Total: </p>
  </div>
  `)

}

export default earningsHTML