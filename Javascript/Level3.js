input = ['ab123', 'gh00', 'ijk8', 'lmn12', 'cd99ef11']
separator = []
numbers = []
letters = []
alert(input);
alert("if we separate the numbers from the letters, add 1 to each of those numbers, and then rejoin the numbers and letters, we get.......");

for ( i=0; i < input.length; i++ ) {
    separator.push(input[i]);
    for ( x = 0; x < separator.length; x++ ) {
        alert(separator.charAt(x));
        if (isNaN(separator[x]) == true) {
            letters.push(separator[x]);
        } else {
            numbers.push(separator[x]);
        };
    };
    separator.length = 0;
};
alert(numbers);
alert(letters);