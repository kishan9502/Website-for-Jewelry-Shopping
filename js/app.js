function validated()
{
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	if(username == "admin" && password == "12345")
	{
		alert ("Welcome To My Website!!!");
		location.href='\home.html';
		return false;
	}
	else
	{
		alert ("Error!!! Please Enter Valid Email Or Password");
	} 
}