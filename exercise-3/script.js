// cách 1 

// var array = [1, 2, 3, 4];
// console.log(array, 3);
// array.splice(2, 1);
// console.log(array);



//cách 2 

var array = [1, 2, 3, 4];
console.log(array, 3);

function removeFromArray(array, deleteItem){
    return array.filter(function(number, index){
        return deleteItem !== number;
    });
}
console.log(removeFromArray(array, 3));