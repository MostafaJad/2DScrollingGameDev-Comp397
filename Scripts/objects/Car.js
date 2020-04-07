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
var objects;
(function (objects) {
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("car"), 0, 0, true) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Car.prototype, "engineStart", {
            get: function () {
                return this._engineStart;
            },
            enumerable: true,
            configurable: true
        });
        Car.prototype._checkBounds = function () {
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Car.prototype._move = function () {
            // let newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            if ((config.Game.KEYBOARD_MANAGER.MoveLeft) || (config.Game.KEYBOARD_MANAGER.MoveRight)) {
                var newPositionX = (config.Game.KEYBOARD_MANAGER.MoveRight) ?
                    this.position.x + this._horizontalSpeed : this.position.x - this._horizontalSpeed;
                // TODO: make movement smoother with a velocity function
                this.position = new objects.Vector2(newPositionX, this._verticalPosition);
            }
            this._bulletFire = new objects.Vector2(this.position.x, this.position.y - this.halfHeight);
        };
        Car.prototype.Start = function () {
            this.name = "car";
            this._verticalPosition = 630;
            this._engineStart = createjs.Sound.play("engine");
            this._engineStart.volume = 0.25;
            this._horizontalSpeed = 5;
            this._engineStart.loop = -1;
            this.position = new objects.Vector2(config.Game.SCREEN_WIDTH * 0.5, this._verticalPosition);
        };
        Car.prototype.Update = function () {
            this._move();
            this._checkBounds();
            if (createjs.Ticker.getTicks() % 10 == 0) {
                if (config.Game.KEYBOARD_MANAGER.Fire) {
                    this.Attack();
                }
            }
        };
        Car.prototype.Reset = function () {
        };
        Car.prototype.Attack = function () {
            var fire = config.Game.BULLET_MANAGER.GetBullet();
            fire.position = this._bulletFire;
        };
        return Car;
    }(objects.GameObjects));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=Car.js.map