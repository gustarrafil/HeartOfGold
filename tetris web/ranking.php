<?php
    session_start();
    include "consulta_jogos.php";
?>

<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Inicial Tetris</title>

        <link rel="stylesheet" href="estilo.css">
    </head>
    <body>
        <div class="pagina" id="ranking">

            <header>
                <div>
                    <h1>Rolling Tetris</h1>
                </div>
            </header>

            <section class="meio">
                <div>
                    <div class="modal grande">
                        <div class="conteudo">
                            <div>
                                <h3 >Ranking Global</h3>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th><h4>Usuário</h4></th>
                                        <th><h4>Nível</h4></th>
                                        <th><h4>Pontuação</h4></th>
                                    </tr>
                                    <?php
                                        $sname = "localhost";
                                        $uname = "root";
                                        $pwd = "";
                                        try {
                                            $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
                                            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

                                                try {
                                                    $games_played = $conn->query("SELECT * FROM games ORDER BY score DESC");

                                                    $counter = 0;
                                                    while($row = $games_played->fetch(PDO::FETCH_ASSOC)) {
                                                        echo    "<tr>
                                                                    <td>"
                                                                        .$row["name_user"].
                                                                    "</td>
                                                                    <td>"
                                                                        .$row["score"].
                                                                    "</td>
                                                                </tr>";
                                                        $counter++;
                                                    }
                                                    if($counter == 0) {
                                                        echo "</table>Nenhum registro";
                                                    }
                                                    
                                                } catch(Exception $error) {
                                                    echo "Erro ao recuperar dados";
                                                }       
                                                
                                            
                                        } catch(PDOException $e) {
                                            echo "Connection failed: " . $e->getMessage();
                                        }
                                    ?>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="modal pequeno" id="final">
                        <div >
                            <div >
                                <a href="jogo.html">Jogar novamente</a>
                            </div>
                            <div >
                                <a href="login.html">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
                

                
            </section>
        </div>
    </body>
</html>



