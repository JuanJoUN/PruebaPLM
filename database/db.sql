CREATE DATABASE user_info;

USE user_info;

CREATE TABLE user(
    name varchar(25) NOT NULL,
    last_name varchar(40) NOT NULL,
    id int PRIMARY KEY,
    email varchar(50) NOT NULL,
    cellphone int NOT NULL,
    born_date date NOT NULL,
    file blob NOT NULL
)
