module scenes
{
    export class Play extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _road?: objects.Road;
        private _car?: objects.Car;
        private _vaccine?: objects.Vaccine;

        private _coronaNumber:number;
        private _corona?: objects.Corona[];
        private _scoreBoard: managers.ScoreBoard;

        private _bulletManager: managers.Bullet;
        private _keyboardManager: managers.Keyboard;

        // private _scoreBoard: managers.ScoreBoard;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();

            this.Start();
        }

        // PRIVATE METHODS

        // PUBLIC METHODS

        //initialize and instatiate
        public Start(): void
        {

            this._road = new objects.Road();
           this._car = new objects.Car();
           createjs.Sound.play("carEngine");
            this._vaccine = new objects.Vaccine();

            this._coronaNumber = config.Game.CORONA_NUM;
            this._corona = new Array<objects.Corona>();

            // create an array of cloud objects
            for (let index = 0; index < this._coronaNumber; index++)
            {
                this._corona[index] = new objects.Corona();

            }

            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;

            this._bulletManager = new managers.Bullet();
            config.Game.BULLET_MANAGER = this._bulletManager;

            this._keyboardManager = new managers.Keyboard();
            config.Game.KEYBOARD_MANAGER = this._keyboardManager;

            this.Main();
        }

        public Update(): void
        {
            this._road.Update();

            this._vaccine.Update();
            this._car.Update();
            this._bulletManager.Update();




            managers.Collision.squaredRadiusCheck(this._car, this._vaccine);

            this._corona.forEach(corona => {
                corona.Update();
                managers.Collision.squaredRadiusCheck(this._car, corona);
            });

        }

        public Main(): void
        {
            this.addChild(this._road);

            this.addChild(this._vaccine);
            //
            this.addChild(this._car);
            this._bulletManager.AddBulletsToScene(this);
            this._corona.forEach(corona => {
                this.addChild(corona);
            });

            this.addChild(this._scoreBoard.LivesLabel);

            this.addChild(this._scoreBoard.ScoreLabel);
        }

        public Clean():void
        {
            this._car.engineStart.stop();
            this.removeAllChildren();
        }


    }
}
