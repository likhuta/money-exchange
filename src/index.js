// PLEASE DON'T change function name
module.exports =function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let bankInfo=  {"H":50,"Q":25,"D":10,"N":5,"P":1};
    let keyBank=Object.keys(bankInfo);
    console.log(keyBank)

    let answer={ };
    if(currency<=0){
      return answer;
    }

    if(currency>10000){
      answer['error']="You are rich, my friend! We don't have so much coins for exchange";
      return answer;
    }
    for(let i=0; i<=keyBank.length-1; i++){
      if(currency>=bankInfo[keyBank[i]]){
        let main=Math.floor(currency/bankInfo[keyBank[i]])
        currency=currency%bankInfo[keyBank[i]];
        answer[keyBank[i]]=main;

      }
      else continue;
    }
   return answer


}
