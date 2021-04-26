/*(function($) {window.fnames = new Array(); 
    window.ftypes = new Array();
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[2]='MMERGE2';
    ftypes[2]='text';
}
(jQuery));
var $mcj = jQuery.noConflict(true);*/

function Order(size, crust, toppings) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
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
var deliveryPrices = [0, 300];


$(document).ready(function () 
{
    $('form#orderForm').submit(function (event) {
        event.preventDefault();
       

        var pizzaSize = parseInt($('#size').val());

        var pizzaCrust = $('#crust').val();

        var pizzaTopping = $('#toppings').val();

        var pizzaNumber = parseInt($('#number').val());

        var pizzaChoice = parseInt($('#choose').val());


        var price = sizePrice[pizzaSize - 1];


        var deliveryCharge = deliveryPrices[pizzaChoice - 1];



        pizzaOrder = new Order(pizzaSize, pizzaCrust, pizzaTopping);
        newTotal = new Charge(price, pizzaNumber, deliveryCharge);
       
        if (pizzaChoice===1){
            
        alert("You made an order of: " + pizzaOrder.completeOrder() + "your total charge is: " + newTotal.finalCharge());
        alert("Thankyou for letting us serve you");
        }else{
            if(pizzaChoice===2){
                prompt("Where would you like your pizza delivered to?");
                alert("Your order has been received and it will be delivered.");
                alert("You made an order of: " + pizzaOrder.completeOrder() + "your total charge is: " + newTotal.finalCharge());
                alert("Thankyou for letting us serve you");
            }
        }

    });
});