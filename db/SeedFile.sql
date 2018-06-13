CREATE TABLE bins (
    id serial primary key not null,
    shelf_id text not null,
    bin_id integer not null,
    name text,
    price decimal,
    image text
);

SELECT * FROM bins;


INSERT INTO bins
(shelf_id, bin_id, name, price, image)
VALUES 
('A', 1, 'Nike Pro Combat Shirt', $40.00, 'https://i.pinimg.com/736x/1f/3a/e6/1f3ae6c380db63a61378a9b77e86e003--workout-gear-workouts.jpg'),
('A', 2, 'Oakley Ballistic Sunglasses', $60.00, 'https://cdn8.bigcommerce.com/s-d8bzk61/images/stencil/1280x1280/products/2233/3108/oakley-si-ballistic-crosshair-2-0-sunglasses-with-gunmetal-frame-and-grey-lens-24__16921.1448998831.jpg?c=2&imbypass=on'),
('A', 3, 'Nike Weightlifting Shoes', $125.00, 'https://mk0barbendl86qlfmi9n.kinstacdn.com/wp-content/uploads/2017/04/Screenshot-2017-04-20-at-2.21.26-PM-696x441.png'),
('A', 4, 'Skeleton Watch', $30.00, 'https://browze.com/media/catalog/product/cache/1/image/430x430/a4e40ebdc3e371adff845072e1c73f37/5/8/585b8146751d1d4ee2a4d4e4-bi-1.3.jpg'),
('B', 1, 'Eragon', $8.00, 'https://moly.hu/system/covers/big/covers_161731.jpg?1395406861'),
('B', 2, 'Eldest', $8.00, 'https://bitsnbooks.files.wordpress.com/2015/03/eldest_book_cover.png'),
('B', 3, 'Brisingr', $10.00, 'http://pnovels.com/uploads/truyen/Brisingr-The-Inheritance-Cycle.jpg'),
('B', 4, 'Inheritance', $10.00, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6H8pCsSGo2GnADD8SZHBWJgsFLbGHupRj_wH4hQOoajQJOiOY'),
('C', 1, 'Skyrim', $59.99, 'https://pcgamingwiki.com/images/thumb/a/a2/The_Elder_Scrolls_V_Skyrim_VR_cover.jpg/300px-The_Elder_Scrolls_V_Skyrim_VR_cover.jpg'),
('C', 2, 'KOTOR II', $10.00, 'https://upload.wikimedia.org/wikipedia/en/9/9b/KOTOR_II.jpg'),
('C', 3, 'Halo 3', $10.00, 'https://images-na.ssl-images-amazon.com/images/I/510WO7GFa8L._SY445_.jpg'),
('C', 4, 'Super Smash Bros', $125.00, 'http://images.uncyc.org/commons/thumb/f/fc/Ssb64.jpg/300px-Ssb64.jpg'),
('D', 1, 'Dell Inspiron 15', $1200.00, 'https://images-na.ssl-images-amazon.com/images/I/411vvdjmZoL._SX425_.jpg'),
('D', 2, 'Beats by Dre', $189.99, 'https://images.store.hmv.com/app_/responsive/HMVStore/media/product/115996/01-115996.jpg?w=500'),
('D', 3, 'Sunburst Acoustic Guitar', $200.00, 'https://ae01.alicdn.com/kf/HTB1otsKk6ihSKJjy0Feq6zJtpXa9/DIDUO-41-Inch-Folk-Guitar-Acoustic-Guitar-Basswood-Guitar-Excellent-Quality-And-Cheap-Price-Sunset-Color.jpg_640x640.jpg'),
('D', 4, 'Type Writer Keyboard', $40.00, 'https://i.linio.com/p/2a367051d48490406dfe582db6aa5abc-product.jpg')


SELECT * FROM bins;

INSERT INTO bins 
(shelf_id, bin_id) 
VALUES 
('A', 5),
('B', 5),
('C', 5),
('D', 5);

SELECT * FROM bins;