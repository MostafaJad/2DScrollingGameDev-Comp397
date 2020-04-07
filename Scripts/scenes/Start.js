"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="../objects/Image.ts"/>
var scenes;
(function (scenes) {
    var Start = /** @class */ (function (_super) {
        __extends(Start, _super);
        function Start() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Start.prototype.Start = function () {
            this._welcomeLabel = new objects.Label("COVID-19", "80px", "Consolas", "#FF0000", 320, 180, true);
            this._welcomeLabel2 = new objects.Label("Find The Cure", "50px", "Consolas", "#FF0000", 320, 270, true);
            this._info = new objects.Label("User The Arrow To Control the Car And Space To Shot", "25px", "Consolas", "#FF0000", 320, 350, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 430, true);
            this._pic = new objects.Button(config.Game.ASSETS.getResult("logo"), 320, 600, true);
            this._road = new objects.Road();
            createjs.Sound.play("welcome");
            this.Main();
        };
        Start.prototype.Update = function () {
            this._road.Update();
        };
        Start.prototype.Main = function () {
            this.addChild(this._road);
            this.addChild(this._welcomeLabel);
            this.addChild(this._welcomeLabel2);
            this.addChild(this._pic);
            this.addChild(this._info);
            this.addChild(this._startButton);
            this._startButton.on("click", function () {
                config.Game.SCENE = scenes.State.PLAY;
            });
        };
        Start.prototype.Clean = function () {
            this.removeAllChildren();
        };
        return Start;
    }(objects.Scene));
    scenes.Start = Start;
})(scenes || (scenes = {}));
//# sourceMappingURL=Start.js.map