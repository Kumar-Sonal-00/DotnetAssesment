document.getElementById('addProduct').addEventListener('click', addProduct);
document.getElementById('displayProducts').addEventListener('click', displayProducts);

const products = [];

function addProduct() {
    const productId = document.getElementById('productId').value;
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);
   
    if (productId && productName && !isNaN(price) && !isNaN(quantity)) {
        const totalCost = price * quantity;
        products.push({ productId, productName, price, quantity, totalCost });
        clearForm();
    } else {
        alert('Please fill out all fields with valid values.');
    }
}

function clearForm() {
    document.getElementById('productId').value = '';
    document.getElementById('productName').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';
}

function displayProducts() {
    const tableBody = document.querySelector('#productTable tbody');
    tableBody.innerHTML = '';

    let grandTotal = 0;

    products.forEach(product => {
        const row = document.createElement('tr');

        Object.values(product).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
        grandTotal += product.totalCost;
    });

    document.getElementById('totalCost').textContent = grandTotal.toFixed(2);
}
