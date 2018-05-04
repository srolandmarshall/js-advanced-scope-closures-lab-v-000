function produceDrivingRange(blockRange){

  return function(posA,posB){
    let distance = Math.abs(parseInt(posB) - parseInt(posA));
    let difference = Math.abs(distance - blockRange);
    if (blockRange <= distance){
      return `${difference} blocks out of range`
    }//if
    else{
      return `within range by ${difference}`
    };//else
  }//return function
}

function produceTipCalculator(percentage){
  return function(bill){
    return bill*percentage;
  };
}
