-- Drop the database if it already exists
DROP DATABASE IF EXISTS TestingSystem;
-- Create database
CREATE DATABASE IF NOT EXISTS TestingSystem;
USE TestingSystem;

-- Create table Manufacture: nha san xuat
DROP TABLE IF EXISTS 	`Manufacture`;
CREATE TABLE IF NOT EXISTS `Manufacture` (
	id 						INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` 					NVARCHAR(50) NOT NULL UNIQUE KEY
);

-- Create table Category: chung loai
DROP TABLE IF EXISTS 	`Category`;
CREATE TABLE IF NOT EXISTS `Category` (
	id 						INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
	`name` 					NVARCHAR(50) NOT NULL UNIQUE KEY
);

-- create table: Product
DROP TABLE IF EXISTS `Product`;
CREATE TABLE `Product`(
	id						INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    `name`					VARCHAR(500) NOT NULL,
	price					INT NOT NULL,
    color					NVARCHAR(50) NOT NULL,
    manufacture_id			INT UNSIGNED NOT NULL,
    category_id				INT UNSIGNED NOT NULL,
    created_date			DATETIME DEFAULT NOW(),
	image					VARCHAR(5000),
    star					INT NOT NULL,
    FOREIGN KEY(manufacture_id) REFERENCES Manufacture(id),
    FOREIGN KEY(category_id) REFERENCES Category(id)
);

-- =============================================
-- INSERT DATA 
-- =============================================
-- Add data Manufacture
INSERT INTO Manufacture(`name`) 
VALUES
				(N'SamSung'),
				(N'iPhone'),
				(N'Oppo'),
				(N'Xiaomi'),
				(N'Acer'),
				(N'Dell'),
				(N'MSI'),
				(N'Casio'),
				(N'Canon'),
				(N'Hp');
                
-- Add data Category
INSERT INTO Category(`name`) 
VALUES
				(N'Điện Thoại'),
				(N'Máy Tính'),
				(N'Tai nghe'),
				(N'Đồng Hồ'),
                (N'Tablet');
                
-- Add data Product
INSERT INTO Product	(`name`											, 		price			, 	color	, 	manufacture_id 	, category_id	, created_date		,	star	 ,		image																												) 
VALUES
					(N'Samsung Galaxy S23 Ultra 12GB '				, 		'9000000'		,	'Black'	, 		1			,  	1 			, 	'2020-03-05'	, 	 5	     ,	'https://cdn.tgdd.vn/Products/Images/42/264060/samsung-galaxy-s23-600x600.jpg'											),
					(N'iPhone 14 Pro Max 128GB|Chính hãng'			, 		'3000000'		,	'Red'	, 		2 			, 	1 			, 	'2020-03-05'	, 	 3		 ,	'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-den-thumb-600x600.jpg'									),
					(N'OPPO Reno8 T 5G (8GB - 128GB) '				, 		'5000000'		,	'White'	, 		3 			, 	1 			,	'2020-03-07'	,	 3		 ,	'https://cdn.tgdd.vn/Products/Images/42/301642/oppo-reno8t-vang1-thumb-600x600.jpg'										),
					(N'Xiaomi 12T 8GB 128GB Đã Kích Hoạt'			, 		'10000000'		,	'White'	,	 	4			,  	1			,	'2020-03-08'	,	 2		 ,	'https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/x/i/xiaomi-12t-den_1.jpg'							),
					(N'Dell Vostro 5410 i5 11320H/8GB/512GB'		, 		'7000000'		,	'Blue'	, 		6			, 	2 			,	'2020-03-10'	,	 5		 ,	'https://cdn.tgdd.vn/Products/Images/44/267695/dell-vostro-5410-i5-11320h-8gb-512gb-office-h-s-600x600.jpg'				),
					(N'Aspire 7 Gaming A715 42G R05G R5 '			, 		'6000000'		,	'Pink'	, 		5			, 	2 			,		NOW()		, 	 4		 ,	'https://cdn.tgdd.vn/Products/Images/44/269533/TimerThumb/acer-aspire-7-gaming-a715-42g-r05g-r5-nhqaysv007-(54).jpg'	),
					(N'CASIO 43.4 mm Nam MTP-E715D-7AVDF'			, 		'8000000'		,	'Pink'	, 		8			, 	4 			,		NOW()		,	 4		 ,	'https://cdn.tgdd.vn/Products/Images/7264/302236/casio-mtp-e715d-7avdf-nam-2.jpg'										),
					(N'Tai nghe Có Dây Samsung IG935'				, 		'2000000'		,	'Red'	, 		1 			, 	3 			,	'2020-04-07'	, 	 4		 ,	'https://laz-img-sg.alicdn.com/p/f1c1efec3e76dae4c60560e02f044562.jpg'													),
					(N'Tai nghe Bluetooth True Wireless'			, 		'22000000'		,	'Black'	, 		1 			,	3  			,	'2020-04-07'	,	 3		 ,	'https://cdn.tgdd.vn/Products/Images/54/230363/tai-nghe-bluetooth-true-wireless-mozard-ts13-thumb-2-600x600.jpeg'		),
					(N'iPad Gen 9 10.2 inch 64GB Wifi 2021'			, 		'20000000'		,	'Black'	, 		2 			,  	5			,	'2020-04-09'	, 	 2		 ,	'https://cdn.tgdd.vn/Products/Images/522/247517/iPad-9-wifi-den-600x600.jpg'											);
	