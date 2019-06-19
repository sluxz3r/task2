let arr = ['sepeda', 'becak', 'angkot', 'pesawat'];
let arrP = ['true', 'false', 'true', 'false'];
let count = 0;

function benerBoss(x) {
    arr.forEach(function (data) {
        if (arrP[count] === x) {
            console.log(data);
        }
        count++;
    })
};

benerBoss('false');
