(function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[2]='MMERGE2';
    ftypes[2]='text';
}
(jQuery));
var $mcj = jQuery.noConflict(true);
function Order(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
}
Order.prototype.completeOrder = function () {
    return this.size + " with the crust of " + this.crust + " and " + this.toppings + " as toppings.";
};
function Charge(price, quantity, delivery) {
    this.price = price;
    this.quantity = quantity;
    this.delivery = delivery;
}

Charge.prototype.finalCharge = function () {
    return this.price * this.quantity + this.delivery;
};


var sizePrice = [750, 1000, 600]
var deliverPrices = [0, 300];

$(document).ready(function () {
    $('.orderForm').submit(function (event) {
        event.preventDefault();
       

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTop = $('#toppings').val();

        var pizzaQty = parseInt($('#number').val());

        var pizzaPick = parseInt($('#pick').val());


        var price = sizePrice[pizzaSize - 1];


        var DeliveryCost = deliverPrices[pizzaPick - 1];



        newOrder = new Order(pizzaType, pizzaSize, pizzaCrust, pizzaTop);
        newTotal = new Total(price, pizzaQty, DeliveryCost);
        if (pizzaPick===1){
        alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
        alert("your bill is: " + newTotal.finalTotal());
        }else{
            if(pizzaPick===2){
                prompt("Enter where you want your pizza to be delivered");
                alert("Your order has been received and it will be delivered. Continue to see your order details");
                alert("Your oder is: " + newOrder.fullOrder() + ".continue to see your total bill");
                alert("your bill is: " + newTotal.finalTotal());
            }
        }

    });
