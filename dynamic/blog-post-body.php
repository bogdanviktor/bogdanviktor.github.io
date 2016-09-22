<?PHP

	require_once 'dynamic/connect.php' ;
	
	$sql="select id,date_format(modified,'%e %M, %Y') as date, title, lead, leadimage, postimage, body from blog where id='".addslashes($_GET['id'])."' and active=1" ;
	$data=mysqli_query($link,$sql) or die ("Blog error 1.".mysqli_error($link)) ;
	while ($row=mysqli_fetch_assoc($data)) {
		if (!$row["postimage"] && $row["leadimage"]) {
			$row["postimage"] = $row["leadimage"] ;
		}
		$cont=file_get_contents("blogposttemplate.html") ;
		$cont=str_replace ("%%date%%",$row["date"],$cont) ;
		$cont=str_replace ("%%title%%",$row["title"],$cont) ;
		$cont=str_replace ("%%lead%%",$row["lead"],$cont) ;
		$cont=str_replace ("%%image%%",$row["postimage"],$cont) ;
		$cont=str_replace ("%%id%%",$row["id"],$cont) ;
		$cont=str_replace ("%%body%%",$row["body"],$cont) ;
		echo $cont ;
	}

	mysqli_close($link);
?>