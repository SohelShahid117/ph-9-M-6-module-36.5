// 36_5-4 (Advanced) Local Storage Interactions For A Shopping Cart
// alert('hi');

const addToCart = () => {
    // alert('hi')
    const productName = document.getElementById('product-name');
    const productQty = document.getElementById('product-qty');

    const productNameValue = productName.value;
    const productQtyValue = productQty.value

    productName.value = ' ';
    productQty.value = ' ';
    // productNameValue = ' '
    // productQtyValue = ' '
    console.log(productNameValue, productQtyValue)
    displayProduct(productNameValue, productQtyValue)

    savedProductToLocalStorage(productNameValue,productQtyValue);
}


const displayProduct = (product, quantity) => {
    const showProduct = document.getElementById('show-product');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    showProduct.appendChild(li);
}


const getStoredItemInLocalStorage=()=>{
    // const item = { };
    // const cart = {};
    let cart = {}; //value change hobe tai let use hobe
    const getStoredItem = localStorage.getItem('cart');
    if(getStoredItem){
        cart = JSON.parse(getStoredItem);
    }
    return cart;

}
const savedProductToLocalStorage=(product,qty)=>{
    // localStorage.setItem(cart)
    let cart = getStoredItemInLocalStorage();
    console.log(cart)

    cart[product] = qty;
    console.log(cart);

    const cartStringified = JSON.stringify(cart);
    console.log(cartStringified);
    localStorage.setItem('cart',cartStringified);
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredItemInLocalStorage();
    console.log(savedCart);

    for(const prdct in savedCart){
        const qty = savedCart[prdct]
        console.log(prdct,qty)
        displayProduct(prdct,qty);
    }
}
displayProductFromLocalStorage();