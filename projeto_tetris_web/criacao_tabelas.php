<?php
    $sname = "localhost";
    $uname = "root";
    $pwd = "";
    try {
        $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        try {
            $user_table = $conn->query('SELECT * FROM users');
        } catch(Exception $e) {
            $users_table = "CREATE TABLE users (
                                name_user VARCHAR(80) NOT NULL,
                                cpf VARCHAR(11) NOT NULL,
                                PRIMARY KEY (cpf),
                                telefone VARCHAR(11) NOT NULL,
                                nascimento CHAR(10) NOT NULL,
                                email VARCHAR(20) NOT NULL,
                                username VARCHAR(20) NOT NULL,
                                pwd VARCHAR(8) NOT NULL,
                                sexo CHAR NOT NULL)";
            $conn->exec($users_table);
        }

        try {
            $game_table = $conn->query('SELECT * FROM games');
        } catch(Exception $e) {
            $games_table = "CREATE TABLE games (
                                cod_game SMALLINT NOT NULL,
                                PRIMARY KEY (cod_game),
                                name_user VARCHAR(80) NOT NULL,
                                score INT NOT NULL,
                                level_reached INT NOT NULL,
                                eliminated INT NOT NULL,
                                game_time TIME NOT NULL)";
            $conn->exec($games_table);
        }
        
        
    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
?>