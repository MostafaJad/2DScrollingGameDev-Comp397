module objects
{
    export class Button extends GameObjects
    {

        constructor(imagePath:Object = config.Game.ASSETS.getResult("button")
        , x:number = 0, y:number=0, isCentered:boolean = false)
        {
            super(imagePath, x, y, isCentered);
            this.on("mouseover", this.MouseOver);
            this.on("mouseout", this.MouseOut);

            this.Start();
        }

        protected _checkBounds(): void {
        }

        MouseOver():void
        {
            this.alpha = 0.7;
        }

        MouseOut():void
        {
            this.alpha = 1.0;
        }
        Start(): void {
            this.name = "Button";
        }


        Update(): void {
        }

        Reset(): void {
        }





    }
}
