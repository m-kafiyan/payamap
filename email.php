<?php
function email($content,$name,$email,$mobile)

{

	$headers_user  = 'MIME-Version: 1.0' . "\r\n";

	$headers_user .= 'Content-type: text/html; charset=utf-8' . "\r\n";

	$headers_user .= 'From: abcd.in' . "\r\n";



	$subject_user = 'پیام از مشاهده  کنندگان سایت';

	$message_user='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml">
		<head>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<title>Untitled Document</title>
		</head>
		<style type="text/css">a{color:red;}td{font-size:13px; background-color:#ffffdd; border-top:#666666; border-top-width:1px; padding:2px 5px;text-align:right;}</style>
		<body style="font-family:tahoma; font-size:9px;">
			<div style="color:#888888; background-color:#eeeeee; border-color:#ffffff; border-top:1px solid; width:596px; margin: 0px auto; text-align:center; padding:2px 5px; font-family:b sina,sina,tahoma; font-size:11px;">بخش پشتیبانی سایت abcd.ir</div>
			<table cellpadding="0" cellspacing="0" width="600" style="border:1px solid #aaaaaa; margin:5px auto; padding:0px 0px; direction:rtl; font-family:tahoma;">
				<tr><td>ارسال کننده : </td></tr>
				<tr><td>'.$name.' ('.$email.') </td></tr>
				<tr><td> موبایل : ('.$mobile.') </td></tr>
				<tr><td>متن پیام : </td></tr><tr><td>'.$content.'</td></tr>
			</table>
			<div style="background-color:#eeeeee; border-color:#ffffff; border-bottom:1px solid; width:596px; margin: 0px auto; text-align:center; padding:2px 5px;">
				<a href="http://www.abcd.ir" style="text-decoration:none; color:#999999; font-family: Verdana, Arial, Helvetica, sans-serif; font-size:11px;">w w w . A b c d . i r</a>
			</div>
		</body>
	</html>';

	//echo $message_user;



	mail( 'maedeh.kafiyan@gmail.com', $subject_user, $message_user, $headers_user );
	//mail( 'Yavari@afe.ir', $subject_user, $message_user, $headers_user );
	//mail( 'Abbasi@afe.ir', $subject_user, $message_user, $headers_user );
	//mail( 'Hasani@afe.ir', $subject_user, $message_user, $headers_user );
	

	header('Location: index.html?email=sent');
	//echo "Email Sent to {$username1} .<br>";

}




$error = 0;
$name = '';
$email = '';
$text = '';
if(isset($_POST['email']))
{
	if($_POST['name'] != '')
	{
		$name = addslashes(trim($_POST['name']));
		$mobile = addslashes(trim($_POST['mobile']));
		if($_POST['email'] != '')
		{
			$email = addslashes(trim($_POST['email']));
			if($_POST['content'] != '')
			{

				$content = addslashes(trim($_POST['content']));

				email($content,$name,$email,$mobile);
				//$error = 'Your message has sent.<br>';
			}
			else
			{
				$error = 1;//'Enter Message Please!<br>';
			}
		}
		else
		{
			$error = 2;//'Enter Email Correctly please!<br>';
		}
	}
	else
	{
		$error = 3;//'Enter Your Name please!<br>';
	}
	if($error > 0)
	header('Location: index.html?email=error&error='.$error);
}

?>
