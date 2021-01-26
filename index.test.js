
// IMPORTEREN
// const add = require('./index').add;
// const findByName = require('./index').findByName;

const {add, findByName, countFigures} = require('./index');

test('countFigures() function should be the sum of 3 figures', () => {
    //ARRANGE
    const a = 3;
    const b = 4;
    const c = 5;

    //ACT
    const firstOutput = countFigures(a, b, c);

    //ASSERT
    expect(firstOutput).toBe(12)
});


test('add() function  should return the sum of 2 numbers', () => {
    // console.log('Hallo, dit is een test, echt waar');

    //Arrange
    const num1 = 4;
    const num2 = 5;
    //Act
    const sum = add(num1, num2);
    //Assert
    expect (sum).toBe(9)
});



test('findByName() returns an objact from an array with a specified name', () =>{
    //ARRANGE
    const users = [
        { id: 1, name: 'Joanneke' },
        { id: 2, name: 'Joyce' },
        { id: 3, name: 'Charlie' },
        ];
const usernameToFind = 'Joyce';
    //ACT
const user = findByName(users, usernameToFind)

    //ASSERT
    expect(user).toEqual({ id: 2, name: 'Joyce' })
});

test ( 'findByName should return null if the element is not found', () => {
    //ARRANGE
    const users = [
        { id: 1, name: 'Joanneke' },
        { id: 2, name: 'Joyce' },
        { id: 3, name: 'Charlie' },
    ];
    const usernameToFind = 'Merlijn';

    //ACT
    const user = findByName(users, usernameToFind)

    //ASSERT
    expect(user).toBeNull();
});