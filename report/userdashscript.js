		
var currentuser;

function storeUser(loguser)	
{
sessionStorage.user = JSON.stringify(loguser);
}

function getUser()
{
		if (!sessionStorage.user)
		{
		sessionStorage.user = null;
		}
		return JSON.parse(sessionStorage.user);

}

displaydata();

function  displaydata()
{
	var lblname=document.getElementById('lblnameid');
	var logoutid=document.getElementById('logoutid');

	logoutid.addEventListener("click",function(event)
	{ 
		 currentuser= null;
		storeUser(currentuser);
		//window.location.href="dashboard.html";
	});

	currentuser=getUser();
	if(currentuser==null)
	{
	window.location.href="dashboard.html";
	}
	else
	{
		lblname.textContent="Hi "+currentuser.fname+" !";
	}
}

