// Code your solution in this file!
function distanceFromHqInBlocks(pickup){
    const hq = 42
    let distance = pickup-hq
    //updated let from const
    if (distance<0){
        distance=distance*-1
    }
    console.log (distance)
    return distance 
}

function distanceTravelledInFeet(beginning,destination){
    let feetTravelled=(beginning-destination)*264
    if (feetTravelled<0){
        feetTravelled=feetTravelled*-1
    }
    return feetTravelled
}

function distanceFromHqInFeet(pickup){
     let blocks=distanceFromHqInBlocks(pickup)*264
     console.log(blocks)
     return blocks
}

function calculatesFarePrice(start, destination){
    const feet=distanceTravelledInFeet(start, destination)
    if (feet<400){
        return 0
    }
    else if(feet>400 && feet<2000){
        return (feet-400)*.02
    }
    else if(feet>2000 && feet<2500){
        return 25
    }
    else if (feet>2500){
        return 'cannot travel that far'
    }
}