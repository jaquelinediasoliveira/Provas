drop database if exists Contabilidade;
create database Contabilidade;
use Contabilidade;

create table funcionarios(
    matricula integer primary key not null,
    nome_completo varchar(256) not null,
    ultimo_salario decimal(6,2) not null,
    data_desligamento date not null
);

insert into funcionarios(matricula, nome_completo, ultimo_salario, data_desligamento) values (201901, "Alfredo Santos", 2525.00, "2020-01-13"), (201902, "Amanda Alves", 3507.00, "2020-05-28");
-- LOAD DATA INFILE ''
-- INTO TABLE funcionarios
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

select * from funcionarios;