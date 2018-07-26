//Import faker package
var faker = require('faker');

intro();
generateProduct(10);

function generateProduct(num) {
    for(var i = 0; i < num; i++) {
        console.log(faker.fake("{{commerce.productAdjective}} {{commerce.productMaterial}} {{commerce.productName}} - ${{commerce.price}}"));
    }
    return
}

function intro() {
    console.log("=========================");
    console.log("WELCOME TO THE BEST SHOP");
    console.log("=========================");
    return
}