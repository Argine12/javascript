//Filter
const arr = ['Bolivia', 'Armenia', 'China', 'Canada', 'Latvia', 'Moldova', 'Korea'];

const newArr = arr.filter(Arr => Arr.length < 7);

console.log(newArr);


//map

const arr1 = [2, 5, 4, 3, 7, 8, 16];

const arrMap = arr1.map((elem, indes) => {
    return elem = elem % 2 == 1 ;
});

console.log(arrMap);