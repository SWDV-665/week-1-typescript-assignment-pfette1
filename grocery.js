var Grocery = /** @class */ (function () {
    function Grocery(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
    return Grocery;
}());
var groceryItems = [
    new Grocery(1, "Milk", 2, 1.25),
    new Grocery(2, "Bread", 4, 1.50),
    new Grocery(3, "Oranges", 7, 1.75)
];
var groceryList = document.getElementById("groceryList");
for (var i = 0; i < groceryItems.length; ++i) {
    var li = document.createElement("li");
    var totalPrice = groceryItems[i].quantity * groceryItems[i].price;
    li.innerText = groceryItems[i].quantity + ' Units of ' + groceryItems[i].name + ' @ $' + groceryItems[i].price + ' = $' + totalPrice;
    groceryList.appendChild(li);
}
//# sourceMappingURL=grocery.js.map