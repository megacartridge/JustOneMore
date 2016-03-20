input = [ '1', 'c', '0', '-1', '5', 'b', '100', '37', 'a', '20', '18', '12', '0' ] 
numbers = []
letters = []
alert(input);
alert("If we add 1 to each of the above numbers, and dump the rest, we get......");

for ( i=0; i < input.length; i++ ) {
    if (isNaN(input[i]) == true) {
        letters.push(input[i]);
    } else {
        numbers.push(input[i]);
    };
};

for (i = 0; i < numbers.length; i++) {
    (numbers[i]++);
}

alert(numbers);