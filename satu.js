let arr = [
    {
        name: 'Tatas',
        company: 'Arkademy',
        job: 'Trainer',
        status: 'single',
        city: 'Jogja'
    },
    {
        name: 'Pratama',
        company: 'Emago',
        job: 'Trainer',
        status: 'single',
        city: 'Jakarta'
    }
];

let array = arr.map(array1 => {return{...array1}});
array.find(array1 => array1.name == 'Tatas').status = 'married';
array.find(array1 => array1.name == 'Tatas').city = 'Jakarta';
array.find(array1 => array1.name == 'Pratama').company = 'Arkademy';
array.find(array1 => array1.name == 'Pratama').city = 'Jogja';

console.log(arr);
console.log('Hasil Edit : ');
console.log(array);
