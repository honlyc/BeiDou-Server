/*
	
**/
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009023/1#";
var 图标2 = "#fUI/StatusBar.img/BtClaim/mouseOver/0#";
var 圆形 = "#fEffect/CharacterEff/1112903/0/0#"; //红桃心
var status = 0;

function start() {
    levelStart()
}

function levelStart() {
    var selStr = "\t\t\t" + 心 + "  " + 心 + " #r#e < 装备强化中心 > #k#n " + 心 + "  " + 心 + "\r\n\r\n";

    selStr += "	#eHi~#b#h ##k，这里是装备强化中心，请选择类别。\r\n\r\n";
    selStr += "#L0#" + 圆形 + "#d快速洗潜" + 圆形 + "#l  #L1#" + 圆形 + "#d洗血系统" + 圆形 + "#l  #L2#" + 圆形 + "#d时装升星" + 圆形 + "#l\r\n\r\n";
    selStr += "#L4#" + 圆形 + "#d自选FFN武器" + 圆形 + "#l  #L5#" + 圆形 + "#dFFN武器觉醒" + 圆形 + "#l  \r\n\r\n";
    selStr += "#L3#" + 圆形 + "#d时装属性转移" + 圆形 + "#l \r\n    ";

    cm.sendSelectLevel(selStr);
}

function level0() {
    openNpc("快速洗潜");
}

function level1() {
    openNpc("洗血系统");
}

function level2() {
    openNpc("时装升星");
}
function level3() {
    openNpc("时装属性转移");
}

function level4() {
    openNpc("自选法弗纳武器");
}

function level5() {
    openNpc("FFN武器觉醒");
}

function openNpc(scriptName) {
    cm.dispose();
    cm.openNpc(9900001, scriptName);
}