
import "../style/select.css";

function MyForm() {

  return (

    <div className="App">
      
      <div class="container">

        <div class="left">
          <div class="main-type"></div>
          <label for="type">Type Order: </label>
          <select class="type">
            <option value="1">Buy Stock</option>
            <option value="2">Sell Stock</option>
          </select>

          <div class="quality">
            <form action="/action_page.php">
              <label for="quality">Quality: </label>
              <input type="text" id="quality" name="quality"
                placeholder="Input quality..." />

              <label class="price" for="price">Price: </label>
              <input type="text" id="price" name="price" placeholder="Input price..." />
            </form>
          </div>

          <div class="submit">
            <input type="submit" value="Make Order->>" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default MyForm;
