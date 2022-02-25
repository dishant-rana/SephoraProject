var cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    function displayData(items) {
      document.querySelector("#cart-container").innerHTML = "";
      items.map((el, index) => {
        var itemDiv = document.createElement("div");
        itemDiv.setAttribute("class", "cart-item");
  
        var prod = document.createElement("div");
        prod.setAttribute("class", "prod-desc");
        var img = document.createElement("img");
        img.setAttribute("src", el.image_url);
        img.setAttribute("class", "cart-item-img");
        var itemName = document.createElement("p");
        itemName.innerText = el.name;
        prod.append(img, itemName);
        var price = document.createElement("p");
        price.innerText = el.price;
  
        var qtyDiv = document.createElement("div");
        qtyDiv.setAttribute("class", "qty-div");
        var incQty = document.createElement("div");
        incQty.setAttribute("class", "incbtn");
        incQty.addEventListener("click", function () {
          incQuant(index);
        });
        incQty.innerText = "+";
        var qty = document.createElement("p");
        qty.innerText = el.quant;
        var decQty = document.createElement("div");
        decQty.setAttribute("class", "decbtn");
        decQty.addEventListener("click", function () {
          decQuant(index);
        });
        decQty.innerText = "-";
        qtyDiv.append(incQty, qty, decQty);
  
        itemDiv.append(prod, qtyDiv, price);
        document.querySelector("#cart-container").append(itemDiv);
      });
    }
  
    function showTotal() {
      var total = cartData.reduce((acc, el) => {
        return acc + el.price * el.quant;
      }, 0);
      document.querySelector(".cartTotal").innerText = total;
    }
  
    function incQuant(index) {
      cartData[index].quant++;
      localStorage.setItem("cartData", JSON.stringify(cartData));
      displayData(cartData);
      showTotal();
    }
  
    function decQuant(index) {
      cartData[index].quant--;
      localStorage.setItem("cartData", JSON.stringify(cartData));
      displayData(cartData);
      showTotal();
    }
  
    displayData(cartData);
    showTotal();