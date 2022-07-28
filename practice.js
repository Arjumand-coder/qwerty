var number1=Math.floor(Math.random() * 10);
var number2=Math.floor(Math.random() * 16);


a_a=document.getElementById("player2_name_input").value;
    answer=number1*number2;


 score=0;



function logout()

{

window.location="start.html"

}

function generate()

{
   
    

    document.getElementById("n1").innerHTML=number1
    document.getElementById("n2").innerHTML=number2
    console.log("Number1"+number1);

    console.log("Number2"+number2);

    console.log("a_a"+a_a);
    console.log("Answer"+answer);
    
    a_a=document.getElementById("player2_name_input").value;
    answer=number1*number2;


}

function check()  {

  if(answer==a_a)

  {
   
    score=score+1;


    document.getElementById("player_score").value=score;
    document.getElementById("n1").innerHTML="";
    document.getElementById("n2").innerHTML="";
   
    
    console.log(answer);

    a_a=document.getElementById("player2_name_input").value;
    answer=number1*number2;
    document.getElementById("comment").innerHTML="Correct Answer"

    
 


  }

  else {
    document.getElementById("comment").innerHTML="Wrong Answer"
   

  }

}