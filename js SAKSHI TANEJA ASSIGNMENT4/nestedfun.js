var showProduct= function(name,brand,price){
    this.name=name;
    this.brand=brand;
    this.price=price;
    console.log("product name",this.name);
    console.log("product brand",this.brand);
    return function(discount){
        this.discount=discount;
        console.log("Discounted price",this.price-this.discount)
}
}
showProduct("TV","mi",90000)(5000);