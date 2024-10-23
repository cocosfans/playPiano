import { _decorator, Component, Node,Button, director } from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('chellB')
export class chellB extends Component {
  ;
    start() {
        this.node.on(Button.EventType.CLICK, this.callback, this);
    }
  callback(button:Button)
  {
    Constant.Model = 2;
    director.loadScene("songselect");
  }

    update(deltaTime: number) {
        
    }
}


