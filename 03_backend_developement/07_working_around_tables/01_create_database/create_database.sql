CREATE DATABASE human_resource;

CREATE TABLE regions (
id   INTEGER NOT NULL CONSTRAINT region_id PRIMARY KEY,
name VARCHAR(255));

DROP TABLE regions;

CREATE TABLE countries (
id        INTEGER      NOT NULL   PRIMARY KEY,
code      VARCHAR(255),
name      VARCHAR(255),
region_id INTEGER      REFERENCES regions(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

drop table countries;

CREATE TABLE locations (
id                  INTEGER      NOT NULL   PRIMARY KEY,
street_address      VARCHAR(255),
postal_code         VARCHAR(255),
city  				VARCHAR(255),
state 				VARCHAR(255),
country_id 			INTEGER      REFERENCES countries(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

drop table location;

CREATE TABLE jobs (
id                  INTEGER      NOT NULL   PRIMARY KEY,
title               VARCHAR(255),
min_salary          INTEGER,
max_salary          INTEGER);

drop table jobs;

CREATE TABLE job_grades (
id                  INTEGER      NOT NULL   PRIMARY KEY,
level               VARCHAR(255),
min_salary          INTEGER,
max_salary          INTEGER);

drop table job_grades;


CREATE TABLE departments (
id                  INTEGER      NOT NULL   PRIMARY KEY,
name				VARCHAR(255),
manager_id          INTEGER      ,
location_id 		INTEGER      REFERENCES locations(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

drop table departments;


CREATE TABLE employees (
id                  INTEGER      NOT NULL   PRIMARY KEY,
first_name			VARCHAR(255),
last_name			VARCHAR(255),
email				VARCHAR(255),
phone_number		VARCHAR(255),
hire_date			DATE		 NOT NULL,
job_id				INTEGER      REFERENCES jobs(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
salary        		INTEGER,
commission_pct      INTEGER,
manager_id			INTEGER      REFERENCES employees(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
department_id		INTEGER      REFERENCES departments(id) ON DELETE RESTRICT ON UPDATE RESTRICT);

drop table employees;


CREATE TABLE job_history (
id                  INTEGER      NOT NULL   PRIMARY KEY,
employee_id			INTEGER      REFERENCES employees(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
start_date          DATE,   
end_date            DATE,    
job_id 		        INTEGER      REFERENCES jobs(id) ON DELETE RESTRICT ON UPDATE RESTRICT,
department_id 		INTEGER		 REFERENCES departments(id) ON DELETE RESTRICT ON UPDATE RESTRICT
);

drop table job_history;

ALTER TABLE departments ADD FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE departments DROP CONSTRAINT (manager_id);
