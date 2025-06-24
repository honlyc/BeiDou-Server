/* Dawnveil
 Cab
 Regular Cab in Victoria
 Made by Daenerys
 */
var status = 0;
var maps = Array(
1000000,
100000000, 
100000202,
101000000, 
102000000, 
103000000, 
103040000,
104000000, 
104020000,
105000000, 
106020000, 
120000000, 
120030000, 
130000000, 
130000200, 
140000000, 
200000000, 
200000111, 
200100000,
211000000, 
211060000,
220000000, 
221000000, 
222000000, 
230000000, 
240000000, 
250000000, 
251000000, 
260000000, 
261000000, 
270000000,
270000100, 
271000000, 
300000000, 
310000000, 
310040300,
500000000, 
540000000,
540010000, 
541000000, 
541020000,
550000000, 
551000000, 
555000000,
600000000, 
682000000,
700000000,
701000000, 
701000200, 
702000000, 
702100000, 
800000000, 
801000000, 
802000101,
914100000,
925020000, 
960000000, 
970010000,
980040000
	);
var maps2 = Array(
Array(104010000, "#k推荐等级：1级#b"),
Array(120010100, "#k推荐等级：10级#b"),
Array(100020100, "#k推荐等级：10级#b"),
Array(120020300, "#k推荐等级：10级#b"),
Array(101020100, "#k推荐等级：10级#b"),
Array(103020310, "#k推荐等级：15级#b"),
Array(102030000, "#k推荐等级：15级#b"),
Array(101030000, "#k推荐等级：15级#b"),
Array(120020400, "#k推荐等级：15级#b"),
Array(100040100, "#k推荐等级：20级#b"),
Array(100020401, "#k推荐等级：20级#b"),
Array(103030200, "#k推荐等级：20级#b"),
Array(310030200, "#k推荐等级：20级#b"),
Array(120030500, "#k推荐等级：25级#b"),
Array(101040000, "#k推荐等级：25级#b"),
Array(102030400, "#k推荐等级：25级#b"),
Array(100040300, "#k推荐等级：25级#b"),
Array(101040320, "#k推荐等级：30级#b"),
Array(106020100, "#k推荐等级：30级#b"),
Array(310040300, "#k推荐等级：30级#b"),
Array(310040400, "#k推荐等级：35级#b"),
Array(102040600, "#k推荐等级：35级#b"),
Array(200080200, "#k推荐等级：35级#b"),
Array(200081500, "#k推荐等级：40级#b"),
Array(211010000, "#k推荐等级：45级#b"),
Array(211030000, "#k推荐等级：45级#b"),
Array(200010100, "#k推荐等级：45级#b"),
Array(200080000, "#k推荐等级：50级#b"),
Array(200010200, "#k推荐等级：50级#b"),
Array(211040100, "#k推荐等级：50级#b"),
Array(200010300, "#k推荐等级：55级#b"),
Array(222010000, "#k推荐等级：55级#b"),
Array(222010102, "#k推荐等级：55级#b"),
Array(222010300, "#k推荐等级：60级#b"),
Array(220010500, "#k推荐等级：60级#b"),
Array(220010200, "#k推荐等级：60级#b"),
Array(220011000, "#k推荐等级：65级#b"),
Array(220020200, "#k推荐等级：65级#b"),
Array(230010000, "#k推荐等级：65级#b"),
Array(230010400, "#k推荐等级：70级#b"),
Array(260020000, "#k推荐等级：70级#b"),
Array(260010200, "#k推荐等级：70级#b"),
Array(541010010, "#k推荐等级：70级#b"),
Array(260020200, "#k推荐等级：75级#b"),
Array(260020700, "#k推荐等级：75级#b"),
Array(221040300, "#k推荐等级：75级#b"),
Array(261020200, "#k推荐等级：80级#b"),
Array(261010003, "#k推荐等级：80级#b"),
Array(250010301, "#k推荐等级：80级#b"),
Array(250010303, "#k推荐等级：85级#b"),
Array(250010501, "#k推荐等级：85级#b"),
Array(310060210, "#k推荐等级：85级#b"),
Array(310060110, "#k推荐等级：90级#b"),
Array(250010503, "#k推荐等级：90级#b"),
Array(251010000, "#k推荐等级：90级#b"),
Array(551030100, "#k推荐等级：90级#b"),
Array(230040000, "#k推荐等级：95级#b"),
Array(261010102, "#k推荐等级：95级#b"),
Array(240011000, "#k推荐等级：95级#b"),
Array(230040400, "#k推荐等级：100级#b"),
Array(240010100, "#k推荐等级：100级#b"),
Array(220060100, "#k推荐等级：100级#b"),
Array(240010700, "#k推荐等级：105级#b"),
Array(240010300, "#k推荐等级：105级#b"),
Array(240010400, "#k推荐等级：110级#b"),
Array(240010600, "#k推荐等级：110级#b"),
Array(240020500, "#k推荐等级：115级#b"),
Array(220060300, "#k推荐等级：115级#b"),
Array(211040500, "#k推荐等级：120级#b"),
Array(211040800, "#k推荐等级：125级#b"),
Array(211040900, "#k推荐等级：125级#b"),
Array(211042000, "#k推荐等级：125级#b"),
Array(211041400, "#k推荐等级：130级#b"),
Array(240040000, "#k推荐等级：130级#b"),
Array(270010100, "#k推荐等级：135级#b"),
Array(211042200, "#k推荐等级：135级#b"),
Array(270010400, "#k推荐等级：140级#b"),
Array(240040520, "#k推荐等级：140级#b"),
Array(240040510, "#k推荐等级：145级#b"),
Array(270020100, "#k推荐等级：145级#b"),
Array(270020300, "#k推荐等级：150级#b"),
Array(240040600, "#k推荐等级：150级#b"),
Array(270020400, "#k推荐等级：155级#b"),
Array(270030300, "#k推荐等级：160级#b"),
Array(271020000, "#k推荐等级：160级#b"),
Array(271000210, "#k推荐等级：165级#b"),
Array(270030500, "#k推荐等级：165级#b"),
Array(271010301, "#k推荐等级：165级#b"),
Array(271030310, "#k推荐等级：170级#b"),
Array(271030201, "#k推荐等级：170级#b"),
Array(271030320, "#k推荐等级：175级#b"),
Array(271030510, "#k推荐等级：175级#b"),
Array(271030530, "#k推荐等级：180级#b"),
Array(271030600, "#k推荐等级：180级#b")
        );
