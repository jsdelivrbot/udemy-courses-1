-- All cat_id
SELECT cat_id FROM cats;

-- All names and breeds
SELECT name, breed FROM cats;

-- Just tabby cats
SELECT name, age FROM cats WHERE breed = 'Tabby';

-- cat_id === age
SELECT cat_id, age FROM cats WHERE cat_id = age;
