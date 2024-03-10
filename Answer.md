Answer for 1->
Thare is an table named product which has various entities among them product_category is an entity which holds semerate sub-table 
relation  between them is 1) one-to-many means that product can belong to only one product but product category can have multiplr products associated
                          2) the "Product_Category" table holds information about different categories that products can belong to, such as their name and description. Each record in the "Product_Category" table represents a distinct product category.
                          3) Each record in the "Product" table is associated with exactly one record in the "Product_Category" table through the "category_id" field         
Answer for 2->
To ensure that each product in the "Product" table has a valid category assigned to it, you can use a foreign key constraint in the database schema. 
This constraint will enforce referential integrity, ensuring that the value stored in the "category_id" column of the "Product" table references an existing category 
in the "Product_Category" table.

