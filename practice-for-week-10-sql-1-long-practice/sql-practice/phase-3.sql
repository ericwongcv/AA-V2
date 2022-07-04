-- Your code here

-- Record all SQLite3 CLI commands

-- 1. A new customer joined the loyalty program with the following customer information:
INSERT INTO customers (name, phone) VALUES ('Rachel', 1111111111);

-- 2. Rachel purchases a coffee. (When adding a coffee order, you must first check the 
    -- current points of the customer, update the customer's points, then add the coffee order.)
SELECT points FROM customers WHERE name = "Rachel";
UPDATE customers SET points = 6 WHERE name = "Rachel";
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);

-- 3. Two new customers joined the loyalty program with the following customer information:
INSERT INTO customers (name, email) VALUES ('Monica', 2222222222);
INSERT INTO customers (name, email) VALUES ('Pheobe', 3333333333);

-- 4. Phoebe purchases three coffees.
SELECT points FROM customers WHERE name = 'Pheobe';
UPDATE customers SET points = 8 WHERE name = 'Pheobe';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);

-- 5. Rachel and Monica each purchase four coffees.
SELECT points FROM customers WHERE name = 'Rachel';
SELECT points FROM customers WHERE name = 'Monica';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
UPDATE customers SET points = 10 WHERE name = 'Rachel';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
UPDATE customers SET points = 9 WHERE name = 'Monica';

-- 6. Monica wants to know her new point total.
SELECT points FROM customers WHERE name = 'Monica';

-- 7. Rachel wants to check her total points. Redeem her points for a coffee if she has enough points. 
    -- If she doesn't, she wants to purchase a coffee.
SELECT points FROM customers WHERE name = 'Rachel';
UPDATE customers SET points = 0 WHERE name = 'Rachel';
INSERT INTO coffee_orders (is_redeemed, ordered_at) VALUES (1, CURRENT_TIMESTAMP);

-- 8. Three new customers joined the loyalty program with the following customer information:
INSERT INTO customers (name, email) VALUES ('Joey', 'joey@friends.show');
INSERT INTO customers (name, email) VALUES ('Chandler', 'chandler@friends.show');
INSERT INTO customers (name, email) VALUES ('Ross', 'ross@friends.show');


-- 9. Ross purchases six coffees.
SELECT points FROM customers WHERE name = 'Ross';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
UPDATE customers SET points = 11 WHERE name = 'Ross';

-- 10. Monica purchases three coffees.
SELECT points FROM customers WHERE name = 'Monica';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
UPDATE customers SET points = 12 WHERE name = 'Monica';

-- 11. Phoebe wants to check her total points. Redeem her points for a coffee if she has enough points. 
    -- If she doesn't, she wants to purchase a coffee.
SELECT points FROM customers WHERE name = 'Pheobe';
INSERT INTO coffee_orders (ordered_at) VALUES (CURRENT_TIMESTAMP);
UPDATE customers SET points = 9 WHERE name = 'Pheobe';

-- 12. Ross demands a refund for the last two coffees that he ordered. (Make sure you delete Ross's 
    -- coffee orders and not anyone else's. Update his points to reflect the returned purchases.)
