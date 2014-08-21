function addToCart(){}


function getCartList(id) {

    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
    if (cartItems == null) {
        cartItems = [];
    }

    var cartItem = isExistInCart(id, cartItems);
    if (cartItem) {
        cartItem.number += 1;
    }
    else{
        cartItems.push(new  CartItem(getCartItems(id),1));
    }

    localStorage.setItem('cartItems',JSON.stringify(cartItems));
}

function getCartItems(id){

    var item;
    var items = JSON.parse(localStorage.getItem('item'));
    for (var i = 0; i < items.length; i++) {
        if(id === items[i].barcode){
            item = items[i];
        }
    }
    return item;
}

function isExistInCart(barcode, cartItems){

    var item;
    for (var i = 0; i < cartItems.length; i++){

        if (barcode === cartItems[i].item.barcode){
            item = cartItems[i];
        }
    }
    return item;
}

function getLocalStorageCartItems(){
    var items = JSON.parse(localStorage.getItem('item'));
    for (var i = 0; i < items.length; i++){
        getCartItems(items[i].barcode)

    }
}
getCartList(JSON.parse(localStorage.getItem('item')));