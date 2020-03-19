'use strict';

import mealHTML from "./meal.js";
import earningsHTML from "./earnings.js";
import chargesHTML from "./charges.js";
import store from "./store.js"
//generators are separate files

function render(){

  let page = 
    `${mealHTML()}  ${earningsHTML()}  ${chargesHTML()} 
      <button id="reset">Reset</button>`

  return $('main').html(page) 
}

function handleSubmit() {
  $('#price-details').submit(e => {
    e.preventDefault();
    let formElement = document.querySelector('#price-details')
    const formData = new FormData (formElement);
    const obj = {};
    formData.forEach((val, name) => 
      obj[name] = val);
    let basePrice = obj['base-price']
    let taxRate = obj['tax-rate']
    let tip = obj['tip']
    store.basePrice = basePrice;
    store.taxRate = taxRate;
    store.tip = tip;
    store.counter++
    render();
    console.log(store)
    })
}

function handleCancel() {
  $('#cancel').click(e => {
    e.preventDefault();
    console.log('click')

  })
}

function handleReset() {
  $('#reset').click(() => {
  $('#price-details').trigger("reset");
  })
}

function bindEventListeners() {
  render();
  handleSubmit();
  handleCancel();
  handleReset();
}

$(bindEventListeners);