System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TextAsset, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ItemTemplate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      TextAsset = _cc.TextAsset;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fdf9Nu9n5NIrKBzyDDRPUS", "ItemTemplate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'TextAsset', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemTemplate", ItemTemplate = (_dec = ccclass('ItemTemplate'), _dec2 = property(TextAsset), _dec(_class = (_class2 = class ItemTemplate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "itemGiftText", _descriptor, this);
        }

        start() {
          var data = this.itemGiftText.text;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemGiftText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2814afd96f2dbbad5bf4fc9183cb4abd66439ca.js.map