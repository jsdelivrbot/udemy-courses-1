require_relative '../setup'
require_relative './exercise_1'
require_relative './exercise_2'
require_relative './exercise_3'

puts "Exercise 4"
puts "----------"

# Your code goes here ...
createNewStore('Surrey', 22400, false, true)
createNewStore('Whistler', 1900000, true, false)
createNewStore('Yaletown', 430000, true, true)

@mens_stores = Store.where(mens_apparel: true)

Store.find_each do |store|
  puts store.name, store.annual_revenue
end

@womens_stores_under_one_million = Store.where("annual_revenue < ? AND womens_apparel = ?", 1000000, true)

@womens_stores_under_one_million.each do |store|
  puts store.name, store.annual_revenue
end

