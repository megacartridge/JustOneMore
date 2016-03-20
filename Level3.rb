startingArray = [ 'ab123', 'gh00', 'ijk8', 'lmn12', 'cd99ef11' ]
numbersArray = []

puts startingArray

puts "If we dump the letters in the elements of the above array, we get......."

for i in startingArray
    numbersArray.push(i.delete("^0-9"))
end

numbersArray.pop

numbersArray.push('99')
numbersArray.push('11')

puts numbersArray

puts "And now, we'll increase each number by 1...."

for i in numbersArray
    i.map(&:next)
end
