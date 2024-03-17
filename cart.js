
//36_5-3 A Simple Shopping Cart To Add Product And Quantity

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
    saveProductToLocalStorage(productNameValue, productQtyValue)
}


const displayProduct = (product, quantity) => {
    const showProduct = document.getElementById('show-product');
    const li = document.createElement('li');
    li.innerText = `${product}:${quantity}`;
    showProduct.appendChild(li);

}

const getStoredShoppingItem = () => {
    let item = {};
    const storedItem = localStorage.getItem('item');
    if (storedItem) {
        item = JSON.parse(storedItem);
    }

    return item;
}

const saveProductToLocalStorage = (product, quantity) => {
    const item = getStoredShoppingItem();
    item[product] = quantity; //buji ni
    console.log(item)

    const itemStringified = JSON.stringify(item);
    console.log(itemStringified)

    localStorage.setItem('item', itemStringified)
}

const displayProductFromLocalStorage = () => {
    const savedItem = getStoredShoppingItem();
    console.log(savedItem)

}