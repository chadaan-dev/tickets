function buy() {
    let type = document.getElementById('ticket-type');
    let qty = parseInt(document.getElementById('qty').value);

    if (type.value == 'track') {
        buyTrack(qty);
    } else if (type.value == 'hihger') {
        buyHihger(qty);
    } else {
        buyLower(qty);
    }
}

function buyTrack(qty) {
    let qtyTrack = parseInt(document.getElementById('qty-track').textContent);
    if (qty > qtyTrack) {
        alert('Unavailable quantity of the track type');
    } else {
        qtyTrack = qtyTrack - qty;
        document.getElementById('qty-track').textContent = qtyTrack;
        alert('Purchase completed successfully!');
    }
}

function buyHihger(qty) {
    let qtyHihger = parseInt(document.getElementById('qty-hihger').textContent);
    if (qty > qtyHihger) {
        alert('Unavailable quantity of the hihger type');
    } else {
        qtyHihger = qtyHihger - qty;
        document.getElementById('qty-hihger').textContent = qtyHihger;
        alert('Purchase completed successfully!')
    }
}

function buyLower(qty) {
    let qtyLower = parseInt(document.getElementById('qty-lower').textContent);
    if (qty > qtyLower) {
        alert('Unavailable quantity of the lower type');
    } else {
        qtyLower = qtyLower - qty;
        document.getElementById('qty-lower').textContent = qtyLower;
        alert('Purchase completed successfully!');
    }
}