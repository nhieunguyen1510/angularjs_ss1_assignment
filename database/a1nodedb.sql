create table category (
    id int primary key not null auto_increment,
    name nvarchar(200) not null,
    description nvarchar(2000)
);

create table product (
    id int primary key not null auto_increment,
    name nvarchar(200) not null,
    description nvarchar(2000),
    thumbnail nvarchar(200),
    price decimal (15, 2),
    category_id int,
    foreign key(category_id) references category(id)
);

create table product_review (
    id int primary key not null auto_increment,
    product_id int,
    starts int,
    comment nvarchar(2000),
    author nvarchar(200)
);

insert into category(name, description) values
	('Phone','Phone'),
    ('Computer','Computer'),
    ('Laptop','Laptop'),
    ('Tablet','Tablet')
;
    
insert into product(name, thumbnail, price, category_id, description) values
     ('Lumia 650', 'lumia-650.png', 119, 1, 'With precision crafted metal frame design, refined performance and Windows 10 built in, it is the smart choice for your business.'),
     ('Lumia 950', 'lumia-950.png', 499, 1, 'High-end features, premium design, and the best Windows 10 experience – turn inspiration into action with the phone that works like your PC.'),
     ('Lumia 1520', 'Lumia-1520.png', 450, 1, 'A six-inch, 1080p full HD display with excellent outdoor readability and redesigned start screen lets you make the most of the extra space'),
     ('Lumia 950 XL', 'lumia-950-xl.png', 649, 1, 'With a stunning 5.7 inch Quad HD display, a powerful octa-core processor, and the best Windows 10 experience, it is the Lumia you have been waiting for.')
;