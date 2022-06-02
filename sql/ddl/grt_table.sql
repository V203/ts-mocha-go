drop table greets cascade;
create table greets(
	id serial not null primary key,
	name text not null UNIQUE,
    counter int default 0
	
	
);