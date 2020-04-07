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
var scenes;
(function (scenes) {
    var Play = /** @class */ (function (_super) {
        __extends(Play, _super);
        // private _scoreBoard: managers.ScoreBoard;
        // PUBLIC PROPERTIES
        // CONSTRUCTOR
        function Play() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // PRIVATE METHODS
        // PUBLIC METHODS
        //initialize and instatiate
        Play.prototype.Start = function () {
            this._road = new objects.Road();
            this._car = new objects.Car();
            createjs.Sound.play("carEngine");
            this._vaccine = new objects.Vaccine();
            this._coronaNumber = config.Game.CORONA_NUM;
            this._corona = new Array();
            // create an array of cloud objects
            for (var index = 0; index < this._coronaNumber; index++) {
                this._corona[index] = new objects.Corona();
            }
            this._scoreBoard = new managers.ScoreBoard();
            config.Game.SCORE_BOARD = this._scoreBoard;
            this._bulletManager = new managers.Bullet();
            config.Game.BULLET_MANAGER = this._bulletManager;
            this._keyboardManager = new managers.Keyboard();
            config.Game.KEYBOARD_MANAGER = this._keyboardManager;
            this.Main();
        };
        Play.prototype.Update = function () {
            var _this = this;
            this._road.Update();
            this._vaccine.Update();
            this._car.Update();
            this._bulletManager.Update();
            managers.Collision.squaredRadiusCheck(this._car, this._vaccine);
            this._corona.forEach(function (corona) {
                corona.Update();
                managers.Collision.squaredRadiusCheck(_this._car, corona);
            });
        };
        Play.prototype.Main = function () {
            var _this = this;
            this.addChild(this._road);
            this.addChild(this._vaccine);
            //
            this.addChild(this._car);
            this._bulletManager.AddBulletsToScene(this);
            this._corona.forEach(function (corona) {
                _this.addChild(corona);
            });
            this.addChild(this._scoreBoard.LivesLabel);
            this.addChild(this._scoreBoard.ScoreLabel);
        };
        Play.prototype.Clean = function () {
            this._car.engineStart.stop();
            this.removeAllChildren();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=Play.js.map