// var num1 = 7;
// var num2 = 6;
// var answer = num2 > num2;
// console.log(answer);

// discount =  (listingPrice/sellingPrice)/listingPrice *100;

var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage =  (listingPrice - sellingPrice)/listingPrice *100;

console.log("Discount percerntage: " + discountPercentage);

dispalyDiscountPercentage = Math.round(discountPercentage);

console.log(dispalyDiscountPercentage + "% off");