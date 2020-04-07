module scenes
{
    export class End extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _gameOverLabel: objects.Label;
        private _restartButton: objects.Button;
        private _road: objects.Road;

        private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        // Initializing and Instantiating
        public Start(): void
        {
            //instantiate a new Text object
            this._gameOverLabel = new objects.Label("Game Over", "80px", "Consolas", "#FF0000", 320, 180, true);
            // buttons
            this._restartButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);

            this._road = new objects.Road();

            this._scoreBoard  = new managers.ScoreBoard();
            this._scoreBoard.HighScore = config.Game.HIGH_SCORE;
            createjs.Sound.play("end");
            this.Main();
        }

        public Update(): void
        {
            this._road.Update();
        }

        public Main(): void
        {
            this.addChild(this._road);

            this.addChild(this._gameOverLabel);


            this.addChild(this._restartButton);

            this._restartButton.on("click", ()=>{
                config.Game.LIVES = 5;
                config.Game.SCORE = 0;

                config.Game.SCENE = scenes.State.PLAY;
            });

            this.addChild(this._scoreBoard.highScoreLabel);

        }

        public Clean(): void{
            this.removeAllChildren();
        }


    }
}
