module objects
{
    export class Bullet extends objects.GameObjects
    {

        private _verticalSpeed?:number;

        constructor()
        {
            super(config.Game.ASSETS.getResult("attack"), new Vector2(), true);
            this.Start();
        }


        protected _checkBounds(): void
        {

            if(this.position.y <= -this.height)
            {
                this.Reset();
            }


            if(this.position.y >= config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }

        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }
        public Start(): void
        {
            this.name = "attack";
            this._verticalSpeed = 5; // 5 px per frame
            this.velocity = new Vector2(0 , -this._verticalSpeed);
            this.Reset();
        }

        public Update(): void
        {
            if(this.isActive)
            {
                this._move();
                this._checkBounds();
            }
        }

        public Reset(): void
        {
            this.position = new objects.Vector2(-1000, -1000);
            this.isActive = false;
        }
    }
}
