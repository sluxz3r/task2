let arr = [22, 22, 12, 32, 32, 24, 24, 211, 44, 5544, 67];

// Menentukan nilai rata-rata pada suatu array / nilai
function mean() {
    let jumlah = 0;

    for (let i = 0; i < arr.length; i++) {
        jumlah += arr[i];
    }

    return Math.round(jumlah / arr.length);
}
console.log("Rata-rata dari Nilai tersebut adalah " + mean());

// Menentukan nilai tengah (median) pada suatu array / nilai
function median() {
    arr.sort(function (a, b) {
        return a - b;
    });

    var med = Math.floor(arr.length / 2);

    if (arr.length % 2) {
        return arr[med];

    } else {
        return (arr[med - 1] + arr[med]) / 2;
    }
}
console.log("Median dari Nilai tersebut adalah " + median());

// Mencari Modus
function modus() {
    var arrModus = [], isSame = false;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                isSame = true;
                arrModus.push(arr[i]);
            } else {
                isSame = false;
            }
        }
    }

    return (arrModus[0] === undefined || isSame) ? -1 : arrModus[0];
}

console.log("Modus dari Nilai tersebut adalah " + modus())