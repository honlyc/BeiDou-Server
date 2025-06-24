//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;
var fee;
var xx;

//------------------------------------------------------------------------

var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //蓝色右箭头
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //选择道具
var ccx = "#fEffect/CharacterEff/1032063/0/0#"; //长彩星
var cyf = "#fEffect/CharacterEff/1032063/0/0#"; //长音符
var kx = "#fEffect/CharacterEff/1112903/0/0#"; //空星
var hot = "#fUI/CashShop.img/CSEffect/effect/0#";

//---------------------------------------------------------------------------
function start() {
    levelStart()
}

function levelStart() {
    var add = "\r\n\t\t" + cyf + "#d#e欢迎来到~PPMS怀旧服#n#k" + cyf + "\r\n";
    //   add += " \t#L1222##v2440002# #v2440002##e#r" + kx + "春节活动" + kx + "#v2440002# #v2440002##l#n#k\r\n";
    add += "#L10017#" + cyf + "#r#e  一键回自由  " +"#L10014#" + "#r#e  全民马拉松  " + cyf + "#n#k#l\r\n\r\n";
    add += "#e#L10002#" + kx + "个人信息" + kx + "#l #L10003#" + kx + "万能传送" + kx + "#l #L10004#" + kx + "每日任务" + kx + "#l#k\r\n\r\n";
    add += "#e#L10015#" + kx + "快速转职" + kx + "#l #L10016#" + kx + "一键满技" + kx + "#l #L10018#" + kx + "副本传送" + kx + "#l#k\r\n\r\n";
    add += "#e#r#L10005#" + kx + "新手礼包" + kx + "#k#l #L10006#" + kx + "购物中心" + kx + "#l #L10007#" + kx + "兑换中心" + kx + "#l#k\r\n\r\n";
    add += "#e#L10008#" + kx + "怪物爆率" + kx + "#l #L10009#" + kx + "掉落查询" + kx + "#l #L10010#" + kx + "特色系统" + kx + "#l#k\r\n\r\n";
    add += "#e#L10011#" + kx + "装备增幅" + kx + "#l #L10012#" + kx + "小赌怡情" + kx + "#l #L10013#" + kx + "推广系统" + kx + "#l#k\r\n\r\n";
    add += "  #L10001#" + ccx + "高版本BOSS挑战中心" + ccx + "#l \r\n";
    add += " ";
    cm.sendSelectLevel(add);
}

function level10001() {
    openNpc("高版本BOSS挑战")
}
function level10003() {
    openNpc("快捷传送")
}
function level10017() {
    cm.getPlayer().saveLocation("FREE_MARKET");
    cm.warp(910000000, "out00");
}

function level10011() {
    openNpc("装备增幅");
}

function openNpc(scriptName) {
    cm.dispose();
    cm.openNpc(9900001, scriptName);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        //------------------------------------------------------------------------
        if (status == 0) {
            var add = "\r\n\t\t" + cyf + "#d#e欢迎来到~PPMS怀旧服#n#k" + cyf + "\r\n";
            //   add += " \t#L1222##v2440002# #v2440002##e#r" + kx + "春节活动" + kx + "#v2440002# #v2440002##l#n#k\r\n";
            add += "#L10017#" + cyf + "#r#e  一键回自由  " +"#L10014#" + "#r#e  全民马拉松  " + cyf + "#n#k#l\r\n\r\n";
            add += "#e#L10002#" + kx + "个人信息" + kx + "#l #L10003#" + kx + "万能传送" + kx + "#l #L10004#" + kx + "每日任务" + kx + "#l#k\r\n\r\n";
            add += "#e#L10015#" + kx + "快速转职" + kx + "#l #L10016#" + kx + "一键满技" + kx + "#l #L10018#" + kx + "副本传送" + kx + "#l#k\r\n\r\n";
            add += "#e#r#L10005#" + kx + "新手礼包" + kx + "#k#l #L10006#" + kx + "购物中心" + kx + "#l #L10007#" + kx + "兑换中心" + kx + "#l#k\r\n\r\n";
            add += "#e#L10008#" + kx + "怪物爆率" + kx + "#l #L10009#" + kx + "掉落查询" + kx + "#l #L10010#" + kx + "特色系统" + kx + "#l#k\r\n\r\n";
            add += "#e#L10011#" + kx + "装备增幅" + kx + "#l #L10012#" + kx + "小赌怡情" + kx + "#l #L10013#" + kx + "推广系统" + kx + "#l#k\r\n\r\n";
            add += "  #L10001#" + ccx + "高版本BOSS挑战中心" + ccx + "#l \r\n";
            add += " ";
            //补充拍卖出券
            if(!cm.haveItem(2022615)){
                // cm.gainItem(2022615,1);
                // cm.playerMessage("已补充拍卖券，放在快捷键可快速打开拍卖中心~");
            }
            // if (cm.getPlayer().isGM()) {
            //     add += "  #L20001#" + ccx + "GM刷钱刷金币" + ccx + "#l \r\n";
            // }
            cm.sendOk(add);

            //------------------------------------------------------------------------

        } else if (status == 1) {
            switch (selection) {
                case 10001:
                    cm.dispose();
                    cm.openNpc(1064002, "高版本BOSS挑战");
                    break;
                case 10002:
                    cm.dispose();
                    cm.openNpc(9900004, "个人信息");
                    break;
                case 10003:
                    cm.dispose();
                    cm.openNpc(9900004, "快捷传送");
                    break;
                case 10004:
                    cm.dispose();
                    cm.openNpc(9900004, "每日任务");
                    break;
                case 10005:
                    cm.dispose();
                    cm.openNpc(9900004, "新手礼包");
                    break;
                case 10006:
                    cm.dispose();
                    cm.openNpc(9900004, "购物中心");
                    break;
                case 10007:
                    cm.dispose();
                    cm.openNpc(9900004, "兑换中心");
                    break;
                case 10008:
                    cm.dispose();
                    cm.openNpc(9900004, "怪物爆率");
                    break;
                case 10009:
                    cm.dispose();
                    cm.openNpc(9900004, "掉落查询");
                    break;
                case 10010:
                    cm.dispose();
                    cm.openNpc(9900004, "特色系统");
                    break;
                case 10011:
                    cm.dispose();
                    cm.openNpc(9900004, "装备增幅");
                    break;
                case 10012:
                    cm.dispose();
                    cm.openNpc(9900004, "小赌怡情");
                    break;
                case 10013:
                    cm.dispose();
                    cm.openNpc(9900004, "推广系统");
                    break;
                case 10014:
                    cm.dispose();
                    cm.openNpc(9900004, "全民马拉松");
                    break;
                case 10015:
                    cm.dispose();
                    cm.openNpc(9900004, "快速转职");
                    break;
                case 10016:
                    cm.dispose();
                    cm.openNpc(9900004, "一键满技");
                    break;
                case 10017:
                    cm.dispose();
                    cm.warp(910000000,0);
                    break;
                case 10018:
                    cm.dispose();
                    cm.openNpc(9010022);
                    break;
                default:
            }

        }
    }
}

