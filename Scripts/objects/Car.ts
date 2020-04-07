module objects
{
    export class Car extends GameObjects
    {

        private _verticalPosition:number;
        private _engineStart : createjs.AbstractSoundInstance;
        private _horizontalSpeed: number;
        private _bulletFire : objects.Vector2;



        public get engineStart() : createjs.AbstractSoundInstance
        {
            return this._engineStart;
        }




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
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            if((config.Game.KEYBOARD_MANAGER.MoveLeft) || (config.Game.KEYBOARD_MANAGER.MoveRight))
            {
                let newPositionX = (config.Game.KEYBOARD_MANAGER.MoveRight) ?
                this.position.x + this._horizontalSpeed : this.position.x - this._horizontalSpeed;

                // TODO: make movement smoother with a velocity function

                this.position = new Vector2(newPositionX, this._verticalPosition);
            }

            this._bulletFire = new Vector2(this.position.x, this.position.y - this.halfHeight);


        }

        Start(): void {
            this.name = "car";
            this._verticalPosition = 630;
            this._engineStart = createjs.Sound.play("engine");
            this._engineStart.volume = 0.25;
            this._horizontalSpeed = 5;
            this._engineStart.loop = -1;
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH * 0.5, this._verticalPosition);


        }

        Update(): void {
            this._move();
            this._checkBounds();


            if(createjs.Ticker.getTicks() % 10 ==0)
            {
                if(config.Game.KEYBOARD_MANAGER.Fire)
                {
                    this.Attack();
                }
            }
        }


        Reset(): void {
        }


        private Attack(): void {

            let fire = config.Game.BULLET_MANAGER.GetBullet();
            fire.position = this._bulletFire;

        }
    }
}
