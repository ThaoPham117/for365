<?php
    $email = $_POST['email'];
    $password = $_POST['password'];

    $con = new mysqli("localhost","root","","test");
    if($con->connect_error){
        die("Failed to connect :" .$con->connect_error);
    } else {
        $stmt = $con->prepare("select * from registration where email = ?");
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt_result = $stmt->get_result();
        if($stmt_result->num_rows > 0){
            $data = $stmt_result->fetch_assoc();
            if($data['password'] === $password){
                // echo "<h1>login Successfull</h1>";
            }
        } else {
            echo "<h1>ERROR</h1>";
        }
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
        </style>
        <body>
            <div class="container">
                <div>
                    <img src="for.png" alt="">
                </div>
                <div>
                    <span>繋がりました🎉</span>
                    <a href="index.html">Home</a>
                </div>

            </div>
        </body>
    </head>

</html>