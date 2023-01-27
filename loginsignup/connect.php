<?php
	$name = $_POST['name'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	// Database connection
	$conn = new mysqli('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(name, email, password) values(?, ?, ?)");
		$stmt->bind_param("sss", $name, $email, $password);
		$execval = $stmt->execute();
		// echo $execval;
		// echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <style>
            body{
                background: #e0edee;
            }
            .container{
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            span{
                font-size: 40px;
                font-weight: 700;

            }
            img{
                width:200px;
            }
            a{
                text-decoration: none;
                border: 1px solid #000a0a;
                border-radius: 50px;
                background-color: rgb(252, 7, 7);
                padding: 5px;
                color: #fff;
            }
            a:hover{
                background-color: #fff;
                color: #fc0707;
                
            }
		.name{
		color:red;
		}
        </style>
        <body>
            <div class="container">
                <div>
                    <img src="for.png" alt="">
                </div>
                <div>
                    <div>
			<span class="name">
                        <?php
                        echo $email;
                        ?>
                    	</span>
                        <span class="text">    成功しました！👏</span>
                        <a href="index.html">LOGIN</a>
                    </div>

                </div>

            </div>
        </body>
    </head>

</html>