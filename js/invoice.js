function invoice()
{
	alert("Payment was Successfull!!");
	alert("Thank You For Visiting My Website");
	location.href="\home.html";
}

function calculate(){
	
var charge=0;
var volume=0;
var Total = 0;
var count=1;
var containvol=0;
var containtot=0;

var vol = Array(); 
var chargearray = Array();
var Totalarray = Array();

 do
 {
	
    if(parseInt(document.getElementById("volume"+count).value) != 0)
    {
		
       chargearray[count] = parseFloat(document.getElementById("j"+count).value);

       vol[count] = parseFloat(document.getElementById("volume"+count).value);  

       charge += chargearray[count];
       volume += vol[count];
       Totalarray[count] = chargearray[count] * vol[count];
       Total += Totalarray[count];
    }
    else
    {
        
    }
    count++;
 }while(count<=6);
 
document.getElementById("fee").value= Total;
window.containvol=volume;
window.containtot=Total;
localStorage.setItem("volume",window.containvol);
localStorage.setItem("Total",window.containtot);
}

function reder()
{
location.href="\invoice.html";
}

function info()
{
	var tax1=0;
	var tax2=0;
	var finaltotal=0;
	var subtotal=localStorage.getItem("Total");
	var subvol=localStorage.getItem("volume");
	tax1= subtotal*0.05;
    tax2=subtotal*0.09975;
	finaltotal= parseFloat(subtotal)+parseFloat(tax1)+parseFloat(tax2);
document.getElementById("taxes1").innerHTML="TPS: "+tax1;
document.getElementById("taxes2").innerHTML="TVQ: "+tax2;	
document.getElementById("cal").innerHTML="CAD: "+subtotal;
document.getElementById("quan").innerHTML=subvol;
document.getElementById("subtotal").innerHTML="SubTotal: "+subtotal;
document.getElementById("final").innerHTML="CAD: "+finaltotal;
}

function blank()
{
	document.getElementById("cname").value="";
	document.getElementById("ccnum").value="";
	document.getElementById("expmonth").value="";
	document.getElementById("expyear").value="";
	document.getElementById("cvv").value="";
	document.getElementById("zip").value="";
	document.getElementById("fname").value="";
	document.getElementById("email").value="";
	document.getElementById("adr").value="";
	document.getElementById("city").value="";
	document.getElementById("state").value="";
}
