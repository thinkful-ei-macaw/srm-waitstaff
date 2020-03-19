import store from './store.js'

function chargesHTML() {
  return (`
  <div class="charges">
    <h1>My Earnings Info</h1>
    <p>Tip Total: 
      ${store.basePrice * (store.tip *100)}</p>
    <p>Meal Count: ${store.counter}</p>
    <p>Average Tip Per Meal: ${(store.basePrice * (store.tip *100)) / store.counter}</p>
  </div>
  `)
}

export default chargesHTML;