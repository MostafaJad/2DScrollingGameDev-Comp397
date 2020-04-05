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
    var Vaccine = /** @class */ (function (_super) {
        __extends(Vaccine, _super);
        function Vaccine() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("vaccine"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        Vaccine.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Vaccine.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        Vaccine.prototype.Start = function () {
            this.name = "vaccine";
            this._verticalSpeed = 5;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        };
        Vaccine.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Vaccine.prototype.Reset = function () {
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomX, -this.height, this);
        };
        return Vaccine;
    }(objects.GameObjects));
    objects.Vaccine = Vaccine;
})(objects || (objects = {}));
//# sourceMappingURL=Vaccine.js.map