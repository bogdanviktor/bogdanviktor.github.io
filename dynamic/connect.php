<?PHP

	$link = mysqli_connect("localhost", "root", "", "yojee");
	//$link = mysqli_connect("localhost", "mediadbd", "AXYI8", "mediadbd4");

	if (!$link) {
		echo "Error: Unable to connect to MySQL." . PHP_EOL;
		echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
		echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
		exit;
	}

?>

