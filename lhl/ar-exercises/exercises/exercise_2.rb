require_relative '../setup'
require_relative './exercise_1'

puts "Exercise 2"
puts "----------"

# Your code goes here ...

@store1 = Store.find_by(id: 1)
@store2 = Store.find_by(id: 2)

puts "store one name is #{@store1.name}"

@store1.name = 'Metrotown'

puts "store one name is #{@store1.name}"

puts 'EXERCISE 2 COMPLETE'
