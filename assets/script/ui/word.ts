import { _decorator, Component,TextAsset,Label,Node,Color } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('word')
export class word extends Component {
    @property(TextAsset)
    itemGiftText: TextAsset = null;
    private text:string;
    private _index:number=0;
    start() {
        this.node.name='Note'+Constant.wordOrder;
        console.log(this.node.name);
        let label = this.node.getComponent(Label);
        label.color=new Color(0,0,0,255);
        this._index = Constant.wordOrder;
        label.string = this.getSong(0,Constant.wordOrder++);
        console.log(this._index);

    } 
    parseCSV(csvString) {
        let lines = csvString.split('\n');
        let result = [];
        lines.forEach((line) => {
            let items = line.split('\t');
            result.push(items);
        });
        return result;
    }
    getSong(line:number,column:number)
    {   this.text = this.itemGiftText.text;
       // console.log(this.text);
        let dataArray = this.parseCSV(this.text);
        let cell:string;
         cell = dataArray[line][column];
        return cell;

    }
    update(deltaTime: number) {
            let label = this.node.getChildByName("Note1").getComponent(Label);
            label.color=new Color(255,0,0,255);

    }
}
