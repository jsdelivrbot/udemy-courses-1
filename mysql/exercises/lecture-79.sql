-- Update Jackson to 'Jack'
UPDATE cats SET name = 'Jack' WHERE name = 'Jackson';

-- Change Ringo's breed to 'British Shorthair'
UPDATE cats SET breed = 'British Shorthair' WHERE name = 'Ringo';

-- Update Maine Coons' age to 12
UPDATE cats SET age = 12 WHERE breed = 'Maine Coon';

SELECT * FROM cats;
