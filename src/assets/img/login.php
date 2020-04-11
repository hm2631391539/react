<?php
	header("Content-type:text/html;charset=utf-8");
	// $name = $_REQUEST["name"];
	// $pwd = $_REQUEST["pwd"];
	$phone = $_REQUEST["phone"];
	// $email = $_REQUEST["email"];
	$conn=mysql_connect("localhost","root","root");
	mysql_select_db("jd");
	$new=mysql_query("select * from user where stu_phone='$phone'",$conn);
	if(mysql_num_rows($new)>0){
	    echo 1
	}else{
		echo 2
	}
	mysql_close($conn);
?>