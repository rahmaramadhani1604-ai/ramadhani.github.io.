function hitung(op) {
    let a = parseFloat(document.getElementById("bil1").value);
    let b = parseFloat(document.getElementById("bil2").value);
    let hasil = 0;

    if (op === '+') hasil = a + b;
    else if (op === '-') hasil = a - b;
    else if (op === '*') hasil = a * b;
    else if (op === '/') hasil = a / b;

    document.getElementById("hasil").value = hasil;
}
