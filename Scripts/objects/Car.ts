module objects
{
    export class Car extends GameObjects
    {

        private _verticalPosition:number;


        constructor() {
            super(config.Game.ASSETS.getResult("car"),0,0,true);
            this.Start();
        }

        protected _checkBounds(): void {

            if(this.position.x <= this.halfWidth)
            {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth)
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        }

        private _move():void
        {
            let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new Vector2(newPositionX, this._verticalPosition);
        }

        Start(): void {
            this.name = "car";
            this._verticalPosition = 430;

        }

        Update(): void {
            this._move();
            this._checkBounds();
        }


        Reset(): void {
        }



    }
}
