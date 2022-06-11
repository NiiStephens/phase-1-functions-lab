// Code your solution in this file!
 function distanceFromHqInBlocks(distance) {
     let headquarterLocation = 42;
     //return distance - headquarterLocation;

     if (distance >= headquarterLocation) {
         return distance - headquarterLocation;
     }
     else{
         return headquarterLocation - distance;
     }
     }

function distanceFromHqInFeet(_distance) {
    let eachBlockInManhattan = 264;
    return distanceFromHqInBlocks(_distance) * eachBlockInManhattan
    
}
function distanceTravelledInFeet (start, destination){

    let eachBlockInManhattan = 264;
    let differenceInFeet = destination - start;

    if (destination > start){
        return differenceInFeet * eachBlockInManhattan
    }
    else{
        return (
            (start - destination) * eachBlockInManhattan
        )
    }
}

function calculatesFarePrice (start, destination){
    let eachBlockInManhattan = 264;
    let differenceInFeet;
    let price;

    if (destination > start){
        differenceInFeet = (destination - start) * eachBlockInManhattan
    }
    else{
        differenceInFeet = (start - destination) * eachBlockInManhattan
    }
    if (differenceInFeet <= 400){
        price = 0;
    }
    else if
        (differenceInFeet > 400 && differenceInFeet <= 2000){
            price = (differenceInFeet - 400) * 0.02
        }
    else if (
        differenceInFeet > 2000 && differenceInFeet <= 2500){
            price = 25  
    }
    else{
        price = 'cannot travel that far'
    }
    return price
}


    
    
    
    
    
    
    
    
    // let blockInManhattan = 264
    // let distanceInFeet = distanceFromHqInBlocks(distance) * block
    // return distanceInFeet;

    //