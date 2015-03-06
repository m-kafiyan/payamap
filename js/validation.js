function validateinfoForm() {
    //نام و نام خانوادگی

    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("نام را وارد نمایید!");
        return false;
    }
    if (x.length > 40) {
        alert("نام: تعداد کاراکتر ها بیشتر از حد مجاز میباشد!");
        return false;
    }

    //ایمیل
    var x = document.forms["myFormmyForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("آدرس ایمیل اشتباه است!");
        return false;
    }

    //شماره تماس
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

    
}

