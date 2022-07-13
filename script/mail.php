<?php
    if(isset($_POST['banye'])){//LOGIN
        $errMsg = "";


        if (isset($_POST['name']) && $_POST['name'] != "") {
            $name = $_POST['name'];
        }
        else {
            $errMsg .= '<li class="collection-item">Please all name fields re required.</li>';
        }

        if (isset($_POST['email']) && $_POST['email'] != "") {
            $email = $_POST['email'];
        }
        else {
            $errMsg .= '<li class="collection-item">Please Email field is required</li>';
        }

        if (isset($_POST['textarea1']) && $_POST['textarea1'] != "") {
            $textarea1 = $_POST['textarea1'];
        }
        else {
            $errMsg .= '<li class="collection-item">Please textarea1 field is required</li>';
        }

        if($errMsg == ""){
            $myMail = "ezehigc@gmail.com";
            $date = date("Y-m-d h:i:sa");
            $message = "Hi IG. Chiemelie,\n";
            $message .= "....$textarea1.\n\n";
            $message .= "Date-time: $date";

            mail($myMail, 'Message From Portfolio', $message, 'From:' .$email);
            echo 200;
            
        }else{
            echo 501;
        }
    }else {
        echo 401;
    }
?>