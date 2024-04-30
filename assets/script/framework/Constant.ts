import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

export class Constant  {
    public static Hits = 0;
    public static wordOrder = 0;
    public static songLevel = 1;
    public static noteOrder = 0;
    public static Hited = 0;
    public static Level = 1;
    public static ClickId = 0;
    public static BlockType = {
        NOTE: 1,
        WORD: 2,
    };
}

