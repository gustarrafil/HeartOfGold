<?php
    require "criacao_tabelas.php";

    $sname = "localhost";
    $uname = "root";
    $pwd = "";
    try {
        $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $name_user      = $_POST['name_user'];
        $cpf            = $_POST['cpf'];
        $telefone       = $_POST['telefone'];
        $nascimento     = $_POST['nascimento'];
        $email          = $_POST['email'];
        $username       = $_POST['username'];
        $pwd            = $_POST['pwd'];
        $sexo           = $_POST['sexo'];

        $check_cpf = 'SELECT * FROM users WHERE cpf = '.'"'.$cpf.'"';
        $cpf_quantity = $conn->query($check_cpf);
        
        if($check_cpf > 0) {
            header("Refresh:0");
        } else {
            $players = $conn->query('SELECT * FROM users WHERE name_user = "'.$name_user.'" OR ');
            if($players > 0) {

                try {
                    $new_player = 'INSERT INTO users (name_user, cpf, telefone, nascimento, email, username, pwd, sexo) VALUES ("'.$name_user.'","'.$cpf.'","'.$telefone.'","'.$nascimento.'","'.$email.'","'.$username.'","'.$pwd.'","'.$sexo.'")';

                    $conn->exec($new_player);

                    $newURL = "login.html";
                    header('Location: '.$newURL);
                } catch(Exception $error) {
                    echo "Sign up failed: " . $error->getMessage();
                }
                
            } else {
                header("Refresh:0");
            }
        }

    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>