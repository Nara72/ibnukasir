let totalPrice = 0;

const itemPrices = {
    'Nasi Goreng Biasa': 15000,
    'Nasi Goreng Ayam': 18000,
    'Nasi Goreng Sosis': 19000,
    'Nasi Goreng Seafood': 25000,
    'Nasi Goreng Spesial': 30000,
    'Es Teh Manis' : 5000,
    'Es Jeruk' : 8000,
    'Teh Botol' : 8000

};

function addItem() {
    const itemSelect = document.getElementById('item-select');
    const itemName = itemSelect.value;
    const itemPrice = itemPrices[itemName];
    const itemQuantity = parseInt(document.getElementById('item-quantity').value);

    if (itemQuantity <= 0 || isNaN(itemQuantity)) {
        alert('Masukkan jumlah yang valid.');
        return;
    }

    const itemTotalPrice = itemPrice * itemQuantity;

    const table = document.getElementById('item-list');
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);

    cell1.textContent = itemName;
    cell2.textContent = itemQuantity;
    cell3.textContent = 'Rp ' + itemPrice.toFixed(2);
    cell4.textContent = 'Rp ' + itemTotalPrice.toFixed(2);
    cell5.innerHTML = '<button onclick="deleteItem(this, ' + itemTotalPrice + ')">Hapus</button>';

    totalPrice += itemTotalPrice;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);

    // Reset quantity input
    document.getElementById('item-quantity').value = 1;
}

function deleteItem(button, price) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);

    totalPrice -= price;
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}
