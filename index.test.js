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