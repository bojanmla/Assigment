function checkName(){
    if(document.getElementById("name").value!="")
    {
        document.getElementById("pname").innerHTML="<strong>OK</strong>";
        document.getElementById("pname").style.color="green";
        }
    else
    {
        document.getElementById("pname").innerHTML="Type your full name";
        document.getElementById("pname").style.color="red"
    }
}
function checkEmail()
{
    console.log("vnatre vo funkcija");
        for (let i=0; i<=document.getElementById("email").length; i++)
        {
            console.log("vnatre vo for");
            if(document.getElementById("email").value[i]="@")
            {
            document.getElementById("pemail").innerHTML="<strong>OK</strong>";
            document.getElementById("pemail").style.color="green";
            
            }
            else
            {
            document.getElementById("pemail").innerHTML="Type correct e-mail";
            document.getElementById("pemail").style.color="red"
            }
        }    

       
    
}


