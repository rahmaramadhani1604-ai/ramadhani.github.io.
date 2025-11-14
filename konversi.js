function konversi() {
    let n = parseInt(document.getElementById("nilai").value);
    let huruf = "";

    if (n >= 0 && n <= 40) huruf = "E";
    else if (n >= 41 && n <= 55) huruf = "D";
    else if (n >= 56 && n <= 60) huruf = "C";
    else if (n >= 61 && n <= 65) huruf = "BC";
    else if (n >= 66 && n <= 70) huruf = "B";
    else if (n >= 71 && n <= 80) huruf = "AB";
    else if (n >= 81 && n <= 100) huruf = "A";
    else huruf = "Nilai tidak valid";

    document.getElementById("hasil").innerHTML = huruf;
}
