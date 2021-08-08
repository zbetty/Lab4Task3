CREATE TABLE patient (
	"ID" serial primary key,
	"firstName" text,
	"lastName" text,
	"DOB" text,
	"sex" text,
	"phoneNumber" text,
	"streetAddress" text,
	"city" text,
	"state" text,
	"zip" integer
);

CREATE TABLE physician (
	"npiID" serial primary key,
	"firstName" text,
	"lastName" text,
	"sex" text,
	"phoneNumber" text,
	"email" text,
	"streetAddress" text,
	"city" text,
	"state" text,
	"zip" integer
);

CREATE TABLE appointment (
	"date" text,
	"time" text,
	"physicianID" serial,
	"patientID" serial,
	foreign key("physicianID") references physician("npiID"),
	foreign key("patientID") references patient("ID")
);

insert into patient values ('1000', 'Joe', 'Doe', '1/1/99', 'M', '646-111-1234', '200 Schermerhorn St', 'Brooklyn', 'NY', 11201);
insert into patient values ('1001', 'Anna', 'Banna', '4/12/90', 'F', '347-234-9780', '1234 5th St', 'Brooklyn', 'NY', 11215);
insert into patient values ('1002', 'Bob', 'Builder', '6/28/95', 'M', '718-990-3256', '120 5th Ave', 'Brooklyn', 'NY', 11217);

insert into physician values ('1', 'Daniel', 'Leinad', 'M', '646-546-4793', 'd.leinad@gmail.com', '506 6th St', 'Brooklyn', 'NY', 11215);

insert into appointment values ('2021-08-03', '12:12:00', '1', '1000');
insert into appointment values ('2021-12-20', '12:30:00', '1', '1001');

