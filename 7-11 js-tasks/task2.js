var num1, num2;
num1 =Number( window.prompt("Input the First integer", "0"));
num2 =Number(window.prompt("Input the second integer", "0")) ;

  function largestNumber(num1,num2){
    if (num1>num2){
    return num1 }
    else  { return num2 ;}
  }
        document.write ("the two numbers are: " + num1 + " and " + num2 +", and the largest number is : "+ largestNumber(num1,num2))
  