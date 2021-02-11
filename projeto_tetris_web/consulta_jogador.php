<?php

    require "criacao_tabelas.php";

    $sname = "localhost";
    $uname = "root";
    $pwd = "";
    try {
        $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $usr = $_POST["username"];
        $pwd = $_POST["pwd"];

        $pwd_check = $conn->query('SELECT * FROM users WHERE pwd = '.'"'.$pwd.'"'.' AND username = '.'"'.$usr.'"');

        $counter = 0;
        while($row = $pwd_check->fetch(PDO::FETCH_ASSOC)) {
            $counter++;
        }

        if($counter == 1) {
            $newURL = "jogo.php";
            header('Location: '.$newURL);
        } else {
            $newURL = "login.html";
            header('Location: '.$newURL);
        }

        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    setcookie(
        "user",
        $usr
    );
?>