var maps3 = Array(
Array(105100100,"#r巨型蝙蝠怪#b"),
Array(200101400,"#r薛西斯#b"),
Array(220080000,"#r闹钟#b"),
Array(702070400,"#r妖僧#b"),
Array(551030100,"#r暴力熊#b"),
Array(211070000,"#r狮子王#b"),
Array(541020800,"#r千年树妖#b"),
Array(211042300,"#r普通扎昆#b"),
Array(211042301,"#r进阶扎昆#b"),
Array(240050400,"#r暗黑龙王#b(频道4为进阶暗黑龙王)#b"),
Array(270050000,"#rPB品克缤#b"),
Array(271040000,"#r希纳斯#b"),
Array(103030400,"25级野图BOSS 多尔"),
Array(102020500,"20级野图BOSS 古木妖"),
Array(100020401,"25级野图BOSS 僵尸蘑菇王"),
Array(120030500,"30级野图BOSS 巨居蟹"),
Array(211050000,"57级野图BOSS 雪山魔女"),
Array(230020100,"63级野图BOSS 歇尔夫"),
Array(222010300,"65级野图BOSS 书生鬼"),
Array(105030500,"66级野图BOSS 蝙蝠怪"),
Array(250010304,"90级野图BOSS 肯德熊"),
Array(250010503,"95级野图BOSS 妖怪禅师"),
Array(230040420,"110级野图BOSS 皮亚奴斯鱼王"),
Array(240020401,"120级野图BOSS 火龙"),
Array(240020101,"120级野图BOSS 天鹰"),
Array(270020500,"159级野图BOSS 玄冰独角兽"),
Array(270010500,"150级野图BOSS 多多"),
Array(270030500,"168级野图BOSS 雷卡")
        );
var maps4 = Array(
	220000006, 
	105040310, 
	910360000, 
	910130000, 
	280020000,
	109030001,
	109040001
    );	
