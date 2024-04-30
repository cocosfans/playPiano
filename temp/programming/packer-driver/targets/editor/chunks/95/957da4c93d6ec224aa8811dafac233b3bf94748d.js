System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, TextAsset, Label, Prefab, Color, instantiate, SpriteFrame, Sprite, AudioSource, Constant, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfConstant(extras) {
    _reporterNs.report("Constant", "./Constant", _context.meta, extras);
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
      TextAsset = _cc.TextAsset;
      Label = _cc.Label;
      Prefab = _cc.Prefab;
      Color = _cc.Color;
      instantiate = _cc.instantiate;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Constant = _unresolved_2.Constant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b59fagtaNtEiaEVrGu4wda9", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'TextAsset', 'Node', 'Label', 'Prefab', 'Color', 'instantiate', 'SpriteFrame', 'Sprite', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property(TextAsset), _dec3 = property(TextAsset), _dec4 = property([SpriteFrame]), _dec5 = property([SpriteFrame]), _dec6 = property(Prefab), _dec7 = property(AudioSource), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "WordText", _descriptor, this);

          _initializerDefineProperty(this, "NoteText", _descriptor2, this);

          _initializerDefineProperty(this, "spriteFrame", _descriptor3, this);

          _initializerDefineProperty(this, "backGround", _descriptor4, this);

          _initializerDefineProperty(this, "wordPrefab", _descriptor5, this);

          this.audioClip2 = null;

          _initializerDefineProperty(this, "audioSource", _descriptor6, this);

          this.level = [[0, 64], [4, 269], [18, 212], [29, 154], [37, 161]];
          this.text = void 0;
          this.wordInt = 50;
          this.Songlines = 0;
          this.lineTterator = 0;
          this.errorCount = 0;
          this._nodeType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BlockType.NOTE;
          //子节点类型,Constant.BlockType.NOTE:音符，Constant.BlockType.WORD:汉字；
          this.k = 0;
        }

        //每一行的计数器
        start() {
          this.Songlines = Math.ceil(this.level[(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Level][1] / 20);
          this.init();
        }

        init() {
          if (this.wordPrefab == null) return;

          for (let i = 0; i < 20; i++) {
            let block = instantiate(this.wordPrefab);
            this._nodeType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BlockType.WORD;
            let label = block.children[0].getChildByName('word').getComponent(Label);
            label.color = new Color(0, 0, 0, 255);
            label.string = this.getSong(this.level[(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Level][0] + this.lineTterator, i);
            this._nodeType = (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BlockType.NOTE;
            let j = 0;
            j = parseInt(this.getSong(this.level[(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Level][0] + this.lineTterator, i));
            j--;
            block.children[0].getChildByName('note').getComponent(Sprite).spriteFrame = this.spriteFrame[j]; //block.addChild(label);

            block.name = 'wordback' + (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).wordOrder;
            this.node.addChild(block);
            block.setPosition(-600 + i * this.wordInt, 0, 20);
          }

          console.log(this.node);
        }

        parseCSV(csvString) {
          let lines = csvString.split('\n');
          let result = [];
          let items = [];
          lines.forEach(line => {
            if (this._nodeType == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BlockType.NOTE) items = line.split(',');else items = line.split('\t');
            result.push(items);
          });
          return result;
        }

        getSong(line, column) {
          if (this._nodeType == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).BlockType.NOTE) this.text = this.NoteText.text;else this.text = this.WordText.text; // console.log(this.text);

          let dataArray = this.parseCSV(this.text);
          let cell;
          cell = dataArray[line][column];
          return cell;
        }

        addHits() {
          (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Hits++;
          console.log((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Hits);
        }

        removeAllChildren(node) {
          // 使用while循环确保删除所有子节点
          while (node.children.length > 0) {
            let child = node.children[0]; // 将子节点从父节点中移除

            node.removeChild(child); // 如果需要，还可以手动删除子节点

            child.destroy();
          }
        }

        update(deltaTime) {
          if ((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
            error: Error()
          }), Constant) : Constant).Hited) {
            console.log(this.node.getChildByName('wordback' + (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Hits));
            console.info("aa");
            this._nodeType == (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).BlockType.NOTE;
            if ((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).ClickId == parseInt(this.getSong(this.level[(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Level][0] + this.lineTterator, this.k))) this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame = this.backGround[0];else {
              this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame = this.backGround[1];
              this.errorCount++;
              this.audioSource = this.getComponent(AudioSource);
              this.audioSource.play();
              console.log(this.errorCount);
            }
            (_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Hited = 0;
            this.k++;

            if (this.k >= 20) {
              this.lineTterator++;
              this.removeAllChildren(this.node);
              this.init();
              this.k = 0;
            }

            this.addHits();
            if ((_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Hits >= this.level[(_crd && Constant === void 0 ? (_reportPossibleCrUseOfConstant({
              error: Error()
            }), Constant) : Constant).Level][1]) this.removeAllChildren(this.node);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "WordText", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "NoteText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "backGround", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "wordPrefab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec7], {
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
//# sourceMappingURL=957da4c93d6ec224aa8811dafac233b3bf94748d.js.map