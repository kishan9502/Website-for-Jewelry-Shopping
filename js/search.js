function myFunction() 
{
  var dhundo = document.getElementById("myText").value;
  dhundo=dhundo.toLowerCase();
  if(dhundo == "handcrafted" | dhundo == "best handcrafted")
  {
	  document.getElementById("result").innerHTML = document.getElementById("handcrafted").innerHTML 
  }
  else if(dhundo == "royal" | dhundo == "best royal")
  {
	document.getElementById("result").innerHTML = document.getElementById("royal").innerHTML
  }
   else if(dhundo == "class" | dhundo == "best class")
  {
	document.getElementById("result").innerHTML = document.getElementById("class").innerHTML
  }
  else if(dhundo == "stone" | dhundo =="best stone")
  {
	document.getElementById("result").innerHTML = document.getElementById("stone").innerHTML 
  }
  else if(dhundo == "necklace" | dhundo =="best necklace")
  {
	document.getElementById("result").innerHTML = document.getElementById("necklace").innerHTML 
  }
  else if(dhundo == "wedding" | dhundo == "best wedding")
   {
	document.getElementById("result").innerHTML = document.getElementById("wedding").innerHTML
  }
  else
  {
	  alert("Please input proper search instructions!!!"); 
	  document.getElementById("result").innerHTML="";  
  }
}