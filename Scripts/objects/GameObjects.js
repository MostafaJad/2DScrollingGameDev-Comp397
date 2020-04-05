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
    var GameObjects = /** @class */ (function (_super) {
        __extends(GameObjects, _super);
        function GameObjects(first, second, third, fourth) {
            if (first === void 0) { first = config.Game.ASSETS.getResult("placeholder"); }
            if (second === void 0) { second = 0; }
            if (third === void 0) { third = 0; }
            if (fourth === void 0) { fourth = false; }
            var _this = _super.call(this, first) || this;
            // initialization
            _this._width = 0;
            _this._height = 0;
            _this._halfWidth = 0;
            _this._halfHeight = 0;
            _this._position = new objects.Vector2(0, 0, _this);
            _this._velocity = new objects.Vector2(0, 0);
            _this._isColliding = false;
            _this._isCentered = false;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            if (typeof third == "boolean") {
                _this.isCentered = third;
            }
            if (typeof third == "undefined") {
                _this.isCentered = false;
            }
            if (fourth) {
                _this.isCentered = fourth;
            }
            if ((typeof second == "number") && (typeof third == "number")) {
                _this.position = new objects.Vector2(second, third, _this);
            }
            if (second instanceof objects.Vector2) {
                _this.position = second;
            }
            return _this;
        }
        Object.defineProperty(GameObjects.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
                this._halfWidth = this._computeHalfWidth();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
                this._halfHeight = this._computeHalfHeight();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "halfWidth", {
            get: function () {
                return this._halfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "halfHeight", {
            get: function () {
                return this._halfHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (newPosition) {
                this._position = newPosition;
                this.x = newPosition.x;
                this.y = newPosition.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "velocity", {
            get: function () {
                return this._velocity;
            },
            set: function (newVelocity) {
                this._velocity = newVelocity;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "isColliding", {
            get: function () {
                return this._isColliding;
            },
            set: function (newState) {
                this._isColliding = newState;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GameObjects.prototype, "isCentered", {
            get: function () {
                return this._isCentered;
            },
            set: function (newState) {
                this._isCentered = newState;
                if (newState) {
                    this._centerGameObject();
                }
            },
            enumerable: true,
            configurable: true
        });
        // PRIVATE METHODS
        GameObjects.prototype._computeHalfWidth = function () {
            return this.width * 0.5;
        };
        GameObjects.prototype._computeHalfHeight = function () {
            return this.height * 0.5;
        };
        GameObjects.prototype._centerGameObject = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
        };
        return GameObjects;
    }(createjs.Bitmap));
    objects.GameObjects = GameObjects;
})(objects || (objects = {}));
//# sourceMappingURL=GameObjects.js.map