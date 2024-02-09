var count = 99;
var noMore = "no more"

while(count >= 0){
    let preMinute = count-1;

    if(count === 1){
        console.log(String(count)+ " bottle of beer on the wall, " +String(count) + " bottle of beer.\nTake one down and pass it around, "+noMore+ "bottles of beer.\n\n");
    }else if(count === 0){
        console.log(noMore[0].toUpperCase()+noMore.slice(1,-2)+ " bottles of beer on the wall, " +noMore + " bottles of beer.\nGo to the store and buy some more, "+String(count+99)+ " bottles of beer.\n\n");
    }else{
        console.log(String(count)+ " bottles of beer on the wall, " +String(count) + " bottles of beer.\nTake one down and pass it around, "+String(preMinute)+ " bottles of beer.\n\n");
    }


    


    count = preMinute
}