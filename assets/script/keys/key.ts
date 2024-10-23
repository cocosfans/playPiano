import { _decorator, Component, Node,AudioSource,Input,AudioClip,Vec3,input,EventTouch, CCInteger} from 'cc';
import { Constant } from '../framework/Constant';
const { ccclass, property } = _decorator;

@ccclass('key')
export class key extends Component {
@property(AudioClip)
public _audioClip:AudioClip =null;
@property(AudioSource)
public _audioSource: AudioSource = null!;
@property({type:CCInteger})
private keyId = 0; 
private _curPos:Vec3=new Vec3();
private _startMove:boolean=false;
private _curJumpTime: number = 0;
//private _audioSource:AudioSource = null;
    start() {
     this._audioSource=this.getComponent(AudioSource);
    this.node.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
    }
  
    onTouchStart(event:EventTouch)
    {      Constant.ClickId=this.keyId;
               this._audioSource.play();
        this._curPos=this.node.position;
        this.node.setPosition(this._curPos.x,this._curPos.y+20,this._curPos.z); // 将位移设置给角色
        this._startMove=true;
        Constant.Hited = 1;
        this.node.off(Input.EventType.TOUCH_START,this.onTouchStart,this);
    }
    update(deltaTime: number) {
        if (this._startMove) {
            this._curJumpTime += deltaTime; // 累计总的跳跃时间
            if (this._curJumpTime > 0.2) { // 当跳跃时间是否结束
                // end 
                this.node.setPosition(this._curPos.x,this._curPos.y-20,this._curPos.z); // 强制位置到终点
                this._startMove = false;               // 清理跳跃标记
                this._curJumpTime=0;
                this.node.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
            } 
        
    }
}
}