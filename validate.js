function validate_name()
{
    var name = document.getElementById('name_id').value;

    if((name.length == 0) && (name == ""))
    {
        document.getElementById('msg_name').innerHTML = "";
        document.getElementById('msg_name').style.color = "transparent";
        document.getElementById('name_id').style.border = "0px solid transparent";
        return false;
    }

    else if((name.length <= 1) && (name.length >= 30))
    {
        document.getElementById('msg_name').innerHTML = "Invalid Name";
        document.getElementById('msg_name').style.color = "red";
        document.getElementById('name_id').style.border = "1px solid red";
        return false;

    }

    else if((!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) && (!name.match(/^[A-Za-z]*$/)))
    {
        document.getElementById('msg_name').innerHTML = "Please Enter a Valid Name";
        document.getElementById('name_id').style.border = "1px solid red";
        document.getElementById('msg_name').style.color = "red";
        return false;
    }

    else
    {
        document.getElementById('msg_name').innerHTML = name + " Looks Great";
        document.getElementById('msg_name').style.color = "green";
        document.getElementById('name_id').style.border = "1px solid green";
        return true;
    }  
}

function validate_uname()
{
    var uname = document.getElementById('uname_id').value;


    if((uname.length == 0) && (uname == ""))
    {
        document.getElementById('msg_uname').innerHTML = "";
        document.getElementById('msg_uname').style.color = "transparent";
        document.getElementById('uname_id').style.border = "0px solid transparent";
        return false;
    }

    else if(uname.length <= 4)
    {
        document.getElementById('msg_uname').innerHTML = "Username Should Have Atleast 5 Characters";
        document.getElementById('msg_uname').style.color = "red";
        document.getElementById('uname_id').style.border = "1px solid red";
        return false;

    }

    else if((!uname.match(/^[A-Za-z@$#_\-0-9]*$/)))
    {
        document.getElementById('msg_uname').innerHTML = "Please Enter a Valid Username";
        document.getElementById('msg_uname').style.color = "red";
        document.getElementById('uname_id').style.border = "1px solid red";
        return false;
    }

    else
    {
        document.getElementById('msg_uname').innerHTML = uname+" Looks Great";
        document.getElementById('msg_uname').style.color = "green";
        document.getElementById('uname_id').style.border = "1px solid green";
        return true;
    }  
}

function validate_pass()
{

    var pass = document.getElementById('pass_id').value;

    if((pass.length == 0) && (pass == ""))
    {
        document.getElementById('msg_pass').innerHTML = "";
        document.getElementById('msg_pass').style.color = "transparent";
        document.getElementById('pass_id').style.border = "0px solid transparent";
        return false;
    }
    else if((pass.length < 7))
    {
        document.getElementById('msg_pass').innerHTML = "Password Should Should Have Atleast 7 Characters";
        document.getElementById('msg_pass').style.color = "red";
        document.getElementById('pass_id').style.border = "1px solid red";
        return false;
    }
    else if((!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/)))
    {
        document.getElementById('msg_pass').innerHTML = "Password Includes One Special Character, One UpperCase Letter, One Lowercase Letter and One Number";
        document.getElementById('msg_pass').style.color = "red";
        document.getElementById('pass_id').style.border = "1px solid red";
        return false;
    }
    else
    {
        document.getElementById('msg_pass').innerHTML = "Strong Password";
        document.getElementById('msg_pass').style.color = "green";
        document.getElementById('pass_id').style.border = "1px solid green";
        return true;
    }

}


function validate_cpass()
{
    var pass = document.getElementById('pass_id').value;
    var cpass = document.getElementById('cpass_id').value;

    if(((cpass.length == 0) && (cpass == "")))
    {
        document.getElementById('msg_cpass').innerHTML = "";
        document.getElementById('msg_cpass').style.color = "transparent";
        document.getElementById('cpass_id').style.border = "0px solid transparent";
        return false;
    }
    else if(cpass == pass)
    {
        document.getElementById('msg_cpass').innerHTML = "Password Match";
        document.getElementById('msg_cpass').style.color = "green";
        document.getElementById('cpass_id').style.border = "1px solid green";
        return true;
    }
    else
    {
        document.getElementById('msg_cpass').innerHTML = "Password Not Match";
        document.getElementById('msg_cpass').style.color = "red";
        document.getElementById('cpass_id').style.border = "1px solid red";
        return false;
    }
}

function validate_email()
{
    var email = document.getElementById('email_id').value;

    if(((email.length == 0) && (email == "")))
    {
        document.getElementById('msg_email').innerHTML = "";
        document.getElementById('msg_email').style.color = "transparent";
        document.getElementById('email_id').style.border = "0px solid transparent";
        return false;

    }

    else if((!email.match(/^[A-Za-z#$_.\-0-9]*@{1}[A-Za-z]{5}.[a-z]{3}$/)))
    {
        document.getElementById('msg_email').innerHTML = "Please Enter a Valid Email Address";
        document.getElementById('msg_email').style.color = "red";
        document.getElementById('email_id').style.border = "1px solid red";
        return false;
    }

    else
    {
        document.getElementById('msg_email').innerHTML = "Email Address is Valid";
        document.getElementById('msg_email').style.color = "green";
        document.getElementById('email_id').style.border = "1px solid green";
        return true;
    }  
}


function complete_validate(){

    var name = document.getElementById('name_id').value;
    var uname = document.getElementById('uname_id').value;
    var pass = document.getElementById('pass_id').value;
    var cpass = document.getElementById('cpass_id').value;
    var email = document.getElementById('email_id').value;

    if((name.length == 0) && (name == ""))
    {
        document.getElementById('msg_name').innerHTML = "";
        document.getElementById('msg_name').style.color = "transparent";
        document.getElementById('name_id').style.border = "0px solid transparent";
        return false;
    }

    else if(name.length <= 1)
    {
        document.getElementById('msg_name').innerHTML = "Invalid Name";
        document.getElementById('msg_name').style.color = "red";
        document.getElementById('name_id').style.border = "1px solid red";
        return false;

    }

    else if((!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) && (!name.match(/^[A-Za-z]*$/)))
    {
        document.getElementById('msg_name').innerHTML = "Please Enter a Valid Name";
        document.getElementById('name_id').style.border = "1px solid red";
        document.getElementById('msg_name').style.color = "red";
        return false;
    }

    else
    {
        document.getElementById('msg_name').innerHTML = name + " Looks Great";
        document.getElementById('msg_name').style.color = "green";
        document.getElementById('name_id').style.border = "1px solid green";
        return true;
    }  

    if((uname.length == 0) && (uname == ""))
    {
        document.getElementById('msg_uname').innerHTML = "";
        document.getElementById('msg_uname').style.color = "transparent";
        document.getElementById('uname_id').style.border = "0px solid transparent";
        return false;
    }

    else if(uname.length == 0)
    {
        document.getElementById('msg_uname').innerHTML = "Invalid Username";
        document.getElementById('msg_uname').style.color = "red";
        document.getElementById('uname_id').style.border = "1px solid red";
        return false;

    }

    else if((!uname.match(/^[A-Za-z@$#_\-0-9]*$/)))
    {
        document.getElementById('msg_uname').innerHTML = "Please Enter a Username";
        document.getElementById('msg_uname').style.color = "red";
        document.getElementById('uname_id').style.border = "1px solid red";
        return false;
    }

    else
    {
        document.getElementById('msg_uname').innerHTML = "Username Looks Great";
        document.getElementById('msg_uname').style.color = "green";
        document.getElementById('uname_id').style.border = "1px solid green";
        return true;
    }  


    if((pass.length == 0) && (pass == ""))
    {
        document.getElementById('msg_pass').innerHTML = "";
        document.getElementById('msg_pass').style.color = "transparent";
        document.getElementById('pass_id').style.border = "0px solid transparent";
        return false;
    }
    else if((pass.length < 7))
    {
        document.getElementById('msg_pass').innerHTML = "Password Should Be Minimum 7 Characters";
        document.getElementById('msg_pass').style.color = "red";
        document.getElementById('pass_id').style.border = "1px solid red";
        return false;
    }
    else if((!pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/)))
    {
        document.getElementById('msg_pass').innerHTML = "Password Includes One Special Character, One UpperCase Letter & One Lowercase Letter";
        document.getElementById('msg_pass').style.color = "red";
        document.getElementById('pass_id').style.border = "1px solid red";
        return false;
    }
    else
    {
        document.getElementById('msg_pass').innerHTML = "Strong Password";
        document.getElementById('msg_pass').style.color = "green";
        document.getElementById('pass_id').style.border = "1px solid green";
        return true;
    }

    if(((cpass.length == 0) && (cpass == "")))
    {
        document.getElementById('msg_cpass').innerHTML = "";
        document.getElementById('msg_cpass').style.color = "transparent";
        document.getElementById('cpass_id').style.border = "0px solid transparent";
        return false;
    }
    else if(cpass == pass)
    {
        document.getElementById('msg_cpass').innerHTML = "Password Match";
        document.getElementById('msg_cpass').style.color = "green";
        document.getElementById('cpass_id').style.border = "1px solid green";
        return true;
    }
    else
    {
        document.getElementById('msg_cpass').innerHTML = "Password Not Match";
        document.getElementById('msg_cpass').style.color = "red";
        document.getElementById('cpass_id').style.border = "1px solid red";
        return false;
    }

    if(((email.length == 0) && (email == "")))
    {
        document.getElementById('msg_email').innerHTML = "";
        document.getElementById('msg_email').style.color = "transparent";
        document.getElementById('email_id').style.border = "1px solid transparent";
        return false;

    }

    else if((!email.match(/^[A-Za-z@#$_.\-0-9]*@{1}[A-Za-z]{5}.[a-z]{3}$/)))
    {
        document.getElementById('msg_email').innerHTML = "Please Enter a Valid Email Address";
        document.getElementById('msg_email').style.color = "red";
        document.getElementById('email_id').style.border = "1px solid red";
        return false;
    }

    else
    {
        document.getElementById('msg_email').innerHTML = "Email Address is Valid";
        document.getElementById('msg_email').style.color = "green";
        document.getElementById('email_id').style.border = "1px solid green";
        return true;
    }  

}