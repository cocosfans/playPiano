import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export class Constant  {
    public static Hits = 0;
    public static songLevel = 1;
    public static Hited = 0;
    public static Level = 1;
    public static ClickId = 0;
    public static BlockType = {
        NOTE: 1,
        WORD: 2,
    };
    public static  songr = [1,1,0,0,0,0];
    public static total = 100;
    public static err = 2;
    public static Model = 1;
}

