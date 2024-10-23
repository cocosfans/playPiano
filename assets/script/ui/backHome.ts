import { _decorator, Component, Node,Button,director} from 'cc';
import {sys} from 'cc'
import { Constant } from '../framework/Constant';
import  '../minigame-api-typings/types/wx/lib.wx.api.d.ts';
const { ccclass, property } = _decorator;

@ccclass('backHome')
export class backHome extends Component {
    start() {
        this.node.on(Button.EventType.CLICK, this.callback, this);  //给home键注册事件监听
    }
    callback(button:Button)
    {
      this.init();
      director.loadScene("indexscene");
    }
    init()
    {
      
      Constant.Hits = 0;
      Constant.songLevel = 0;
      Constant.Hited = 0;
      Constant.ClickId = 0;
      Constant.total = 0;
      Constant.err = 0;
    
    }
    update(deltaTime: number) {
      
    }
}


