#array1 = [ ‘1’, ‘c’, ‘0’, ‘-1’, ‘5’, ‘b’, ‘100’, ‘37’, ‘a’, ‘20’, ‘18’, ‘12’, ‘0’ ]

array2 = [ '1', 'c', '0', '-1', '5', 'b', '100', '37', 'a', '20', '18', '12', '0' ]
puts array2
puts "If we add 1 to each of the above numbers, and dump the rest, we get......"

array3 = array2.select { |s| s.match(/^\d+$/) }.map(&:next)
array3.insert(2, '0')
puts array3