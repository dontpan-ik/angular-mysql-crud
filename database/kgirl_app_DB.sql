CREATE DATABASE kgirl_app;

USE kgirl_app;

CREATE TABLE users(
user_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NOT NULL,
last_name VARCHAR(150) NOT NULL,
email VARCHAR(400) NOT NULL,
password VARCHAR(400) NOT NULL,
rol_id INT NOT NULL,
status VARCHAR(150) NOT NULL,
client_id INT,
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE,
PRIMARY KEY(user_id));

CREATE TABLE clients(
client_id INT NOT NULL AUTO_INCREMENT,
address VARCHAR(150) NOT NULL,
phone_number VARCHAR(100),
birth_date DATE,
PRIMARY KEY(client_id));

CREATE TABLE products(
product_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(150) NOT NULL,
brand VARCHAR(150) NOT NULL,
category_id INT NOT NULL,
description VARCHAR(150) NOT NULL,
public_price FLOAT NOT NULL,
suplier_price FLOAT,
stock INT NOT NULL,
subcategory VARCHAR(150),
status VARCHAR(150) NOT NULL,
suplier_id INT,
image_url VARCHAR(300),
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE,
PRIMARY KEY(product_id));

CREATE TABLE supliers(
suplier_id INT NOT NULL AUTO_INCREMENT,
company_name VARCHAR(150) NOT NULL,
category VARCHAR(150) NOT NULL,
email VARCHAR(400) NOT NULL,
address VARCHAR(150) NOT NULL,
contact_number VARCHAR(100),
score FLOAT,
status VARCHAR(150) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE,
PRIMARY KEY(suplier_id));

CREATE TABLE delivery(
delivery_id INT NOT NULL AUTO_INCREMENT,
company_name VARCHAR(150) NOT NULL,
email VARCHAR(400) NOT NULL,
address VARCHAR(150) NOT NULL,
contact_number VARCHAR(100),
charge FLOAT NOT NULL,
status VARCHAR(150) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE,
PRIMARY KEY(delivery_id));

CREATE TABLE orders(
order_id INT NOT NULL AUTO_INCREMENT,
client_id INT NOT NULL,
total_items INT NOT NULL,
total_charge FLOAT,
delivery_id INT,
status VARCHAR(150) NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE,
PRIMARY KEY(order_id));

CREATE TABLE order_details(
order_id INT NOT NULL,
product_id INT NOT NULL,
amount INT NOT NULL,
charge FLOAT NOT NULL,
created_at timestamp NOT NULL DEFAULT current_timestamp,
updated_at DATE);

CREATE TABLE category(
category_id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
PRIMARY KEY (category_id));

CREATE TABLE rol(
rol_id INT NOT NULL AUTO_INCREMENT,
name varchar(100) NOT NULL,
PRIMARY KEY (rol_id));

ALTER TABLE users
ADD CONSTRAINT FK_rol_id
FOREIGN KEY (rol_id) REFERENCES rol(rol_id);

ALTER TABLE users
ADD CONSTRAINT FK_client_id_user
FOREIGN KEY (client_id) REFERENCES clients(client_id);

ALTER TABLE products
ADD CONSTRAINT FK_suplier_id
FOREIGN KEY (suplier_id) REFERENCES supliers(suplier_id);

ALTER TABLE products
ADD CONSTRAINT FK_category_id
FOREIGN KEY (category_id) REFERENCES category(category_id);

ALTER TABLE orders
ADD CONSTRAINT FK_client_id
FOREIGN KEY (client_id) REFERENCES clients(client_id);

ALTER TABLE orders
ADD CONSTRAINT FK_delivery_id
FOREIGN KEY (delivery_id) REFERENCES delivery(delivery_id);

ALTER TABLE order_details
ADD CONSTRAINT FK_order_id
FOREIGN KEY (order_id) REFERENCES orders(order_id);

ALTER TABLE order_details
ADD CONSTRAINT FK_product_id
FOREIGN KEY (product_id) REFERENCES products(product_id);