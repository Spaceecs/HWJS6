class ShoppingItem {
    constructor(name, quantity, purchased = false) {
        this.name = name;
        this.quantity = quantity;
        this.purchased = purchased;
    }
}
let shoppingList = [
    new ShoppingItem("Milk", 2, false),
    new ShoppingItem("Bread", 1, true),
    new ShoppingItem("Eggs", 12, false),
];
function displayShoppingList(list) {
    let output = "Not purchased yet:\n";
    list.filter(item => !item.purchased).forEach(item => output += `${item.name}: ${item.quantity}\n`);
    output += "\nPurchased:\n";
    list.filter(item => item.purchased).forEach(item => output += `${item.name}: ${item.quantity}\n`);

    alert(output);
}
function addItemToList(list, productName, productQuantity) {
    const existingItem = list.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (existingItem) {
        existingItem.quantity += productQuantity;
    } else {
        list.push(new ShoppingItem(productName, productQuantity, false));
    }
}
function purchaseItem(list, productName) {
    const item = list.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (item) {
        item.purchased = true;
    } else {
        alert(`Product '${productName}' not found in the list.`);
    }
}
displayShoppingList(shoppingList);
addItemToList(shoppingList, "Butter", 1);
displayShoppingList(shoppingList);
addItemToList(shoppingList, "Milk", 1);
displayShoppingList(shoppingList);
purchaseItem(shoppingList, "Eggs");
displayShoppingList(shoppingList);