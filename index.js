function countFigures (a, b, c) {
    return a + b + c;
}

function add(num1, num2){
    // console.log('INPUT', num1, num2)
    const sum = num1 + num2;
    // console.log('SUM', sum);
    return sum;
}

function findByName(users, name){
    // console.log('INPUT:', users, name);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        // console.log('USER 1 voor 1?', user.name);
        if (user.name === name) {
            // console.log('gevonden?', user);
            return user;
        }
    }
    return null;
}

//EXPORTEREN
module.exports = {
    add: add,
    findByName: findByName,
    countFigures: countFigures,
};


