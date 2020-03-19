
function mealHTML() {

  return(
    `<div class="meal">
      <h1>Enter the Meal Details</h1>
      <form name="price-details" id="price-details">
        <label for="base-price">Base Meal Price: $</label>
          <input type="text" name="base-price">
        <label for="tax-rate">Tax Rate: %</label>
          <input type="text" name="tax-rate">
        <label for="tip">Tip: %</label>
          <input type="text" name="tip">
        <button type="submit">Submit</button>
        <button id="cancel">Cancel</button>
      </form>
    </div>`
  )
}


export default mealHTML;
