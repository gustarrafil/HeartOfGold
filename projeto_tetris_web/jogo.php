<?php
    session_start();
    
?>
<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
        <title>Inicial Tetris</title>

        <link rel="stylesheet" href="estilo.css">

        <script src="jogo.js"></script>
    </head>
    <body>
        <div class="pagina" id="jogo">

            <header>
                <div>
                    <h1>Rolling Tetris</h1>
                </div>
            </header>

            <section class="tres">
                    <div class="coluna">

                        <div>
                            <a href="cadastro.html">Editar cadastro</a>
                        </div>
                        
                            <div class="modal pequeno lateral" >
                                <div class="esquerda">
                                    <h4>Tamanho do Tabuleiro</h4>
                                </div>
                                <div class="esquerda">
                                    <select onchange="mudarTamanho()" id="opcoes_tamanho">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                    </select>
                                </div>
                            </div>
                            <div class="modal pequeno" id="atual">
                                <div>
                                    <h4>Seu Ranking</h4>
                                </div>
                                <div id="meu_ranking">
                                    <div>
                                        <table>
                                            <tr>
                                                <th>nome</th>
                                                <th>pontuacao</th>
                                                <th>nivel</th>
                                                <th>duracao</th>
                                            </tr>
                                            <?php
                                                $sname = "localhost";
                                                $uname = "root";
                                                $pwd = "";
                                                try {
                                                    $conn = new PDO("mysql:host=$sname;dbname=myDB", $uname, $pwd);
                                                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                                                    

                                                        try {
                                                            $games_user = $conn->query('SELECT * 
                                                                                        FROM games');

                                                            
                                                            $counter = 0;
                                                            while($row = $games_user->fetch(PDO::FETCH_ASSOC)) {
                                                                echo    "<tr>
                                                                            <td>"
                                                                                .$row["name_user"].split()[0].
                                                                            "</td>
                                                                            <td>"
                                                                                .$row["score"].
                                                                            "</td>
                                                                            <td>"
                                                                                .$row["level_reached"].
                                                                            "</td>
                                                                            <td>"
                                                                                .$row["game_time"].
                                                                            "</td>
                                                                        </tr>";
                                                                $counter++;
                                                            }
                                                            if($counter == 0) {
                                                                echo "</table>Nenhum jogo terminado";
                                                            }
                                                        } catch(Exception $error) {
                                                            echo "</table>Sem resposta do servidor";
                                                        }
                                                        
                                                } catch(PDOException $e) {
                                                    echo "Connection failed: " . $e->getMessage();
                                                }
                                            ?>
                                        </table>
                                        <?php
                                            if(!isset($_COOKIE["user"])) {
                                                echo "Cookie named 'user' is not set!";
                                            } else {
                                                echo "Value is: " . $_COOKIE["user"];
                                            }
                                        ?>
                                    </div>
                                </div>
                            </div>
                    </div>
    
                    <div class="coluna">
                        <div class="modal pequeno">
                            <div id="tabuleiro" >
                                <div class="linha espaco">
                                    <div class="coluna" id="dentro">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                        <div class="linhaAbaixo"></div>
                                    </div>


                                    <div class="coluna mini-dentro">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                                <div class="linha" id="controle_jogo">
                                    <div >
                                        <button id="start-button">Play/Pause</button>
                                    </div>
                                    <div >
                                        <button id="restart-button">Recomeçar</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    
                    <div class="coluna">
                        <div>
                            <div>
                                <a id="pausar" href="login.html">Logout</a>
                            </div>
                        </div>
                        <div class="modal pequeno lateral">
                            <div>
                                <h4>Nível</h4>
                            </div>
                            <div>
                                <h4 id="nivel">0</h4>
                            </div>
                        </div>
                        <div id="pontos" class="modal pequeno lateral">
                            <div>
                                <h4 >Pontuação</h4>
                            </div>
                            <div>
                                <h4 id="score">0</h4>
                            </div>
                        </div>
                        <div class="modal pequeno lateral" >
                            <div>
                                <h4 >Linhas eliminadas</h4>
                            </div>
                            <div>
                                <h4 id="linhas_eliminadas">0</h4>
                            </div>
                        </div>
                        <div class="modal pequeno lateral" >
                            <div>
                                <h4 >Tempo (s)</h4>
                            </div>
                            <div>
                                <h4><span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span></h4>
                            </div>
                        </div>
                        <div> 
                            <div>
                                <a href="ranking.php">Ver Ranking</a>
                            </div>
                        </div>
                    </div>

                

            </section>
        </div>

    </body>
</html>



