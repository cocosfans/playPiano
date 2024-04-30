import { _decorator, Component, Node,Prefab,instantiate,Label,Color, CCInteger,Input, director, EventTouch} from 'cc';
import { songlist } from './songlist';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

interface Props {
    a: string;
    b: string;
    c: string;
  }
  
  interface Props1 extends Pick<Props, 'a' | 'b'> {
    e: string;
  }

@ccclass('bglist')
export class bglist extends Component {
    @property(Prefab)
    public songPrefab:Prefab=null;
  

    private songl = ["两只老虎","北京欢迎你","你的样子","大约在冬季","爱江山更爱美人","独角戏"];
    start() {
        for(let i=0;i<6;i++)
            {
       let block:Node = instantiate(this.songPrefab);
       block.name = i.toString();
       block.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
      let label = block.getComponent(Label);
       label.string = this.songl[i];
       this.node.addChild(block);
       block.setPosition(0,200-60*i,0);
    }
}
    onTouchStart(e:EventTouch)
    {
        console.log("the level is "+e.target.name);
    Constant.Level = parseInt(e.target.name);
    
    director.loadScene("chellenge");
    }

    update(deltaTime: number) {
        
    }
}


