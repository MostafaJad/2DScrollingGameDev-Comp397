module objects
{
    export class Vaccine extends GameObjects
    {

        private _verticalSpeed?:number;


        constructor()
        {

            super(config.Game.ASSETS.getResult("vaccine"), new Vector2(),true)
            this.Start();
        }
        protected _checkBounds(): void
        {
            if(this.position.y > config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }

        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        Start(): void
        {
            this.name = "vaccine";
            this._verticalSpeed = 5;
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }

        Update(): void {
            this._move();
            this._checkBounds();
        }
        Reset(): void
        {
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new Vector2(randomX, -this.height, this);
        }

    }
}
