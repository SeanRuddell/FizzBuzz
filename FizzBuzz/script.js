var count = 1;
function countup(){
    for(count=1; count<=100; count++){
        if(count%15==0){
            console.log("FizzBuzz")
        }
        else if(count%5==0){
            console.log("Buzz")
        }
        else if(count%3==0){
            console.log("Fizz")
        }
        else (console.log(count));
    }
}
