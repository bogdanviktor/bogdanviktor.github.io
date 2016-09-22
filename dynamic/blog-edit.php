<?PHP
	require_once 'dynamic/connect.php' ;
	
	function format_date($date) {
		$arr=explode(".",$date) ;
		if (count($arr)!=3) {
			return $date ;
		}
		return $arr[2]."-".$arr[1]."-".$arr[0] ;
	}
	
	function FileUpload ($inputName) {	
		if ($_FILES[$inputName]["name"]=="") {
			return false ;
		}
		$baseName=basename($_FILES[$inputName]["name"]) ;
		$uploadOk = 1;
		$imageFileType = pathinfo($baseName,PATHINFO_EXTENSION);
		//Check if image file is a actual image or fake image
		if(isset($_POST["submit"])) {
			$check = getimagesize($_FILES[$inputName]["tmp_name"]);
			if($check !== false) {
				echo "File is an image - " . $check["mime"] . ".";
				$uploadOk = 1;
			} else {
				echo "File is not an image.";
				$uploadOk = 0;
			}
		}		
		// Allow certain file formats
		if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
			echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
			$uploadOk = 0;
		}
		//Finally
		if ($uploadOk == 0) {
			echo "Sorry, the file {$baseName} was not uploaded.";
			// if everything is ok, try to upload file
		} else {
			$target_dir = "uploads/";
			$i=1 ;
			while (file_exists($target_dir."/{$i}.".$imageFileType)) {
				$i++ ;
			} 
			$target_file = $target_dir."/{$i}.".$imageFileType;
			if (move_uploaded_file($_FILES[$inputName]["tmp_name"], $target_file)) {
				//echo "The file {$baseName} as ".basename($target_file)." has been uploaded.";
				return basename($target_file) ;
			} else {
				echo "Sorry, there was an error uploading your file.";
			}
		}
		return false ;
	}
	
	if ($_POST) {
		$leadImage = FileUpload ("leadimage") ;
		$postImage = FileUpload ("postimage") ;
		$title = mysqli_real_escape_string($link, $_POST["title"]) ;
		$subtitle = "" ; //mysqli_real_escape_string($link, $_POST["subtitle"]) ;
		$lead = mysqli_real_escape_string($link, $_POST["lead"]) ;
		$body = mysqli_real_escape_string($link, $_POST["body"]) ;
		$modified = mysqli_real_escape_string($link, format_date($_POST["modified"])) ;
		$id=mysqli_real_escape_string($link, $_POST["id"]) ;
		$images="" ;
		if (!($leadImage===false)) {
			$images.=", leadimage='{$leadImage}' " ;
		}
		if (!($postImage===false)) {
			$images.=", postimage='{$postImage}' " ;
		}
		$sql="update blog set title='{$title}', subtitle='{$subtitle}',  modified='{$modified}', ".
			 " body='{$body}', lead='{$lead}' {$images} where id='{$id}' " ;
		mysqli_query($link,$sql) or die ("Blog error 2.".mysqli_error($link)) ;
		echo "<h3 class='postsaved'>Post has been saved. <a href='blog-post.php?id={$id}'>Let's see it!</a></h3>" ;
	}
	
	$sql="select id,date_format(modified,'%e.%m.%Y') as moddate, title, lead, leadimage, postimage, body from blog where id='".addslashes($_GET['id'])."' " ;
	$data=mysqli_query($link,$sql) or die ("Blog error 1.".mysqli_error($link)) ;
	$row=mysqli_fetch_assoc($data) ;
	
?>
	<form id="blogeditform" name="blogeditform" action="blog-edit.php?id=<?=$_GET['id'];?>" method="POST" enctype="multipart/form-data">
		<input name="id" value="<?=$_REQUEST['id'];?>" type=hidden>
		<label for="modified">Modified:</label><input class="datefield" name="modified" value="<?=$row['moddate'];?>"><br> 
		<label for="title">Title:</label><input name="title" value="<?=$row['title'];?>"><br> 
		<!-- <label for="subtitle">Subtitle:</label><input name="subtitle" value="<?=$row['subtitle'];?>"><br> -->
		<label for="leadimage">List image:</label><input class="imageinput" type="file" name="leadimage">
		<?PHP	
			if ($row['leadimage']) {
				echo "&nbsp;&nbsp;<a target=_BLANK href=\"uploads/{$row['leadimage']}\">see current image</a>" ; 
			}
		?>
		<br>
		<label for="postimage">Post image:</label><input class="imageinput" type="file" name="postimage">
		<?PHP	
			if ($row['postimage']) {
				echo "&nbsp;&nbsp;<a target=_BLANK href=\"uploads/{$row['postimage']}\">see current image</a>" ; 
			}
		?>
		<br>
		<label for="lead">Lead:</label><textarea id="lead" name="lead"><?=$row['lead'];?></textarea><br> 
		<label for="post">Post:</label><textarea id="post" name="body"><?=$row['body'];?></textarea><br>
		<a id="blogeditsubmit" href="#" onclick="blogeditform.submit()" class="btn btn-small">Submit</a>
	</form>
