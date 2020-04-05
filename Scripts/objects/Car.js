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
        Car.prototype._checkBounds = function () {
            if (this.position.x <= this.halfWidth) {
                this.position = new objects.Vector2(this.halfWidth, this.position.y);
            }
            if (this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth) {
                this.position = new objects.Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }
        };
        Car.prototype._move = function () {
            var newPositionX = util.Mathf.Lerp(this.position.x, this.stage.mouseX, 0.05);
            this.position = new objects.Vector2(newPositionX, this._verticalPosition);
        };
        Car.prototype.Start = function () {
            this.name = "car";
            this._verticalPosition = 430;
        };
        Car.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Car.prototype.Reset = function () {
        };
        return Car;
    }(objects.GameObjects));
    objects.Car = Car;
})(objects || (objects = {}));
//# sourceMappingURL=Car.js.map