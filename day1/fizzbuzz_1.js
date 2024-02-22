function fizzbuzz(){
    let three= "Fizz",five="buzz",seven="bang",eleven="bong",thirteen="fezz";
    for (let i=1;i<=256;i++)
    {
        let result=[];
        let elevenmultiple = false;
        if ( i%3 == 0){
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