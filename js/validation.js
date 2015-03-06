function validateEmail(email) { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
} 

function phonenumber(mobile)  
{  
  var phoneno = /^09\d{9}$/;  
	return phoneno.test(mobile);
} 
function validateinfoForm() {
    
	
	//نام و نام خانوادگی
	var name = document.getElementById("name").value;
    //var x = document.forms["myForm"]["name"].value;
    if (name.trim() === "") {
        alert("نام را وارد نمایید!");
        return false;
    }
	
	if (name.length > 40) {
        alert("نام: تعداد کاراکتر ها بیشتر از حد مجاز میباشد!");
        return false;
    }
	
	//ایمیل
    var email = document.getElementById("email").value;
	if(!validateEmail(email))
	{	
		alert("آدرس ایمیل اشتباه است!");
		return false;
	}
	
	
    //شماره تماس
	var mobile = document.getElementById("mobile").value;
	if(!phonenumber(mobile))
	{	
		alert("شماره موبایل وارد شده معتبر نمیباشد!");
		return false;
	}
	
	
	//پیام
	var content = document.getElementById("content").value;
    if (content.trim() === "") {
        alert("اطفا پیام خود را وارد نمایید!");
        return false;
    }
	
	if (content.length < 10) {
        alert("پیام وارد شده کمتر از حد مجاز می باشد");
        return false;
    }
	
    /*
	var x = document.forms["myForm"]["mobile"].value;
    if (x == null || x == "") {
        alert("شماره تماس را وارد نمایید!");
        return false;
    }
    if (x.length != 10) {
        alert("شماره تماس 10 رقم می باشد!");
        return false;
    }
    if(Math.floor(x) != Number(x)){
        alert("شماره تماس: لطفا عدد وارد نمایید!");
        return false;
    }
	*/

	return true;
    
}

