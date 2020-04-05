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
    var Corona = /** @class */ (function (_super) {
        __extends(Corona, _super);
        function Corona() {
            var _this = _super.call(this, config.Game.ASSETS.getResult("corona"), new objects.Vector2(), true) || this;
            _this.Start();
            return _this;
        }
        Corona.prototype._checkBounds = function () {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        };
        Corona.prototype._move = function () {
            this.position = objects.Vector2.add(this.position, this.velocity);
        };
        Corona.prototype.Start = function () {
            this.name = "corona";
            this.alpha = 0.5;
            this.Reset();
        };
        Corona.prototype.Update = function () {
            this._move();
            this._checkBounds();
        };
        Corona.prototype.Reset = function () {
            this._verticalSpeed = util.Mathf.RandomRange(5, 10);
            this._horizontalSpeed = util.Mathf.RandomRange(-2, 2);
            this.velocity = new objects.Vector2(this._horizontalSpeed, this._verticalSpeed);
            var randomX = util.Mathf.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            var randomY = util.Mathf.RandomRange(-this.height * 2, -this.height);
            this.position = new objects.Vector2(randomX, randomY, this);
        };
        return Corona;
    }(objects.GameObjects));
    objects.Corona = Corona;
})(objects || (objects = {}));
//# sourceMappingURL=Corona.js.map