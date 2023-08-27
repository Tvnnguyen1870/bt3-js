var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];

var testAllValid = [{ id: 1 }, { id: 2 }];

function checkUsersValid(array) {
    return array.every(function(value, index, array){
        return array.some(function(value, index, array){
            return value.goodUsers === value.testAllValid;
        }, {});
    });
}
console.log(checkUsersValid(goodUsers, testAllValid));
