"use strict";
//IIFE
var Game = (function () {
    var canvas = document.getElementsByTagName('canvas')[0];
    var stage;
    var currentSceneState;
    var currentScene;
    var assets;
    var assetManifest = [
        { id: "button", src: "./Assets/images/button.png" },
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "restartButton", src: "./Assets/images/restartButton.png" },
        { id: "attack", src: "./Assets/images/attack1.png" },
        { id: "car", src: "./Assets/images/car.png" },
        { id: "road", src: "./Assets/images/road.png" },
        { id: "human", src: "./Assets/images/human.png" },
        { id: "corona", src: "./Assets/images/corona.png" },
        { id: "vaccine", src: "./Assets/images/vaccine.png" },
        { id: "carEngine", src: "./Assets/sounds/carEngine.ogg" }
    ];
    function Preload() {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.loadManifest(assetManifest);
        assets.installPlugin(createjs.Sound);
        assets.on("complete", Start);
    }
    function Start() {
        console.log("%c Game Started!", "color: blue; font-size: 20px; font-weight: bold;");
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = config.Game.FPS;
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);
        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE = scenes.State.START;
    }
    function Update() {
        if (currentSceneState != config.Game.SCENE) {
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Scene Switched...", "color: green; font-size: 16px;");
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
            // case scenes.State.END:
            //     console.log("switch to End Scene");
            //     currentScene = new scenes.End();
            //     break;
        }
        currentSceneState = config.Game.SCENE;
        stage.addChild(currentScene);
    }
    window.addEventListener('load', Preload);
})();
//# sourceMappingURL=Game.js.map