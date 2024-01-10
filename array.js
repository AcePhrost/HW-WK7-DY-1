//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// for d in dog_names:
//     if d in dog_string:
//         print(f'Matched dog_name {d}')
//     else:
//         print("No Matches")

function findWords(string, arr){
   for(let n = 0; n < arr.length; n++){
    if (dog_string.includes(arr[n])){
        console.log(`Matched ${arr[n]} is here`)
    }else{console.log("No matches here")}
        
   }
   
}
findWords(dog_string, dog_names)
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let n = 0; n < arr.length; n++){
        if(arr % 2 == 0){
            arr.splice(n,1,'even index')
        }console.log(replaceEvens)
    }
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]