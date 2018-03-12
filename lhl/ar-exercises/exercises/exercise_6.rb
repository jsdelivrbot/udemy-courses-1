require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'
require_relative './exercise_5'

puts "Exercise 6"
puts "----------"

# Your code goes here ...
@store1.employees.create(first_name: 'Keano', last_name: 'Voelkl', hourly_rate: 60)
@store1.employees.create(first_name: 'Abe', last_name: 'Lincoln', hourly_rate: 70)
@store1.employees.create(first_name: 'George', last_name: 'Washington', hourly_rate: 80)

@store2.employees.create(first_name: 'Justin', last_name: 'Trudeau', hourly_rate: 80)
@store2.employees.create(first_name: 'Stephen', last_name: 'Harper', hourly_rate: 100)
@store2.employees.create(first_name: 'Arthur', last_name: 'Macdonald', hourly_rate: 110)

Employee.find_each do |employee|
  puts employee.first_name, employee.last_name, employee.hourly_rate    
end
