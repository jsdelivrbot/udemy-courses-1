require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'
require_relative './exercise_4'

puts "Exercise 5"
puts "----------"

# Your code goes here ...
puts Store.sum('annual_revenue')

@company_annual_revenue = Store.sum('annual_revenue')
@company_avg_revenue = @company_annual_revenue / Store.count

puts @company_avg_revenue

puts "Number of stores generating $1M or more: #{Store.where('annual_revenue >= ?', 1000000).count}"
