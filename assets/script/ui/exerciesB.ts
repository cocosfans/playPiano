import { _decorator, Component, Node,director,Button } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('execB')
export class execB extends Component {
 
    start() {
        this.node.on(Button.EventType.CLICK, this.callback, this);
    }
    callback(button:Button)
    {
      Constant.Model = 1;

      director.loadScene("chellenge");
    }
    update(deltaTime: number) {
        
    }
}


