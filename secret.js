var fn = prompt("Enter first name");
var ln = prompt("Enter last name");
var age =prompt("Enter age");
var height =prompt("Enter height in cms");
var pet =prompt("Name of pet");
prompt("Thank you for entering your details")

var f=null;
var l=null;
var a=null;
var h1=null;
var p1=null;

if(fn[0]==ln[0])
{
  f=true;
}
else{
  f=false;
}

if(age >20 && age <30)
{
  a=true;
}
else{
  a=false;
}

if(height>=170)
{
  h1=true;
}
else{
  h1=false;

}

if(pet[pet.length-1]='y')
{
  p1=true;
}
else{
  p1=false;
}

if(f&&a&&h1&&p1==true)
{
  console.log("Welcome aboard , agent bond");
}
