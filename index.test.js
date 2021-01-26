function add(num1, num2){
    // console.log('INPUT', num1, num2)
    const sum = num1 + num2;
    // console.log('SUM', sum);
    return sum;
}


test('add() function  should retun the sum of 2 numbers', () => {
    // console.log('Hallo, dit is een test, echt waar');

    //Arrange
    const num1 = 4;
    const num2 = 5;
    //Act
    const sum = add(num1, num2);
    //Assert
    expect (sum).toBe(9)
});


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