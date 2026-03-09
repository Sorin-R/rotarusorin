const WooCommerceAPI = require('woocommerce-api');

const WooCommerce = new WooCommerceAPI({
    url: 'http://yourwebsite.com',
    consumerKey: 'ck_your_consumer_key',
    consumerSecret: 'cs_your_consumer_secret',
    wpAPI: true,
    version: 'wc/v3'
});

const categories = [
    "Baby",
    "Activity & Entertainment",
    "Activity Centres",
    // ... add all your categories here
    "Stuffed Animals"
];

categories.forEach(category => {
    WooCommerce.post('products/categories', { name: category }, function(err, data, res) {
        console.log(res);
    });
});
Baby
Activity & Entertainment
Activity Centres
Bath Toys
Door Jumpers
Mobiles
Playmats & Floor Gyms
Swings & Chair Bouncers
Walkers
Baby & Toddler Toys
Baby Clothing
Baby Shoes
Car Seats & Accessories
Accessories
Baby Car Stickers
Car Organisers
Play Trays for Cars
Pushchair & Pram Toys
Car Seat Adaptors
Car Seat Bases
Car Seat Covers
Car Seat Inserts
Car Seat Protectors
Children's Car Window Shades
Car Seat Foot Rests
Harness Pads
Baby Car Seat Head Supports
Insect Nets
Car Mirrors
Car Seat Rain Covers
Car Seats
Carriers & Accessories
Carrier Accessories
Child Carrier Head Supports
Child Carrier Insert Pads
Sling Covers & Capes
Child Carrier Sucking Pads
Baby & Toddler Carriers
Carrier Slings
Baby & Toddler Hiking Backpacks
Gifts & Keepsakes
Baby Jewellery
Baby Boys' Christening Gowns & Clothing
Gift Sets
Baby Girls' Christening Clothing
Keepsake Boxes
Memory Books
Mobiles
Nappy Cakes
Photo Albums
Nursery Picture Frames
Silver Keepsakes
Soft Toys
Plush Interactive Toy Figures
Plush Pillows
Plush Puppets
Plush Toy & Blanket Sets
Stuffed Animal Clothing & Accessories
Stuffed Animals

