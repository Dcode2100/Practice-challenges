/*
 The javascript code is executed in a different way and not like other coding languages.
An Execution context is an abstract environment which evaluates/executes javascript code.

 EXECUTION CONTEXT is made of 2 phase

     First is the memory allocation part(In JS memory is allocated to varible and function before they are executed).
     second is code part in this the code is performed one by one line and in same order as it is written
                            (That is why javascript is called single threaded and synchronous coding language).

 HOISTING IN JAVASCRIPT
    
    Hoisting is a phenomenon in JS that the variable/function can be accessed before it is even initialized.
        In JS the variable are alocated memory and function are made in available in memory part of execution context.
        
   ******** Only the function are invoked perfectly and the variable is shown as undefined in hoisting *****
        
        A brand new Execution context is created for every function and N number of execution has to be managed
        and it is done by

           CallStack().  (It is a stack which manages the execution context for the code)
    */

    /* When empty file of javascript is executed then three things are created  
         1. Global execution context 
         2. Window - it is a global object ( given by JS with different functionalities).
            > all variable and function in the global space are attached to window object.
            > all the varible and function which are not in function are in global space.
         3. This keyword (At global level, this keyword is pointing to window object).

    */  