System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, AudioSource, Input, AudioClip, Vec3, GameManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, key;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./framework/GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      AudioSource = _cc.AudioSource;
      Input = _cc.Input;
      AudioClip = _cc.AudioClip;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a41a9xwOMBLl4eBxuD8WGDT", "key", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'AudioSource', 'Input', 'AudioClip', 'Vec3', 'input', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("key", key = (_dec = ccclass('key'), _dec2 = property(AudioClip), _dec3 = property(AudioSource), _dec4 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class key extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_audioClip", _descriptor, this);

          _initializerDefineProperty(this, "_audioSource", _descriptor2, this);

          _initializerDefineProperty(this, "_gamemanager", _descriptor3, this);

          this._curPos = new Vec3();
          this._startMove = false;
          this._curJumpTime = 0;
        }

        //private _audioSource:AudioSource = null;
        start() {
          this._audioSource = this.getComponent(AudioSource);
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart(event) {
          this._gamemanager = this.getComponent(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
            error: Error()
          }), GameManager) : GameManager);

          this._gamemanager.getSong(1, 2);

          this._audioSource.play();

          this._curPos = this.node.position;
          this.node.setPosition(this._curPos.x, this._curPos.y + 20, this._curPos.z); // 将位移设置给角色

          this._startMove = true;
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        parseCSV(csvString) {
          let lines = csvString.split('\n');
          let result = [];
          lines.forEach(line => {
            let items = line.split('\t');
            result.push(items);
          });
          return result;
        }

        update(deltaTime) {
          if (this._startMove) {
            this._curJumpTime += deltaTime; // 累计总的跳跃时间

            if (this._curJumpTime > 0.2) {
              // 当跳跃时间是否结束
              // end 
              this.node.setPosition(this._curPos.x, this._curPos.y - 20, this._curPos.z); // 强制位置到终点

              this._startMove = false; // 清理跳跃标记

              this._curJumpTime = 0;
              this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_audioClip", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_gamemanager", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eca9803f1413233bd9eafc21c824daf774111e12.js.map