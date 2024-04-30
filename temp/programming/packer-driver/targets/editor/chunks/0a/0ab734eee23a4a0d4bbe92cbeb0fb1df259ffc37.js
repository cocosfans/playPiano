System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Input, CCInteger, director, Constant, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, songlist;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "../framework/Constant", _context.meta, extras);
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
      Input = _cc.Input;
      CCInteger = _cc.CCInteger;
      director = _cc.director;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4412exACudBVJ9J+QxrduFb", "songlist", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Input', 'input', 'EventTouch', 'CCInteger', 'director']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("songlist", songlist = (_dec = ccclass('songlist'), _dec2 = property(CCInteger), _dec(_class = (_class2 = class songlist extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "songId", _descriptor, this);
        }

        start() {
          this.node.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        onTouchStart(event) {
          (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Level = this.getsongId();
          director.loadScene("chellenge");
          this.node.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        }

        setsongId(songId) {
          this.songId = songId;
        }

        getsongId() {
          return this.songId;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "songId", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0ab734eee23a4a0d4bbe92cbeb0fb1df259ffc37.js.map