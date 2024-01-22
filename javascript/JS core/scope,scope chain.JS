 /*
 SCOPE CHAIN, SCOPE & LEXICAL ENVIRONMENT.
  */

 

 function sub(){
    console.log(f); //The function will search for the value of f, but it is not in the same execution context 
                    // so what will it print undefined,notdefined or 25.
 }
 let f = 25;
 sub();

