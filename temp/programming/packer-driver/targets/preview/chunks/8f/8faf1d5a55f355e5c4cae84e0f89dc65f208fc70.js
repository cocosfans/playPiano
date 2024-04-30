System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, wordback;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f17etc8EdMqakq5lUbrDR7", "wordback", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Material', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wordback", wordback = (_dec = ccclass('wordback'), _dec(_class = class wordback extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8faf1d5a55f355e5c4cae84e0f89dc65f208fc70.js.map