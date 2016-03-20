var input = [ 1, 0, -1, 5, 100, 37, 20, 18, 12, 0 ];
var answer;
alert(input);

alert("If we add 1 to each of those numbers, we get......");

for (answer = 0; answer < input.length; answer++) {
    (input[answer]++);
    alert( input[answer]);
}