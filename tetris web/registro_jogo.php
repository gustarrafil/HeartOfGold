<?php
    $sname = "localhost";
    $uname = "root";
    $pwd = "";
    try {
        $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


        $game_finished =    "INSERT INTO games (name_user, score, level_reached, eliminated, game_time)
                            VALUES ()";
        $conn->exec($game_finished);

    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>