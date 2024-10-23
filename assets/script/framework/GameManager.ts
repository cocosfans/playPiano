import { _decorator, Component, TextAsset, Node, Label, Prefab, Color, instantiate, SpriteFrame, Sprite, Vec3, AudioClip, AudioSource, director, math, random } from 'cc';
import { Constant } from './Constant';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(TextAsset)
    WordText: TextAsset = null;
    @property(TextAsset)
    NoteText: TextAsset = null;
    @property([SpriteFrame])
    public spriteFrame: SpriteFrame[] = [];
    @property([SpriteFrame])
    public backGround: SpriteFrame[] = [];
    @property(Prefab)
    public wordPrefab: Prefab = null;
    public audioClip2: AudioClip = null;
    @property(AudioSource)
    public audioSource: AudioSource = null;
    private level = [[0, 64], [4, 269], [18, 212], [29, 154], [37, 161],[46,140]];
    private text: string;
    private wordInt: number = 50;
    private Songlines: number = 0;
    private lineTterator: number = 0;
    private errorCount: number = 0;
    private _curPos: Vec3 = new Vec3();
    private _nodeType: number = Constant.BlockType.NOTE; //子节点类型,Constant.BlockType.NOTE:音符，Constant.BlockType.WORD:汉字；
    private k = 0;//每一行的计数器
    private notes: Node = null;
    private m:number=1; //练习模式的行
    private n:number=0; //练习模式的列

    start() {
        this.playInterAd();
        this.Songlines = Math.ceil(this.level[Constant.Level][1] / 20);
        switch (Constant.Model) {
            case 1: this.m=0;
            this.n=0;
            this.init1(); break;
            case 2: this.init2(); break;
            case 3: this.init3(); break;


        }

    }
    init1() {
        this.node.parent.getChildByName('readMe').active = false;
        this.node.parent.getChildByName('twotiger').active = true;
        this.notes = this.node.parent.getChildByName('note');
        this.notes.active = true;
            let j: number = 0;
            j = parseInt(this.getSong(this.m,this.n));
            j--;
            this.notes.getComponent(Sprite).spriteFrame = this.spriteFrame[j];
            this.notes.setPosition(-650 + j * 65, 300, 0);

        
    }
    init2() {
        this.node.parent.getChildByName('readMe').active = false;
        this.node.parent.getChildByName('note').active=false;
        if (this.wordPrefab == null) return;
        let m = 0;
        for (let i = 0; i < 20; i++) {
            let block: Node = instantiate(this.wordPrefab);
            this._nodeType = Constant.BlockType.WORD;
            let label = block.children[0].getChildByName('word').getComponent(Label);
            label.color = new Color(0, 0, 0, 255);
            label.string = this.getSong(this.level[Constant.Level][0] + this.lineTterator, i);
            this._nodeType = Constant.BlockType.NOTE;
            let j: number = 0;
            j = parseInt(this.getSong(this.level[Constant.Level][0] + this.lineTterator, i));
            j--;
            block.children[0].getChildByName('note').getComponent(Sprite).spriteFrame = this.spriteFrame[j];
            //block.addChild(label);
            //block.name='wordback'+Constant.wordOrder;
            this.node.addChild(block);
            block.setPosition(-550 + i * this.wordInt, 100, 20);
        }
    }

    init3() {
        this.node.parent.getChildByName('note').active=false;
        this.node.parent.getChildByName('readMe').active = true;


    }
    parseCSV(csvString) {
        let lines = csvString.split('\n');
        let result = [];
        let items = [];
        lines.forEach((line) => {
            if (this._nodeType == Constant.BlockType.NOTE)
                items = line.split(',');
            else
                items = line.split('\t');

            result.push(items);
        });
        return result;
    }
    getSong(line: number, column: number) {
        if (this._nodeType == Constant.BlockType.NOTE)
            this.text = this.NoteText.text;
        else
            this.text = this.WordText.text;
        // console.log(this.text);
        let dataArray = this.parseCSV(this.text);
        let cell: string;
        cell = dataArray[line][column];
        return cell;

    }

    addHits() {
        Constant.Hits++;
    }
    removeAllChildren(node) {
        // 使用while循环确保删除所有子节点
        while (node.children.length > 0) {
            let child = node.children[0];
            // 将子节点从父节点中移除
            node.removeChild(child);
            // 如果需要，还可以手动删除子节点
            child.destroy();
        }
    }
    update1() {
        this._curPos = this.notes.position;
        let movelength = this._curPos.y - 2;
        this.notes.setPosition(this._curPos.x, movelength, this._curPos.z);
        if (movelength < -30 || Constant.Hited) {
            Constant.Hited = 0;
            //this.notes.active = false;
            if(this.m===3 && this.n===3)
                {
                  this.m=0;
                  this.n=0;  
                }else
               if(this.n===19)
                {
                this.n=0;
                this.m++;
                }
                else
                this.n++;
            
            this.init1();

        }
        //todo
    }

    update2() {
        if (Constant.Hited) {
           // console.log(this.node.getChildByName('wordback' + Constant.Hits));
            // console.info("aa");
            this._nodeType == Constant.BlockType.NOTE;
            if (Constant.ClickId == parseInt(this.getSong(this.level[Constant.Level][0] + this.lineTterator, this.k)))
                this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame = this.backGround[0];
            else {
                this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame = this.backGround[1];
                this.errorCount++;
                this.audioSource = this.getComponent(AudioSource);
                this.audioSource.play();
                
            }
            this.addHits();
            if (Constant.Hits >= this.level[Constant.Level][1]) {
                Constant.total = this.level[Constant.Level][1];
                Constant.err = this.errorCount;
                this.scheduleOnce(function() {
                    // 这里的 this 指向 component
                    director.loadScene("result");
                }, 2);

               
            }
            Constant.Hited = 0;
            this.k++;
            if (this.k >= 20) {   //一行结束，行数+1
                this.lineTterator++;
                this.removeAllChildren(this.node);
                this.init2();
                this.k = 0;
            }
           
        }


    }

    update(deltaTime: number) {
        switch (Constant.Model) {
            case 1: this.update1(); break;
            case 2: this.update2(); break;



        }
    }
    playInterAd(){
 // 创建插屏视频广告实例，提前初始化
 let InterAd = wx.createInterstitialAd({
    adUnitId: 'adunit-c83e89a6e4b939d6'
});
InterAd.show();
InterAd.onError(err => {
    console.log('插屏视频展示失败');
    console.log(err);

   // this.adResult.string = '插屏视频展示失败';
   // this.adResult.node.parent.active = true;
});
    }
}
