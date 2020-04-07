//IIFE

let Game = (function() {

    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;

    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;
    let assets: createjs.LoadQueue;

    let assetManifest =
        [
            {id: "button", src: "./Assets/images/button.png"},
            {id: "placeholder", src: "./Assets/images/placeholder.png"},
            {id: "startButton", src: "./Assets/images/startButton.png"},
            {id: "restartButton", src: "./Assets/images/restartButton.png"},
            {id: "attack", src: "./Assets/images/attack1.png"},
            {id: "car", src: "./Assets/images/car.png"},
            {id: "road", src: "./Assets/images/road.gif"},
            {id: "human", src: "./Assets/images/human.png"},
            {id: "corona", src: "./Assets/images/corona.png"},
            {id: "vaccine", src: "./Assets/images/vaccine.png"},
            {id:"carEngine", src:"./Assets/sounds/carEngine.wav"},
            {id:"engine", src:"./Assets/sounds/engine.wav"},
            {id: "background", src:"./Assets/images/background.png"},
            {id: "background", src:"./Assets/images/intro.jpg"},
            {id:"heartBeat", src:"./Assets/sounds/heartBeat.wav"},
            {id:"takeCare", src:"./Assets/sounds/takeCare.wav"},







        ];

    function Preload(): void {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetManifest);

        assets.on("complete", Start);

    }

    function Start(): void {
        console.log(`%c Game Started!`, "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }


    function Update(): void {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }

        currentScene.Update();

        stage.update();

    }

    function Main(): void {
        console.log(`%c Scene Switched...`, "color: green; font-size: 16px;");

        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.Clean();
            stage.removeAllChildren();
        }

        switch (config.Game.SCENE) {
            case scenes.State.START:
                console.log("switch to Start Scene");
                currentScene = new scenes.Start();
                break;
            case scenes.State.PLAY:
                console.log("switch to Play Scene");
                currentScene = new scenes.Play();
                break;
            case scenes.State.END:
                console.log("switch to End Scene");
                currentScene = new scenes.End();
                break;


        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);

    }

    window.addEventListener('load', Preload);
})();
