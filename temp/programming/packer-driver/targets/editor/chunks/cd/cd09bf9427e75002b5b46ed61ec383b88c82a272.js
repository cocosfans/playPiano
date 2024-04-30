System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, Label, Input, director, Constant, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, bglist;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Input = _cc.Input;
      director = _cc.director;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0fe6dwcVU5IYrKb5Mg8FuDX", "bglist", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Label', 'Color', 'CCInteger', 'Input', 'director', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bglist", bglist = (_dec = ccclass('bglist'), _dec2 = property(Prefab), _dec(_class = (_class2 = class bglist extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "songPrefab", _descriptor, this);

          this.songl = ["两只老虎", "北京欢迎你", "你的样子", "大约在冬季", "爱江山更爱美人", "独角戏"];
        }

        start() {
          for (let i = 0; i < 6; i++) {
            let block = instantiate(this.songPrefab);
            block.name = i.toString();
            block.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
            let label = block.getComponent(Label);
            label.string = this.songl[i];
            this.node.addChild(block);
            block.setPosition(0, 200 - 60 * i, 0);
          }
        }

        onTouchStart(e) {
          console.log("the level is " + e.target.name);
          (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Level = parseInt(e.target.name);
          director.loadScene("chellenge");
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "songPrefab", [_dec2], {
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
//# sourceMappingURL=cd09bf9427e75002b5b46ed61ec383b88c82a272.js.map