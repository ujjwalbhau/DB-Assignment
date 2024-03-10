


con.connect(function(err){
    if(err) throw err;
    else console.log("connected on sql server");
})



const query = ` CREATE TABLE Product(
    product_id INT primary KEY, 
    name VARCHAR(256) NOT NULL,
     desc TEXT,
      SKU VARCHAR(50),
      category_id INT, 
      inventory_id INT,
      price DECIMAL(10, 2),
      discount_id INT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      deleted_at TIMESTAMP DEFAULT NULL,
      FOREGIN KEY (category_id) REFERENCES Product_Category(category_id),
      FOREGIN KEY (inventory_id) REFERENCES Inventory(inventory_id),
      FOREGIN KEY (discount_id) REFERENCES Discount(discount_id),
) `
;

const query2 = `CREATE TABLE Product_Category (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);`;

const querry3 = `CREATE TABLE Product_inventory (
    id INT PRIMARY KEY,
    quantity INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);`

const querry4= `CREATE TABLE discount (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    discount_percent DECIMAL,
    active BOOLEN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP DEFAULT NULL
);`



app.post("/todo",function(req,res){
    // const data = req.body;
    const title= req.body.title;
    const completed= req.body.completed;
    const  query = `CREATE TABLE Products (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255),
        description TEXT,
        price DECIMAL(10, 2),
        category_id INT,
        FOREIGN KEY (category_id) REFERENCES Categories(id)
    );
    `
    con.query(query,function(err){
        if(err) res.status(500).send("could not insert todo");
        else res.status(200).send("todo inserted succesfully");
    })
})