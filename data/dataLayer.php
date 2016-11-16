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

	function tryPostContactMsg($mail, $name, $comment)
	{
		$conn = connectionToDataBase();
		if ($conn != null){
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
		
		else {
			$conn -> close();
			return array("status" => "CONNECTION WITH DB WENT WRONG");
		}
	}


?>