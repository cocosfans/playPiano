import { _decorator, Button, Component, director, Label, SpriteFrame, Sprite, Node, resources } from 'cc';
import { Constant } from './Constant';
const { ccclass, property } = _decorator;

@ccclass('ResultManager')
export class ResultManager extends Component {
    @property(Label)
    public total: Label = null;
    @property(Label)
    public error: Label = null;
    @property(Label)
    public rates: Label = null;
    @property(Label)
    public exceed: Label = null;
    @property(Label)
    public levels: Label = null;
    @property([SpriteFrame])
    public spriteFrame: SpriteFrame[] = [];
    @property(Button)
    public bt1: Button = null;
    @property(Button)
    public bt2: Button = null;
    private levelcol = ['小白', '菜鸟', '入门', '业余', '专业', '大师', '超级大师', '神人'];
    private temp = 0;
    private level = 0;
    start() {
        this.playInterAd();
        resources.loadDir("result_assets", function (err, assets) {
           if(err){
            return;
           }
        });
         this.showup();
         this.bt1.node.on(Button.EventType.CLICK, this.bt1callback, this);
         this.bt2.node.on(Button.EventType.CLICK, this.bt2callback, this);
    }
    bt1callback(button: Button) {
        this.initData();
        director.loadScene('songselect');
    }
    bt2callback(button: Button) {
        this.initData();
        director.loadScene("indexscene");

    }
    initData() {
        Constant.Hits = 0;
        Constant.songLevel = 0;
        Constant.Hited = 0;
        Constant.ClickId = 0;
        Constant.total = 0;
        Constant.err = 0;
    }
    showup() {
        this.temp = (Constant.total - Constant.err) / Constant.total;
        this.total.string = Constant.total.toString();
        this.error.string = (Constant.err).toString();
        this.rates.string = ((Constant.total - Constant.err) / Constant.total * 100).toFixed(2).toString() + '%';
        this.exceed.string = this.calexceed();
        this.callevels();
        this.levels.string = this.levelcol[this.level - 1];
        this.node.getChildByName('reward').getComponent(Sprite).spriteFrame = this.spriteFrame[this.level - 1];
    }
    calexceed() {

        let a = 0;
        if (this.temp >= 0.8)
            a = (Constant.total - Constant.err * 3) / Constant.total;
        else if (this.temp > 0.5 && this.temp < 0.8)
            a = 0.3;
        else a = 0.1;
        return (a * 100).toFixed(2) + '%';


    }
    callevels() {
        let b = 0;
        if (this.temp > 0.2)
            this.level = Math.floor((this.temp - 0.2) / 0.1);
        else this.level = 1;
    }

    update(deltaTime: number) {

    }
    playInterAd(){
        // 创建插屏广告实例，提前初始化
        let InterAd = wx.createInterstitialAd({
           adUnitId: 'adunit-c83e89a6e4b939d6'
       });
       InterAd.show();
       InterAd.onError(err => {
           console.log('插屏广告展示失败');
           console.log(err);
       
          // this.adResult.string = '插屏视频展示失败';
          // this.adResult.node.parent.active = true;
       });
           }
}


