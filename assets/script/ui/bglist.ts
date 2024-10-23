import { _decorator, Component, Node,Prefab,instantiate,Label,Color, CCInteger,Input, director, EventTouch} from 'cc';
import { songlist } from './songlist';
import { Constant } from '../framework/Constant';
import  '../minigame-api-typings/types/wx/lib.wx.api.d.ts';
const { ccclass, property } = _decorator;


@ccclass('bglist')
export class bglist extends Component {
    @property(Prefab)
    public songPrefab:Prefab=null;
    @property(Prefab)
    public ul:Prefab=null; 
    @property(Label)
    public adR:Label=null;
    private bannerAd:any;

    private songl = ["两只老虎","北京欢迎你","你的样子","大约在冬季","爱江山更爱美人","独角戏"];
  //歌曲是否可播放，1可播放0不可播放
    start() {
        this.playBanner();
       // console.log("songr "+this.songr[4]);
        this.init();
    }
init()
{
    for(let i=0;i<6;i++)
        {
   let block:Node = instantiate(this.songPrefab);
   block.name = i.toString();
   if(Constant.songr[i]===1)
   block.on(Input.EventType.TOUCH_START,this.onTouchStart,this);
   else block.on(Input.EventType.TOUCH_START,this.ULTouchStart,this);
  let label = block.getComponent(Label);
   label.string = this.songl[i];
   let block2:Node;
   if(Constant.songr[i]===1)
   {
    
    label.color = new Color(255,0,0);
    this.node.addChild(block);
   }
   else
   {   block2 =instantiate(this.ul);
       block2.name=i.toString();
       
       label.color = new Color(50,50,50);
       this.node.addChild(block);
       block2.setPosition(150,200-60*i,0);
       this.node.addChild(block2);
       block2.on(Input.EventType.TOUCH_START,this.ULTouchStart,this);
   }
   
   block.setPosition(0,200-60*i,0);
}
}
    onTouchStart(e:EventTouch)
    {
    
        console.log("the level is "+e.target.name);
    Constant.Level = parseInt(e.target.name);
    this.bannerAd.hide();
    director.loadScene("chellenge");
    
    }
    ULTouchStart(e:EventTouch)
    {
        Constant.Level = parseInt(e.target.name);
        if (typeof wx === 'undefined') {
            return;
        }
     
        // 创建激励视频广告实例，提前初始化
        let videoAd = wx.createRewardedVideoAd({
            adUnitId: 'adunit-6138a7104f5d3554'
        });
        videoAd.show();
        videoAd.onError(err => {
            console.log('激励视频展示失败');
            console.log(err);
     
           // this.adResult.string = '激励视频展示失败';
           // this.adResult.node.parent.active = true;
        });
     
        videoAd.onClose(res => {
            // 用户点击了【关闭广告】按钮
            // 小于 2.1.0 的基础库版本，res 是一个 undefined
            if (res && res.isEnded || res === undefined) {
                // 正常播放结束，可以下发游戏奖励
               Constant.songr[Constant.Level]=1;
               this.bannerAd.hide();
               director.loadScene('chellenge');
               
                //this.adResult.node.parent.active = true;
            }
            else {
                // 提前关闭广告，不发放奖励
                console.log('因播放中途退出，所以不下发游戏奖励');
     
               // this.adResult.string = '因播放中途退出，所以不下发游戏奖励';
                //this.adResult.node.parent.active = true;
            }
     
           
        });
    }

   playBanner()
   {
    this.bannerAd = wx.createBannerAd({
        adUnitId: 'adunit-fb0468e61dbc54d7',
        style: {
          left: 10,
          top: 76,
          width: 260,
          height: 100,
        }
        }
      );
      
      this.bannerAd.show();

   }
    update(deltaTime: number) {
        
    }
}


