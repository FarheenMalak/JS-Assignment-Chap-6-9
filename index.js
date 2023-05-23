//chapter 06-09
//Q # 01
var mynum = 10;
document.write("<h3>Result:</h3> The value of a is " + mynum + "<br/>------------------- <br />" )

var newnum = ++mynum;
document.write("The value of ++a is : " + newnum +"<br/> Now the value of a is : " + newnum+"<br/>-----------<br/>" )

var num = newnum++;
var increment = newnum++ ;
document.write("The value of a++ is : " + num +"<br/> Now the value of a is : " + increment+"<br/>-----------<br/>" )

var anothernum = --increment;
document.write("The value of --a is : " + anothernum +"<br/> Now the value of a is : " + anothernum+"<br/>-----------<br/>" )

var numagain = increment--;
var decrement = increment-- ;
document.write("The value of a-- is : " + numagain +"<br/> Now the value of a is : " + decrement+"<br/>-----------<br/>" )

//Q # 02
var a = 2;
document.write( "a is :" + a +"<br/>")
var b = 1 ;
document.write( "b is :" + b +"<br/>")
var valueA = --a;
document.write( "--a is :" + valueA +"<br/>")
var valueB = --a - --b;
document.write( "--a - --b is :" + valueB +"<br/>")
var valueC = --a - --b + ++b ;
document.write( "--a - --b + ++b is :" + valueC +"<br/>")
var result= --a - --b + ++b + b--;
document.write( "Result is :" + result +"<br/>")

//Q # 03
var username = prompt("What is your name?");
alert("Hello " + username + "!");

//Q # 04 
document.write( "------------------ <br />")
var num = +prompt("Enter number" , 5);
  document.write("table of " + num + "</br></br>");
  for(i = 1; i<=10; i++){
      document.write(num + " x " + i + " = " + (num*i) + "</br>");
  } 

    //Q # 06
    document.write( "------------------ <br />")   
var sub1 = "english";
var sub2 = "urdu";
var sub3 = "maths";
var totalmarks = 100 ;
var marksobtsub1= 85;
var marksobtsub2= 70;
var marksobtsub3 = 92;
var percentagesub1= (marksobtsub1/totalmarks )*100
var percentagesub2= (marksobtsub2/totalmarks )*100
var percentagesub3= (marksobtsub3/totalmarks )*100
var total = totalmarks*3;
var totalobtmarks = marksobtsub1+marksobtsub2+marksobtsub3;
var totalpercentage = (totalobtmarks/total )*100
document.write("<th>Subject </th> <th>Total Marks </th><th>Obt Marks </th><th>Percentage </th><br/> ")
document.write("<pre><td>English  </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub1   +" </td>     <td> "+   percentagesub1   + "% </td><pre> ")
document.write("<pre><td>Urdu     </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub2   +" </td>     <td> "+   percentagesub2   + "% </td><pre> ")
document.write("<pre><td>Maths    </td> <td> "  +   totalmarks   +" </td>     <td> "+   marksobtsub3   +" </td>     <td> "+   percentagesub3   + "% </td><pre> ")
document.write("<pre><td>         </td> <td> "  +   total   +" </td>     <td> "+   totalobtmarks   +" </td>     <td> "+   totalpercentage  + "% </td><pre> ")