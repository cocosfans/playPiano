import { _decorator, Component, TextAsset,Node,Label,Prefab,Color,instantiate, SpriteFrame,Sprite,AudioClip,AudioSource} from 'cc';
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
    public wordPrefab:Prefab=null;
    public audioClip2:AudioClip =null;
    @property(AudioSource)
    public audioSource:AudioSource =null;
    private level = [[0,64],[4,269],[18,212],[29,154],[37,161]];
    private text:string;
    private wordInt:number = 50;
    private Songlines:number = 0;
    private lineTterator:number = 0;
    private errorCount:number = 0;
    private _nodeType:number = Constant.BlockType.NOTE; //子节点类型,Constant.BlockType.NOTE:音符，Constant.BlockType.WORD:汉字；
    private k = 0;//每一行的计数器
    
    start() {
        this.Songlines = Math.ceil(this.level[Constant.Level][1]/20);
       this.init(); 

    }
    init()
    { if (this.wordPrefab == null) return;
        for(let i=0;i<20;i++)
            {
       let block:Node = instantiate(this.wordPrefab);
       this._nodeType = Constant.BlockType.WORD;
      let label = block.children[0].getChildByName('word').getComponent(Label);
       label.color=new Color(0,0,0,255);
       label.string = this.getSong(this.level[Constant.Level][0]+this.lineTterator,i);
       this._nodeType = Constant.BlockType.NOTE;
       let j:number = 0;
       j = parseInt(this.getSong(this.level[Constant.Level][0]+this.lineTterator,i));
       j--;
       block.children[0].getChildByName('note').getComponent(Sprite).spriteFrame=this.spriteFrame[j];
       //block.addChild(label);
       block.name='wordback'+Constant.wordOrder;
       this.node.addChild(block);
       block.setPosition(-600+i*this.wordInt,0,20);
    }
    console.log(this.node);
}
    parseCSV(csvString) {
        let lines = csvString.split('\n');
        let result = [];
        let items = [];
        lines.forEach((line) => {
            if(this._nodeType == Constant.BlockType.NOTE)
             items = line.split(','); 
             else
            items = line.split('\t');

            result.push(items);
        });
        return result;
    }
    getSong(line:number,column:number)
    {
    if(this._nodeType == Constant.BlockType.NOTE)
        this.text = this.NoteText.text;
        else
       this.text = this.WordText.text;
       // console.log(this.text);
        let dataArray = this.parseCSV(this.text);
        let cell:string;
         cell = dataArray[line][column];
        return cell;

    }
    
    addHits()
    {
    Constant.Hits++;
    console.log(Constant.Hits);
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
    update(deltaTime: number) {
       if(Constant.Hited)
        {  
            console.log(this.node.getChildByName('wordback'+Constant.Hits));
            console.info("aa");
            this._nodeType == Constant.BlockType.NOTE;
            if(Constant.ClickId==parseInt(this.getSong(this.level[Constant.Level][0]+this.lineTterator,this.k)))
       this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame=this.backGround[0];
    else
    {
    this.node.children[this.k].children[0].getComponent(Sprite).spriteFrame=this.backGround[1];
    this.errorCount++;
    this.audioSource=this.getComponent(AudioSource);
    this.audioSource.play();
    console.log(this.errorCount);
    }
       Constant.Hited = 0;
       this.k++;
       if(this.k>=20)
        {
            this.lineTterator++;
            this.removeAllChildren(this.node);
            this.init();
            this.k=0;
        }
       this.addHits();
       if(Constant.Hits>=this.level[Constant.Level][1])
        this.removeAllChildren(this.node);
       }

    }
}
