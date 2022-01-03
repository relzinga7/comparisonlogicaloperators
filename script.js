let yourAge = 18;

if (yourAge < 17) {

    console.log("You are not allowed in to the pub. You are kindly requested to stay outside");
}

else {

    console.log("You are allowed in to the pub"); 
}

let isFemale = true;

if (isFemale) {

    console.log("You are allowed in to the pub");
}

else {

    console.log("You are not allowed in to the pub. You are kindly requested to stay outside"); 
}

let driverStatus = "designated";

if (driverStatus == "designated") {

    console.log("You are allowed to drive");
}

else {

    console.log("You are not allowed to drive");
}

// 50% discount //

let discountAge = 24;

if (discountAge >= 18 && discountAge <= 25) {

    console.log("You get 50% off!");

}

// Free beer for Sarah and Bram //

let firstName = "Bram";

if (firstName === "Sarah" || firstName === "Bram") {

    console.log("You get free beer!");
}

// Discount for bills over 25 euros, 50 euros and 100 euros //

let totalAmount = 100;

if (totalAmount > 25 && totalAmount <= 50) {

    console.log("You'll get bitterballen for free!");
}

if (totalAmount > 50 && totalAmount < 100) {

    console.log("You'll get a free portion of nachos!");
}

if (totalAmount >= 100) {

    console.log("You'll get a free bottle of champain!");
}

