<!DOCTYPE html>
<html lang="en" data-bs-theme="dark">
   <title> AFICIONADO  </title>
   
   <head>
      <link="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
   </head>
   <body style="background-image: url('1720242105168.jpg');> 
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
               <h2> Ivan Jules Perfumes  </h2>
                <hr class="hr" />
                </div>
           
    
            </div>
        </div>
            <div class="container">
            <div class="row">
                <div class="col-4 text-center">
                    <label id="product1"> F1 PERFUME </label>
                    <img src="images.jpeg" style="width: 500px;height: 300px;" class="img-thumbnail"/><br>
                    <label for="product1" id="price1">270.00</label>
                    <input type="number" class="form-control" id="qty1" placeholder="Enter quantity"/><br>
                </div>
                <div class="col-4 text-center">
                        <label id="product2"> F2 PERFUME </label>
                        <img src="images (1).jpeg style="width:500px;height: 300px;" class="img-thumbnail"/><br>
                        <label for="product2" id="price2">370.00</label>
                        <input type="number" class="form-control" id="qty2" placeholder="Enter quantity"/><br>
                </div>
               <div class="col-4 text-center">
                        <label id="product3"> F3 PERFUME  </label>
                        <img src="images (2).jpeg " style="width:500px;height: 300px;" class="img-thumbnail"/><br>
                        <label for="product3" id="price3">330.00</label>
                        <input type="number" class="form-control" id="qty3" placeholder="Enter quantity"/><br>
                </div>
               <div class="col-4 text-center">
                        <label id="product4"> F4 PERFUME  </label>
                        <img src=" images (3).jpeg" style="width:500px;height: 300px;" class="img-thumbnail"/><br>
                        <label for="product4" id="price4">370.00</label>
                        <input type="number" class="form-control" id="qty4" placeholder="Enter quantity"/><br>
                </div>
               <div class="col-4 text-center">
                        <label id="product5"> F55 </label>
                        <img src="images (4).jpeg " style="width:500px;height: 300px;" class="img-thumbnail"/><br>
                        <label for="product5" id="price5">350.00</label>
                        <input type="number" class="form-control" id="qty5" placeholder="Enter quantity"/><br>
                </div>
               <div class="col-4 text-center">
                        <label id="product6"> f51 perfume </label>
                        <img src="sg-11134201-7rcdi-lrket1vag7zw63.jpeg " style="width:500px;height: 300px;" class="img-thumbnail"/><br>
                        <label for="product6" id="price6">300.00</label>
                        <input type="number" class="form-control" id="qty6" placeholder="Enter quantity"/><br>
                </div>
                <div class="col-4">
                        <label for="carts"> Orders </label><br>
                        <textarea class="form-control" rows="29" id="carts" cols="200" readonly style="width: 350px;height: 400px;font-size: 12px;"></textarea>
                        <input type="text" class="form-control border-0" id="total" readonly placeholder="Total"/>
                        <input type="number" class="form-control" id="cash" placeholder="Cash Tendered"/>
                        <input type="text" class="form-control border-0" id="change" readonly placeholder="Change"/>
                        
                </div>
            </div>
        </div>
<script src="index.js"></script>
     <br><br>
      <style>
  .custom-background {
    background-color: red; /* Para sa card background */
  }
  .custom-footer-background {
    background-color: brown; /* Para sa footer background */
  }
  .custom-orange-background {
    background-color: orange; /* Para sa badge background */
  }
</style>

       <div class="card text-center custom-background">
      <div class="card-footer text-body-secondary custom-footer-background">
        <div class="orange custom-orange-background  text-bg-info">Rolando F
         dalas BSIT 3D </div>
         

      
    </div>
    </div>
      <script>
        var products = [
        { id: 1, name: "F1 PERFUME", price: 270.00 },
        { id: 2, name: "F2 PERFUME", price: 370.00 },
        { id: 3, name: "F3 PERFUME", price: 350.00 },
        { id: 4, name: "F4 PERFUME", price: 370.00 },
        { id: 5, name: "F55 PERFUME", price: 500.00 },
        { id: 6, name: "F51 PERFUME", price: 300.00 },
    ];
    
    
    var qtyInputs = document.querySelectorAll('[id^="qty"]');
    var carts = document.getElementById("carts");
    var totalInput = document.getElementById("total");
    var cashInput = document.getElementById("cash");
    var changeInput = document.getElementById("change");
    
    
    qtyInputs.forEach(function(qtyInput) {
        qtyInput.addEventListener("input", addOrder);
    });
    
    cashInput.addEventListener("input", calculateChange);
    
    
    function addOrder() {
        carts.textContent = ""; // Clear previous cart content
    
        var total = 0;
    
        qtyInputs.forEach(function(qtyInput, index) {
            var qty = parseFloat(qtyInput.value);
            if (qty > 0) {
                var product = products[index];
                var order = qty + " pcs x " + product.name + " - Php " + (qty * product.price).toFixed(2) + "\n";
                carts.textContent += order;
                total += qty * product.price;
            }
        });
    
        totalInput.value = total.toFixed(2); // Update total
        calculateChange(); // Recalculate change
    }
    
    
    function calculateChange() {
        var total = parseFloat(totalInput.value);
        var cash = parseFloat(cashInput.value);
    
        if (!isNaN(total) && !isNaN(cash)) {
            var change = cash - total;
            changeInput.value = change.toFixed(2);
        } else {
            changeInput.value = "";
        }
    }
      </script>
</body>
</html>
