///<reference path="../objects/Image.ts"/>
module scenes
{
    export class Start extends objects.Scene
    {

        private _welcomeLabel: objects.Label;
        private _welcomeLabel2: objects.Label;
        private _pic: objects.Image;

        private  _startButton: objects.Button;
        private  _road: objects.Road;

        constructor() {
            super();

            this.Start()
        }

        Start(): void
        {
            this._welcomeLabel = new objects.Label("COVID-19", "80px", "Consolas", "#FF0000", 320, 180, true);
            this._welcomeLabel2 = new objects.Label("Find The Cure", "50px", "Consolas", "#FF0000", 320, 270, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320,430, true);

            this._road = new objects.Road();
            this.Main();
        }


        Update(): void
        {
            this._road.Update();
        }
        Main(): void
        {
            this.addChild(this._road);
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabel2);
            this.addChild(this._pic);

            this.addChild(this._startButton);

            this._startButton.on("click", ()=>{
                config.Game.SCENE = scenes.State.PLAY;
            });
        }
        Clean(): void
        {
            this.removeAllChildren();
        }





    }
}
