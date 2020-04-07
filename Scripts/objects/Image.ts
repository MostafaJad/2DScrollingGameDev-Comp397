///<reference path="GameObjects.ts"/>
///<reference path="../config/game.ts"/>
module objects {
    export class Image extends GameObjects
    {

        constructor(
            imagePath:Object = config.Game.ASSETS.getResult("intro"),
            x:number = 0, y:number = 0, isCentered:boolean = true

        ) {
            super(imagePath, x,y, isCentered);
            this.Start();
        }

        protected _checkBounds(): void {
        }

        Start(): void {
        }

        Update(): void {
        }



        Reset(): void {
        }


    }
}
