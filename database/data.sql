INSERT INTO rol(name)VALUES(
    'ADMINISTRADOR'
);
INSERT INTO rol(name)VALUES(
    'EDITOR'
);
INSERT INTO rol(name)VALUES(
    'CONSULTOR'
);
/* CATEGORY */
INSERT INTO category(name)VALUES(
    'ACCESORIOS'
);
INSERT INTO category(name)VALUES(
    'All'
);
INSERT INTO category(name)VALUES(
    'COSMETICOS'
);

INSERT INTO category(name)VALUES(
    'KIT'
);
INSERT INTO category(name)VALUES(
    'SKIN CARE'
);
/* PRODUCTS */
INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'Termo 700ml',
    'Yakult',
    1,
    'Termo para llevar cafe a la escuela',
    84.99,
    62.12,
    15,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'MASCARILLA / LIMPIADORA PROFUNDA',
    'CAFE-TE',
    2,
    'Mascarilla exfoliante para piel maltratada por la vida',
    15.99,
    13.12,
    55,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'TINTA INDELEBLE',
    'COTTONETE',
    2,
    'Tinta para cabello de multiples colores y tonos de saturacion',
    94.99,
    88.00,
    22,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'JABON FACIAL / CONEJO',
    'YESNOW',
    2,
    'Jabon facial con propiedad rejuvenecedoras de conejo',
    64.99,
    68.50,
    30,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'JABON FACIAL / TORONJA',
    'YESNOW',
    2,
    'Jabon facial con las propiedades sinteticas de la toronja',
    64.99,
    68.50,
    30,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'LABIAL',
    'SAILOOR MOOON',
    3,
    'Labial para damas conmemorando este anime lengedario de Sailor Moon',
    69.99,
    62.78,
    56,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'LABIAL / MAGICO',
    'FLOR',
    3,
    'Lambial con propiedades magicas en forma de una flor muy habitual en eurasia',
    45.00,
    41.35,
    23,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'RODILLO DE JADE',
    'LUX-COSMETICS',
    3,
    'Rodillo de Jade para aplicar tratamientos faciales con la mejor precision del oriente',
    69.99,
    68.00,
    54,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'Ventilador / espejo',
    'EASYWERE',
    3,
    'Ventalidar espejo para optimizar elaplicado de maquillaje durante trayecto largo en el transporte',
    69.99,
    52.50,
    45,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'LABIAL / BRILLO',
    'IMAGE OF NOBLE',
    3,
    'Labial elegante con efecto de brillos para deslumbrar en las fiestas',
    25.50,
    22.79,
    60,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'LABIAL / BOLITAS',
    'IMAGE OF NOBLE',
    3,
    'Labial elegante con efecto de bolitas para extrañar a las personas en las fiestas',
    25.50,
    22.79,
    60,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'KIT: Epiphany',
    'Kgirl',
    4,
    'Sorprendente kit epophany con excelente suritdo de cosmeticos y herramientas para aplicar cosmeticos',
    460,
    460,
    15,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'KIT: Just one day',
    'Kgirl',
    4,
    'Kit equipado con los necesario para un arduo dia de trabajo en la ciudad o espacios publicos',
    459,
    459,
    25,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'KIT: Piel Grasa V.1',
    'Kgirl',
    4,
    'Primera entrega del kit piel grasa el cual incluye un sin de tratamientos para este padecimiento facial',
    490,
    490,
    29,
    'ACTIVE',
    'NOT JET'
);

INSERT INTO products(name,brand,category_id,description,public_price,suplier_price,stock,status,image_url)VALUES(
    'KIT: Piel seca V1',
    'Kgirl',
    4,
    'Tramiento facial para piel seca y deshidratada por las emisiones solar encontra de la piel',
    535,
    535,
    17,
    'ACTIVE',
    'NOT JET'
);

/* USERS */

INSERT INTO users(name,last_name,email,password,rol_id,status)VALUES(
    'Jose',
    'Ontiveros',
    'ontiveros@gmail.com',
    'jose123',
    1,  
    'ACTIVE'
);
INSERT INTO users(name,last_name,email,password,rol_id,status)VALUES(
    'Bryan',
    'Lepe',
    'lepe_utj@utj.com',
    'lepe123',
    1,  
    'ACTIVE'
);
INSERT INTO users(name,last_name,email,password,rol_id,status)VALUES(
    'Daniel',
    'Romero',
    'romero@outlock.com',
    'romero123',
    1,  
    'ACTIVE'
);
INSERT INTO users(name,last_name,email,password,rol_id,status)VALUES(
    'Jesus',
    'Garcia',
    'garcia@gmail.com',
    'chuy123',
    2,  
    'ACTIVE'
);
INSERT INTO users(name,last_name,email,password,rol_id,status)VALUES(
    'Flor',
    'Rodriguez',
    'flor_r@gmail.com',
    'flor123',
    3,  
    'ACTIVE'
);


