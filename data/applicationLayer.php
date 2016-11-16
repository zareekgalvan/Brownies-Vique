<?php 
	header('Content-type: application/json');
	require_once __DIR__ . '/dataLayer.php';

	$action = $_POST["action"];

	switch ($action) {
		case 'LOGIN':
			//loginFunc();
			break;
		
		case 'COMMENTS':
			//getComments();
			break;

		case 'POSTCOMM':
			//postComm();
			break;

		case 'REGISTER':
			//registerUser();
			break;

		case 'CONTACT':
			sendContactMessage();
			break;
	}




	function sendContactMessage()
	{
		$name = $_POST["name"];
		$mail = $_POST["mail"];
		$comment = $_POST["comment"];
		$to = "browniesvique@gmail.com";
		$from = "Contacto";
		$subject = "CONTACTO: nuevo mensaje";
		$body = 'De: $name\nEmail: $mail\nMensaje: $comment';

		if (mail($to, $subject, $body, $from))
		{
			echo json_encode(array("status" => "SUCCESS"));
		}
		else
		{
			echo json_encode(array("status" => "FAILED"));
		}
		
	}


	function decryptPassword($password)
	{
		$key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
	    
	    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
    	
	    $ciphertext_dec = base64_decode($password);
	    $iv_dec = substr($ciphertext_dec, 0, $iv_size);
	    $ciphertext_dec = substr($ciphertext_dec, $iv_size);

	    $password = mcrypt_decrypt(MCRYPT_RIJNDAEL_128, $key, $ciphertext_dec, MCRYPT_MODE_CBC, $iv_dec);
	   	
	   	
	   	$count = 0;
	   	$length = strlen($password);

	    for ($i = $length - 1; $i >= 0; $i --)
	    {
	    	if (ord($password{$i}) === 0)
	    	{
	    		$count ++;
	    	}
	    }

	    $password = substr($password, 0,  $length - $count); 

	    return $password;
	}

	function encryptPassword()
	{
		$userPassword = $_POST["password"];

	    $key = pack('H*', "bcb04b7e103a05afe34763051cef08bc55abe029fdebae5e1d417e2ffb2a00a3");
	    $key_size =  strlen($key);
	    
	    $plaintext = $userPassword;

	    $iv_size = mcrypt_get_iv_size(MCRYPT_RIJNDAEL_128, MCRYPT_MODE_CBC);
	    $iv = mcrypt_create_iv($iv_size, MCRYPT_RAND);
	    
	    $ciphertext = mcrypt_encrypt(MCRYPT_RIJNDAEL_128, $key, $plaintext, MCRYPT_MODE_CBC, $iv);
	    $ciphertext = $iv . $ciphertext;
	    
	    $userPassword = base64_encode($ciphertext);

	    return $userPassword;
	}

	function startSession($activeuser, $activeusername, $activeemail)
    {
		// Starting the session
	    session_start();
		$_SESSION['activeuser'] = $activeuser;
	    $_SESSION['activeusername'] = $activeusername;
	    $_SESSION['activeemail'] = $activeemail;
    }
 ?>