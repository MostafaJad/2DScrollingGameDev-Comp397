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
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("attack"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        Bullet.prototype._checkBounds = function () {
            if (this.position.y <= -this.height) {
                this.Reset();
            }
            if (this.position.y >= config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Bullet.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        Bullet.prototype.Start = function () {
            this.name = "attack";
            this._verticalSpeed = 200; // 5 px per frame
            this.velocity = new objects.Vector2(0, -this._verticalSpeed);
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            if (this.isActive) {
                this._move();
                this._checkBounds();
            }
        };
        Bullet.prototype.Reset = function () {
            this.position = new objects.Vector2(-1000, -1000);
            this.isActive = false;
        };
        return Bullet;
    }(objects.GameObjects));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map