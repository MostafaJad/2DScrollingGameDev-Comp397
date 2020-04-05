module objects
{
    export class Road extends GameObjects
    {
        private _verticalSpeed?:number;

        constructor() {
            super(config.Game.ASSETS.getResult("road"));
            this.Start();
        }





        protected _checkBounds(): void
        {
            if(this.y >= 0)
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
            this._verticalSpeed = 20;
            this.velocity = new Vector2(0,this._verticalSpeed);
            this.Reset();
        }

        Update(): void
        {
            this._move();
            this._checkBounds();
        }
        Reset(): void
        {
            this.position = new Vector2(0,-960);
        }



    }
}
