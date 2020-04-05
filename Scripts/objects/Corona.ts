module objects
{
    export class Corona extends GameObjects
    {
        private _verticalSpeed?:number;
        private _horizontalSpeed?:number;

        constructor() {
            super(config.Game.ASSETS.getResult("corona"), new Vector2(), true);
            this.Start();
        }
        protected _checkBounds(): void
        {
            if(this.position.y > config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }

        private _move(): void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        Start(): void
        {
            this.name = "corona";
            this.alpha = 0.5;
            this.Reset();
        }

        Update(): void
        {
            this._move();
            this._checkBounds();
        }

        Reset(): void {
            this._verticalSpeed = util.Mathf.RandomRange(5, 10);
            this._horizontalSpeed = util.Mathf.RandomRange(-2,2);
            this.velocity = new Vector2(this._horizontalSpeed, this._verticalSpeed);
            let randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            let randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new Vector2(randomX, randomY, this);
        }
    }
}