var maps5 = Array(
	910001000,
	910001003,
	910001004,
	910001007, 
	910001009, 
	910001005, 
	910001006, 
	910001008, 
	910001010
    );		
	
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }


    if (status == 0) {
        cm.sendSimple("  #e Hi~ #b#h ##k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#k  \r\n\r\n #b#L0#城镇传送#l#k \r\n\r\n #b#L1#练级传送#l#k \r\n\r\n #b#L2#BOSS传送#l#k \r\n\r\n #b#L3#跳跳地图#l#k \r\n\r\n #b#L4#采集地图#l#k");
    } else if (status == 1) {
        sel = selection;
        switch (sel) {
            case 0:
            {
                var selStr = "#k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#b";
                for (var i = 0; i < maps.length; i++) {
                    if (maps[i] != cm.getMapId()) {
                        selStr += "\r\n#L" + i + "##m" + maps[i] + "##l";
                    }
                }
                cm.sendSimple(selStr);
                break;
            }
            case 1:
            {
                var selStr2 = "#k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#b";
                for (var i = 0; i < maps2.length; i++) {
                    if (maps2[i][0] != cm.getMapId()) {
                        selStr2 += "\r\n#L" + i + "##m" + maps2[i][0] + "#(" + maps2[i][1] + ")#l";
                    }
                }
                cm.sendSimple(selStr2);
                break;
            }
            case 2:
            {
                var selStr3 = "#k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#b";
                for (var i = 0; i < maps3.length; i++) {
                    if (maps3[i][0] != cm.getMapId()) {
                        selStr3 += "\r\n#L" + i + "#" + maps3[i][1] + " - #m" + maps3[i][0] + "##l";
                    }
                }
                cm.sendSimple(selStr3);
                break;
            }			
			case 3:
            {
                var selStr4 = "#k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#b";
                for (var i = 0; i < maps4.length; i++) {
                    if (maps[i] != cm.getMapId()) {
                        selStr4 += "\r\n#L" + i + "##m" + maps4[i] + "##l";
                    }
                }
                cm.sendSimple(selStr4);
                break;
            }	
			case 4:
            {
                var selStr5 = "#k请选择你要去的地方吧，我能让你转瞬之间就到达目的地哦，不过你还是要多锻炼一下最好，修炼之余多看看冒险岛的风景吧。#b";
                for (var i = 0; i < maps5.length; i++) {
                    if (maps[i] != cm.getMapId()) {
                        selStr5 += "\r\n#L" + i + "##m" + maps5[i] + "##l";
                    }
                }
                cm.sendSimple(selStr5);
                break;
            }	
            default :
            {
                cm.dispose();
                return;
            }
        }


    } else if (status == 2) {

        switch (sel) {
            case 0:
            {
                cm.sendYesNo("这地方应该没有什么可以参观的了。确定要移动到#b#m" + maps[selection] + "##k吗?");
                selectedMap = selection;
                break;
            }
            case 1:
            {
                cm.sendYesNo("这地方应该没有什么可以参观的了。确定要移动到#b#m" + maps2[selection][0] + "##k吗?");
                selectedMap2 = selection;
                break;
            }

            case 2:
            {
                cm.sendYesNo("这地方应该没有什么可以参观的了。确定要移动到#b#m" + maps3[selection][0] + "##k吗?");
                selectedMap3 = selection;
                break;
            }
			
			case 3:
            {
                cm.sendYesNo("这地方应该没有什么可以参观的了。确定要移动到#b#m" + maps4[selection] + "##k吗?");
                selectedMap4 = selection;
                break;
            }
			case 4:
            {
                cm.sendYesNo("这地方应该没有什么可以参观的了。确定要移动到#b#m" + maps5[selection] + "##k吗?");
                selectedMap5 = selection;
                break;
            }
            default :
            {
                cm.dispose();
                return;
            }
        }
    } else if (status == 3) {
        cm.dispose();
        switch (sel) {
            case 0:
            {
                if (maps[selectedMap] == 951000000) {
                    cm.dispose();
                    cm.openNpc(9071003);

                    return;
                }
                cm.warp(maps[selectedMap]);
                cm.dispose();
                break;
            }
            case 1:
            {
                //if (cm.getMeso() < meso1) {
                //    cm.sendOk("你的楓幣不足。");
                //    cm.dispose();
                //    return;
                //}
                //cm.gainMeso(-meso1);
                cm.warp(maps2[selectedMap2][0]);
                cm.dispose();
                break;
            }

            case 2:
            {
                //if (cm.getMeso() < meso2) {
                //    cm.sendOk("你的楓幣不足。");
                //   cm.dispose();
                //    return;
                // }
                // cm.gainMeso(-meso2);
                cm.warp(maps3[selectedMap3][0]);
                cm.dispose();
                break;
            }
			
			case 3:
            {
                if (maps4[selectedMap4] == 951000000) {
                    cm.dispose();
                    cm.openNpc(9071003);

                    return;
                }
                cm.warp(maps4[selectedMap4]);
                cm.dispose();
                break;
            }
			case 4:
            {
                if (maps5[selectedMap5] == 951000000) {
                    cm.dispose();
                    cm.openNpc(9071003);

                    return;
                }
                cm.warp(maps5[selectedMap5]);
                cm.dispose();
                break;
            }
            default :
            {
                cm.dispose();
                return;
            }
        }
    } else {
        cm.dispose();
        return;
    }
}