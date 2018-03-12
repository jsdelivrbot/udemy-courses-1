require_relative '../setup'

puts "Exercise 1"
puts "----------"

# Your code goes below here ...
def createNewStore name, annual_revenue, mens_apparel, womens_apparel
    Store.create({
        name: name, 
        annual_revenue: annual_revenue, 
        mens_apparel: mens_apparel,
        womens_apparel: womens_apparel
    })
end

createNewStore('Burnaby', 300000, true, true)
createNewStore('Richmond', 1260000, false, true)
createNewStore('Gastown', 190000, true, false)

puts "STORE COUNT"
puts Store.count
