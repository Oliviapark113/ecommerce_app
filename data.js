import bcrypt from 'bcryptjs';


const data = {
    users:[
        {
          name: 'Olivia',
          email: 'oliviaAdmin@gmail.com',
          password: bcrypt.hashSync('5378', 8),
          isAdmin: true,
        },
        {
            name: 'Gunoo',
            email: 'gunooUser@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
          },
    ],
    products:[
        {
            name:"Olivia's Tank Top",
            category:"Tops",
            image:"/images/t1.png",
            price: 34,
            countInStock:10,
            brand:"Olivia's",
            rating:3,
            numReviews:10,
            description: "Ultra Soft Ribbed Knit product"
           

        },
        {
            name:"Lules Bra Top",
            category:"Tops",
            image:"/images/a1.png",
            price: 34,
            countInStock:20,
            brand:"Lules",
            rating:4.5,
            numReviews:8,
            description: "Activewear Bra Top"

        },
        {
            name:"Lules Cross Front Top",
            category:"Tops",
            image:"/images/t2.png",
            price: 44,
            countInStock:0,
            brand:"Lules",
            rating:4,
            numReviews:15,
            description: "Off the shoulder Styling"

        },
        {
            name:"Olivia's ruffled Crop Top",
            category:"Tops",
            image:"/images/s1.png",
            price: 54,
            countInStock:30,
            brand:"Olivia's",
            rating:4,
            numReviews:20,
            description: "Ruffled Crop top with Lace up detail"

        },
        {
            name:"Olivia's Moto Jacket",
            category:"Jacket",
            image:"/images/jk1.png",
            price: 228,
            countInStock:20,
            brand:"Olivia's",
            rating:5,
            numReviews:30,
            description: "Moto Jacket"

        },
        {
            name:"Lules Strap Dress",
            category:"Dress",
            image:"/images/dr1.png",
            price: 88,
            countInStock:12,
            brand:"Lules",
            rating:4.5,
            numReviews:30,
            description: "Strap shoulder Bodycon Dress"

        },
        {
            name:"Jamies Shorts",
            category:"Pants",
            image:"/images/b1.png",
            price: 68,
            countInStock:18,
            brand:"JNYC",
            rating:4,
            numReviews:30,
            description: "White Shorts"

        }
    
    ]
}

export default data;