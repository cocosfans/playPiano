System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, TextAsset, SpriteFrame, Constant, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, note;

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
      Sprite = _cc.Sprite;
      TextAsset = _cc.TextAsset;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b3bdaqTNtKcKCIFJI2x7h7", "note", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'TextAsset', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("note", note = (_dec = ccclass('note'), _dec2 = property([SpriteFrame]), _dec3 = property(TextAsset), _dec(_class = (_class2 = class note extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "spriteframe", _descriptor, this);

          _initializerDefineProperty(this, "noteText", _descriptor2, this);

          this.text = void 0;
        }

        start() {
          let j = 0;
          j = parseInt(this.getSong(4, (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).noteOrder++));
          j--;
          this.node.getComponent(Sprite).spriteFrame = this.spriteframe[j];
        }

        parseCSV(csvString) {
          let lines = csvString.split('\n');
          let result = [];
          lines.forEach(line => {
            let items = line.split(',');
            result.push(items);
          });
          return result;
        }

        getSong(line, column) {
          this.text = this.noteText.text;
          let dataArray = this.parseCSV(this.text);
          let cell;
          cell = dataArray[line][column]; //console.log(dataArray[0][1]);

          console.log('e');
          return cell;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spriteframe", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "noteText", [_dec3], {
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
//# sourceMappingURL=efdfe2ac5de67b5b74f9af5a35eb0dad3f60ec38.js.map