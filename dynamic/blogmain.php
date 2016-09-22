<?PHP

	require_once 'connect.php' ;
		
	$sql="select id,date_format(modified,'%e %M, %Y') as date, title, lead, leadimage from blog where active=1 order by modified desc" ;
	$data=mysqli_query($link,$sql) or die ("Blog error 1.".mysqli_error($link)) ;
	while ($row=mysqli_fetch_assoc($data)) {
		$cont=file_get_contents("../blogboxtemplate.html") ;
		$cont=str_replace ("%%date%%",$row["date"],$cont) ;
		$cont=str_replace ("%%title%%",$row["title"],$cont) ;
		$cont=str_replace ("%%lead%%",$row["lead"],$cont) ;
		$cont=str_replace ("%%image%%",$row["leadimage"],$cont) ;
		$cont=str_replace ("%%id%%",$row["id"],$cont) ;
		echo $cont ;
	}
	
	mysqli_close($link);
?>