numbers = [ 1, 0, -1, 5, 100, 37, 20, 18, 12, 0 ]
puts numbers
puts "If we add 1 to each of the above numbers, we get......"

for i in numbers
  puts i = (i += 1)
end
