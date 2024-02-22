function fizzbuzz(){
    console.log(" welcome to fizzbuzz ")
    let three= "Fizz",five="buzz",seven="bang",eleven="bong",thirteen="fezz";
    let i=6;
    let condition = 'three';
    {
        let result=[];
        let elevenmultiple = false;
        if ( i%3 == 0 && condition == "three"){
            result.push(three);
        }
        if(i%13 ==0){
            result.push(thirteen);
            elevenmultiple = true;
        }
        if (i%5 == 0){
            result.push(five);
        }
        if (i%7 == 0){
            result.push(seven);
        }
        if (i%11 == 0){
            if (elevenmultiple){
                result.push(eleven);
            }
            else{
                result = [];
                result.push(eleven);
            }
           
        }
        if (i%17 == 0){
            result =result.reverse();
        }
           
        if (result == "")
        console.log(i)
    else
        console.log(result.join(''))
    }
    
}
fizzbuzz();