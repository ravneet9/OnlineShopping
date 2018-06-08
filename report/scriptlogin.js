var signinbtn=document.getElementById('signinbtn');
var loginbtn=document.getElementById('loginbtn');
var usertext=document.getElementById('usertext');
var userpass=document.getElementById('userpass');
var loginas=document.getElementById('loginas');
var fname=document.getElementById('fname');
		var flag=0;
		var username=document.getElementById('username');
		var confirmpass=document.getElementById('confirmpass');
		var Password=document.getElementById('password');
		var emailid=document.getElementById('eid');
		var dob=document.getElementById('dateofbirth');
		var emailid1= /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var Password1=/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
		var username1=/^[A-Za-z0-9_]{3,20}$/;
		var Users=getStoreduser();
		 var gender;
		
		
		checklogin();

function checklogin()
{
		var Admins=getStoredAdmins();
loginbtn.addEventListener("click",function(event)
{
	if(loginas.value=="Admin")
	{
		if(usertext.value=="ravneet"&&userpass.value=="123")
		{
			var dob=new dateofbirth("01","jan","1997");
			
			var loginuser=new makeobject("ravneet virk","ravneet",dob,"123","rvkaurrv9@gmail.com","female","ravneet","1");
			storeUser(loginuser);
		
			window.location.href="userinterface.html";
		}
		else	
		{
			flag=0;
			for(var i=0;i<Admins.length;i++)
			{
				if(usertext.value==Admins[i].fname&&userpass.value==Admins[i].Password)
				{
						storeUser(Admins[i]);
						window.location.href="userinterface.html";
						flag=1;
				}
			}
			if(flag==0)
		alert("Something went wrong");
	
			
			
		}
	}
	else if(loginas.value=="User")
	{
		flag=0;
		for(var i=0;i<Users.length;i++)
			{
				if(usertext.value==Users[i].fname&&userpass.value==Users[i].Password)
				{flag=1;
						storeUser(Users[i]);
						window.location.href="userdashboard.html";
						
						
				} 
					
			}
		if(flag==0)
		alert("Something went wrong");
	}
		
	
	
});
}


function getStoredAdmins()
{
	if (!localStorage.Admins)
	{
	localStorage.Admins = JSON.stringify([]);
	}
	return JSON.parse(localStorage.Admins);
}

function getStoreduser()
{
			if (!localStorage.Users)
		{
		
		localStorage.Users = JSON.stringify([]);
		}
	return JSON.parse(localStorage.Users);
}

function storesimpleuser(loguser)	
{
localStorage.Users = JSON.stringify(loguser);
}
function dateofbirth(day,mon,year)
{
	this.day=day;
	this.month=mon;
	this.year=year;
}

function storeUser(loguser)	
{
sessionStorage.user = JSON.stringify(loguser);
}

 
function validateEmail(email) 
{
 /*var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
 if (reg.test(email)){
	// alert("hogya");
 return true;
 }
 else{
 return false;
 }*/
var errors = [];
 if (!emailid1.test(emailid.value)) {
  errors[errors.length] = "You must enter a valid email address.";
  
emailid.value="";
  
 }
 if (!username1.test(username.value)) {
  errors[errors.length] = "You valid UserName no special char .";
  
username.value="";

 }
 if (!Password1.test(Password.value)) {
  errors[errors.length] = "You must enter a valid Password ";
  confirmpass.value="";
Password.value="";

 }
 
 if (errors.length > 0) {

  reportErrors(errors);
  return false;
 }
  return true;
}
function reportErrors(errors){
 var msg = "Please Enter Valide Data...\n";
 for (var i = 0; i<errors.length; i++) {
 var numError = i + 1;
  msg += "\n" + numError + ". " + errors[i];
}
 alert(msg);
}

usersigninbtn();
function usersigninbtn()
{	
var signinbtn=document.getElementById('signinbtn');
signinbtn.addEventListener("click",function(event)
{
		var email = emailid.value;
 
 
 if (validateEmail(email)) {
if(fname.value==""||username.value==""||Password.value==""||confirmpass.value==""||emailid.value==""||dob.value==="mm/dd/yyyy")
		{
			alert("Textfield is Empty");
		}
	 else if(Password.value !=confirmpass.value)
		{
			alert("Your Password is not matching");
			
		}
		else
		{
			addUserToArray();
			alert(" Congratulations! Your Account has been made..,Now You can LogIn as User..");
			hideTextInUserform();
			
		}
 }
// else
//hideTextInUserform();
 
		
			
});
}

function addUserToArray()
{
		 gender=Gend();
	//	 Userid=giveid();
	
	var userobject= new makeobject(fname.value,username.value,dob.value,Password.value,emailid.value,gender);

	Users.push(userobject);
	storesimpleuser(Users);
	
}

/*function giveid()
{
	if(Users.length>0)
	{
		Userid=Users[Users.length-1].Userid+1
	}

}*/

function Gend()
{
	  var x=document.getElementsByName("sex");
		console.log(x);
	 
	for(var i=0;i<2;i++)
		{
			if(x[i].checked)
			{
				 gender=x[i].value;
				 return gender;
			}
		}
}
		
function makeobject(fname,username,dob,Password,emailid,gender)
{
	this.fname=fname;
	this.userid=username;
	this.dob=dob;
	this.Password=Password;
	this.emailid=emailid;
	this.gender=gender;

}
function hideTextInUserform()
{
fname.value="";
username.value="";
confirmpass.value="";
Password.value="";
dob.value="";
emailid.value="";
}
