<?php 
	function connectionToDataBase(){
		$servername = "localhost";
		$username = "root";
		$password = "root";
		$dbname = "BrowniesVique";

		$conn = new mysqli($servername, $username, $password, $dbname);
		
		if ($conn->connect_error){
			return null;
		}
		else{
			return $conn;
		}
	}

	function tryLoginUser($mail, $pass)
	{
		$conn = connectionToDataBase();
		if ($conn)
		{
			$sql = "SELECT * FROM User WHERE email = '$mail'";
			
			$result = $conn->query($sql);

			if ($result->num_rows > 0)
			{
				$row = $result->fetch_assoc();
				return array("status" => "SUCCESS", "name" => $row["name"], "mail" => $row["email"], "pass" => $row["pass"]);
			}
			else
			{
				return array("status" => "NOT EXISTS");
			}
		}
		else 
		{
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
	}

	function tryRegisterUser($name, $mail, $pass)
	{
		$conn = connectionToDataBase();
		if ($conn)
		{
			$sql = "INSERT INTO User (name, email, pass) VALUES ('$name', '$mail', '$pass')";
			
			$result = $conn->query($sql);

			if ($result)
			{
				return array("status" => "SUCCESS", "name" => $name, "mail" => $mail);
			}
			else
			{
				return array("status" => "EXISTS");
			}
		}
		else 
		{
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
	}

	function tryPostContactMsg($mail, $name, $comment)
	{
		$conn = connectionToDataBase();
		if ($conn != null)
		{
			$sql = "INSERT INTO ContactMsgs (mail, name, body) 
					VALUES ('$mail', '$name', '$comment')";
			$result = $conn->query($sql);

			if ($result)
			{
				return array("status" => "SUCCESS");
			}
			else
			{
				return array("status" => "FAILED TO POST");
			}
		}
		
		else 
		{
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
	}


?>