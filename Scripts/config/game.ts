module config
{
    export class Game
    {
        public static SCREEN_WIDTH:number = 640;
        public static SCREEN_HEIGHT:number = 700;
        public static SCENE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static FPS: number = 60; // 60 Frames per second
        public static CORONA_NUM: number = 3;
        public static LIVES:number = 5;
        public static SCORE:number = 0;
        public static BULLET_MANAGER: managers.Bullet;
        public static KEYBOARD_MANAGER: managers.Keyboard;
        public static HIGH_SCORE:number = 0;
        public static SCORE_BOARD: managers.ScoreBoard;
    }
}
