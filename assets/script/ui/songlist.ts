import { _decorator, Component, Node,Input,input,EventTouch,CCInteger,director} from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('songlist')
export class songlist extends Component {
    @property(CCInteger)
    private songId = 0;
    start() {
       this.node.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
       }
     
       onTouchStart(event:EventTouch)
       {   Constant.Level=this.getsongId();
        director.loadScene("chellenge");
           this.node.off(Input.EventType.TOUCH_START,this.onTouchStart,this);
       }
       setsongId(songId)
       {
        this.songId=songId;
       }
       getsongId()
       {
      return this.songId;
       }
    update(deltaTime: number) {
        
    }
}


