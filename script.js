// 99 bottles of beer 

//create loop to run through 99 bottles of beer 

// let i equal initial amount of beer bottles

// loop starts at 99 and continues to 0 decrementing by 1 each time

for (let i = 99; i > -1; i--) {

//if i is greater than one bottle should be plural 
    if(i > 1){
        // i represents bottles of beer in each verse
        console.log("There are " + i + " botlles of beer on the wall, " + i + " bottles of beer.")
        //take one bottle of beer away
        --i
        //second verse 
        console.log("Take one down and pass it around, " + i + " bottles of beer on the wall.")
    }
// else if there is only 1 bottle of beer left 
    else  {
        // edge case/last loop of song -- words change a bit
        console.log("There is " + i + " botlle of beer on the wall, " + i + " bottle of beer.") 
        //take away last bottle of beer
        --i
        // end of song/end of loop
        console.log("Take one down pass it around, no more bottles of beer on the wall.")
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall")
    }

}