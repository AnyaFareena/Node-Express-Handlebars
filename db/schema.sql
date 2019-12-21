DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers(
    id int primary key not null auto_increment,
    burger_name varchar(30),
    devoured boolean
);
