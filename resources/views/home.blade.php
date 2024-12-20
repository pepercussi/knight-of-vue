<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>{{ str_replace("-", " ", env('APP_NAME')) }}</title>

        <!-- Bootstrap CSS -->
        <link href="{{ asset('css/bootstrap.min.css') }}" rel="stylesheet">
        <!-- Bootstrap Icons -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
        <style>
            #playground {
                background-image: url({{ asset('img/backgrounds/bg-forest.jpg') }});
                width: 640px;
                height: 300px;
            }
        </style>
    </head>
    <body>
        <h1 class="text-center">{{ str_replace("-", " ", env('APP_NAME')) }}</h1>
        <div id="app" class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Intro</h2>
                    <p>In the vast and ever-evolving lands of the Vue Kingdom, where the code flows like rivers of knowledge, a sinister threat has emerged. The evil frogs, born of chaotic bugs and corrupted snippets, have risen to devour the wisdom that powers our world. As the brave Knight of Vue, armed with your unwavering determination and the strength of clean code, it is your sacred duty to protect the kingdom. Face the onslaught, defeat the frogs, and ensure that the light of developer creativity shines on forever. The fate of the Vue Kingdom rests in your hands. Will you rise to the challenge?</p>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <h2>Controls</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><i class="bi bi-arrow-up-circle"></i> <b>Move Up:</b> Up arrow</li>
                        <li class="list-group-item"><i class="bi bi-arrow-down-circle"></i> <b>Move Down:</b> Down arrow</li>
                        <li class="list-group-item"><i class="bi bi-arrow-left-circle"></i> <b>Move Left:</b> Left arrow</li>
                        <li class="list-group-item"><i class="bi bi-arrow-right-circle"></i> <b>Move Right:</b> Right arrow</li>
                        <li class="list-group-item"><i class="bi bi-lightning"></i> <b>Attack:</b> Spacebar</li>
                    </ul>
                </div>
                <div class="col-6">
                    <h2>Objective</h2>
                    <p>Defeat the frogs and get the highest score. Each frog defeated will give you 100 points. If a frog reaches the left side of the playground, the game ends.</p>
                </div>
            </div>
            <br class="divider">
            <div class="row">
                <div class="col-12 rounded-4 border-success" id="playground" style="position: absolute">
                    <div id="game">
                        <img :style="{position: 'absolute', top: knight.posTop+'px', left: knight.posLeft+'px'}" :src="knight.imgSource" alt="knight" >
                        <img :style="{position: 'absolute', top: frog.posTop+'px', left: frog.posLeft+'px'}" :src="frog.imgSource" alt="frog" >

                        <div>
                            <span class="badge text-bg-light">Score: @{{ score }}</span>
                        </div>
                        
                        <!-- Modal Game Over -->
                        <div class="modal fade" id="gameOverModal" tabindex="-1" aria-labelledby="gameOverModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title text-center" id="gameOverModalLabel">Game Over!</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <p class="text-center">Press Restart to play again.</p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" @click="restartGame" data-bs-dismiss="modal">Restart</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <!-- Scripts -->
        <script src="{{ asset('js/bootstrap.bundle.min.js') }}"></script>
        <script type="importmap">
            {
              "imports": {
                "vue": "./js/vue.esm-browser.js"
              }
            }
        </script>
        <script type="module">
            import { createApp } from 'vue';
            import Game from './js/game.js';

            createApp(Game).mount('#game');
        </script>
    </body>
</html>
