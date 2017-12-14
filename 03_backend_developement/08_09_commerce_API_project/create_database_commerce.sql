CREATE EXTENSION pgcrypto;

create table categories (
id 				uuid		PRIMARY KEY,
decathlon_id    integer,
label           varchar(255));

drop table categories;

delete from categories;

create table brands (
id 				uuid		PRIMARY KEY,
title           varchar(255)
);

create table products (
id 				uuid		PRIMARY KEY,
decathlon_id    integer,
title           varchar(255),
description     text,
brand_id        uuid        REFERENCES brands(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
min_price       float,
max_price       float,
crossed_price   float,
percent_reduction float,
image_path      varchar(255),
rating          float
);

create table products_by_category (
product_id     uuid 		REFERENCES products(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
category_id     uuid        REFERENCES categories(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

drop table products_by_category;
