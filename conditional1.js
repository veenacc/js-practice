var num1 = 10;
var num2 = 8;

function checkOneNum(num)
{
  if (num === 10)
  {
    console.log(0);
  }
  else if (num < 10) 
  {
    console.log(-1);
  }
  else
  {
    console.log(1);
  }
}

function checkTwoNum(num1,num2)
{
  if (num1 < 10 && num2 < 10) 
  {
    console.log(1);
  }
  else
  {
    console.log(0);
  }
}

function printResult(num)
{
  var result = 0;
  if (num < 10)
  {
    result = 9 ;
  }
  else if (num < 20)
  {
    result = 19;
  }
  else if (num < 30)
  {
    result = 29;
  }
  else
  {
    result = -1;
  }
  console.log(result) ;
}

function checkOr(num1,num2)
{
  if (num1 > 10 || num2 > 10) 
  {
    console.log(100);
  }
  else
  {
    console.log(-100);
  }
}

function checkNums(num)
{
  if (num === 100)
  {
    console.log(num);
  }
  else if (num === 99) 
  {
    console.log(num);
  }
  else
  {
    console.log(0);
  }
}

function checkAnd(num1,num2)
{
  if (num1 < 0 && num2 > 0) 
  {
    console.log(1);
  }
  else
  {
    console.log(0);
  }
}
function lastOne(num)
{
  var result = 0;
  if (num > 80)
  {
    result = 5;
  }
  else if (num > 60)
  {
    result = 4;
  }
  else if (num > 40)
  {
    result = 3;
  }
  else if (num > 20)
  {
    result = 2;
  }
  else
  {
    result = 1;
  }
  console.log(result);
}

// checkOneNum(num1);
// checkTwoNum(num1,num2);
// printResult(3);
// checkOr(11,11);
// checkNums(98);
// checkAnd(0,0);
lastOne(2);

