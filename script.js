function  totalPrice(mobile,laptop , watch ){

var   total =  mobile + laptop    + watch;

return  total;
}

let mobile = 30000;
let laptop = 35999;
let watch = 2499;

var total_price = totalPrice ( mobile, laptop, watch ); //sequnce laptop, mobile ,watch;


document.write("<h2>mobile  = " + mobile + " BDT</h2>");
document.write("<h2>laptop = " + laptop + " BDT</h2>");
document.write("<h2>watch = " + watch + " BDT</h2><hr/>");
document.write("<h2>Total Price = " + total_price + " BDT</h2>");


//hotel cost ---------------//

function totalRent(days){
 var i = 1,
 rent = 0,
 hotel_price = 100;
 while( i <= days){

    if( i <= 10){

        rent = hotel_price;
    }
    else if ( i > 10 && i <= 20) {

        rent += hotel_price - ( hotel_price / 100 )  * 20;

    }
    else {
        rent += hotel_price - ( hotel_price / 100) * 50;
    }
    i++;
 }
 return rent ;
}

var days = 25;
var rent = totalRent (days);
document.write( 
  " <h2>  Rent for " + days +  "  days is "  + rent + " Taka. </h2>"
);

// friend name ---------//




var friends = [
    "Masud Rana",
    "Mahbub Rasid Tonoy",
    " Mahede Al amin",
    "Shawon Ahmed",
    "Lucy Reza",
    "Ayesha Siddika",
    "Jannatul Ferdous",
    "Hridoy Ahad",
    "Cartoon Fahid",
    "Shakib Raz",
]
function greaterNameFinder( friendsArray){
    var targetIndex = 0;

    for ( var i = 1 ; i < friendsArray.lenth; i++ ){
         
        if(friendsArray[i].lenth > friendsArray[targetIndex].lenth){
            targetIndex = i ;
        }

    }
    return friendsArray[targetIndex];
}

var greaterName = greaterNameFinder(friends);

document.write( "<h2>Greater Name of Friend  is: <i>"  + greaterName + "</i></h2>" );



