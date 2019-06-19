let array = [
    {
        title: 'Hunger Games',
        isBorrowed: true,
    },
    {
        title: 'Harry Potter',
        isBorrowed: false,
    },
    {
        title: 'Assassins Creed',
        isBorrowed: false,
    },
    {
        title: 'Percy Jackson',
        isBorrowed: true,
    },
    {
        title: 'Fifty Shades of Grey',
        isBorrowed: false
    },
];
function listBuku() {
    let count=1;
    for (let i = 0; i < array.length; i++) {
        for (key in array[i]) {
            if (array[i][key] == false) {
                console.log( count + '. ' + (array[i]['title']) + '.')
                count++;
            }
        }

    }
};
console.log('Buku yang tersedia adalah : ');
listBuku();

console.log('\n');

function statusBuku(judul) {
    let obj = array.find(o => o.title === judul);
    if (obj.isBorrowed === false) {
        console.log("Buku dengan judul " + "'" + judul + "'" + " tersedia.");
    } else {

        console.log("Buku dengan judul " + "'" + judul + "'" + " tidak tersedia.");
    };
}
statusBuku('Percy Jackson');

