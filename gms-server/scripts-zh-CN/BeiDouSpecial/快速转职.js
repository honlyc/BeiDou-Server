/*
<伏特加>
	功能：快速转职
	时间：2018年7月20日
*/

var status = -1;
var jobData = new Array(
    Array("战士", 100, 999),
    Array("剑客", 110, 999),
    Array("勇士", 111, 999),
    Array("英雄", 112, 999),
    Array("准骑士", 120, 999),
    Array("骑士", 121, 999),
    Array("圣骑士", 122, 999),
    Array("枪战士", 130, 999),
    Array("龙骑士", 131, 999),
    Array("黑骑士", 132, 999),
    Array("魔法师", 200, 999),
    Array("火毒法师", 210, 999),
    Array("火毒巫师", 211, 999),
    Array("火毒魔导士", 212, 999),
    Array("冰雷法师", 220, 999),
    Array("冰雷巫师", 221, 999),
    Array("冰雷魔导士", 222, 999),
    Array("牧师", 230, 999),
    Array("祭司", 231, 999),
    Array("主教", 232, 999),
    Array("弓箭手", 300, 999),
    Array("猎人", 310, 999),
    Array("射手", 311, 999),
    Array("神射手", 312, 999),
    Array("弩弓手", 320, 999),
    Array("游侠", 321, 999),
    Array("箭神", 322, 999),
    Array("飞侠", 400, 999),
    Array("刺客", 410, 999),
    Array("无影人", 411, 999),
    Array("隐士", 412, 999),
    Array("侠客", 420, 999),
    Array("独行客", 421, 999),
    Array("侠盗", 422, 999),
    Array("海盗", 500, 999),
    Array("拳手", 510, 999),
    Array("斗士", 511, 999),
    Array("冲锋队长", 512, 999),
    Array("火枪手", 520, 999),
    Array("大副", 521, 999),
    Array("船长", 522, 999),
    Array("魂骑士（一转）", 1100, 9),
    Array("魂骑士（二转）", 1110, 9),
    Array("魂骑士（三转）", 1111, 9),
    Array("魂骑士（四转）", 1112, 9),
    Array("炎术士（一转）", 1200, 9),
    Array("炎术士（二转）", 1210, 9),
    Array("炎术士（三转）", 1211, 9),
    Array("炎术士（四转）", 1212, 9),
    Array("风灵使者（一转）", 1300, 9),
    Array("风灵使者（二转）", 1310, 9),
    Array("风灵使者（三转）", 1311, 9),
    Array("风灵使者（四转）", 1312, 9),
    Array("夜行者（一转）", 1400, 9),
    Array("夜行者（二转）", 1410, 9),
    Array("夜行者（三转）", 1411, 9),
    Array("夜行者（四转）", 1412, 9),
    Array("奇袭者（一转）", 1500, 9),
    Array("奇袭者（二转）", 1510, 9),
    Array("奇袭者（三转）", 1511, 9),
    Array("奇袭者（四转）", 1512, 9),
    Array("战神（一转）", 2100, 0),
    Array("战神（二转）", 2110, 0),
    Array("战神（三转）", 2111, 0),
    Array("战神（四转）", 2112, 0),
    Array("海盗（炮手）", 501, 0),
    Array("火炮手（二转）", 530, 0),
    Array("毁灭炮手（三转）", 531, 0),
    Array("神炮王（究极打炮能手）", 532, 0),
    Array("双弩精灵（一转）", 2300, 1),
    Array("双弩精灵（二转）", 2310, 1),
    Array("双弩精灵（三转）", 2311, 1),
    Array("双弩精灵（四转）", 2312, 1),
    Array("幻影（一转）", 2400, 2),
    Array("幻影（二转）", 2410, 2),
    Array("幻影（三转）", 2411, 2),
    Array("幻影（四转）", 2412, 2),
    Array("夜光法师（一转）", 2700, 3),
    Array("夜光法师（二转）", 2710, 3),
    Array("夜光法师（三转）", 2711, 3),
    Array("夜光法师（四转）", 2712, 3),
    Array("恶魔猎手（一转）", 3100, 4),
    Array("恶魔猎手（二转）", 3110, 4),
    Array("恶魔猎手（三转）", 3111, 4),
    Array("恶魔猎手（四转）", 3112, 4),
    Array("恶魔复仇者（初级）", 3101, 0),
    Array("恶魔复仇者（中级）", 3120, 0),
    Array("恶魔复仇者（高级）", 3121, 0),
    Array("恶魔复仇者（究级）", 3122, 0),
    Array("唤灵法师（一转）", 3200, 999),
    Array("唤灵法师（二转）", 3210, 999),
    Array("唤灵法师（三转）", 3211, 999),
    Array("唤灵法师（四转）", 3212, 999),
    Array("豹弩游侠（一转）", 3300, 999),
    Array("豹弩游侠（二转）", 3310, 999),
    Array("豹弩游侠（三转）", 3311, 999),
    Array("豹弩游侠（四转）", 3312, 999),
    Array("机械师（一转）", 3500, 999),
    Array("机械师（二转）", 3510, 999),
    Array("机械师（三转）", 3511, 999),
    Array("机械师（四转）", 3512, 999),
    Array("尖兵（一转）", 3600, 5),
    Array("尖兵（二转）", 3610, 5),
    Array("尖兵（三转）", 3611, 5),
    Array("尖兵（四转）", 3612, 5),
    Array("爆破手（一转）", 3700, 0),
    Array("爆破手（二转）", 3710, 0),
    Array("爆破手（三转）", 3711, 0),
    Array("爆破手（四转）", 3712, 0),
    Array("米哈尔（一转）", 5100, 6),
    Array("米哈尔（二转）", 5110, 6),
    Array("米哈尔（三转）", 5111, 6),
    Array("米哈尔（四转）", 5112, 6),
    Array("狂龙战士（一转）", 6100, 7),
    Array("狂龙战士（二转）", 6110, 7),
    Array("狂龙战士（三转）", 6111, 7),
    Array("狂龙战士（四转）", 6112, 7),
    Array("爆莉萌天使（一转）", 6500, 8),
    Array("爆莉萌天使（二转）", 6510, 8),
    Array("爆莉萌天使（三转）", 6511, 8),
    Array("爆莉萌天使（四转）", 6512, 8),
    Array("龙的传人（一转）", 508, 0),
    Array("龙的传人（二转）", 570, 0),
    Array("龙的传人（三转）", 571, 0),
    Array("龙的传人（四转）", 572, 0),
    Array("隐月（一转）", 2500, 0),
    Array("隐月（二转）", 2510, 0),
    Array("隐月（三转）", 2511, 0),
    Array("隐月（四转）", 2512, 0),
    Array("剑豪（一转）", 4100, 0),
    Array("剑豪（二转）", 4110, 0),
    Array("剑豪（三转）", 4111, 0),
    Array("剑豪（四转）", 4112, 0),
    Array("阴阳师（一转）", 4200, 0),
    Array("阴阳师（二转）", 4210, 0),
    Array("阴阳师（三转）", 4211, 0),
    Array("阴阳师（四转）", 4212, 0),
    Array("超能力者（一转）", 14200, 0),
    Array("超能力者（二转）", 14210, 0),
    Array("超能力者（三转）", 14211, 0),
    Array("超能力者（四转）", 14212, 0),
    Array("龙神（一转）", 2200, 0),
    Array("龙神（二转）", 2211, 0),
    Array("龙神（三转）", 2214, 0),
    Array("龙神（四转）", 2217, 0)
); //比较规范的职业ID统一在这个脚本里面转职
var noAdvance = "对不起，现在你不能转职。你的等级必须在 ";
var advance = "#r - 小助手主页 >> 转职功能 #k\r\n\r\n你好哦，我这里可以提供快速转职哦~";
var unable = "好像你已经通过了全部的转职了，你的冒险生活怎么样？如果遇到不开心的事，笑笑就过了。以后还有很多事情等着你去面对。";
var noThanks = "\r\n\r\n#L1#谢谢，但是我现在暂时不想转职。#l";
var check = "你确定你想成为一个 ";
var congrats = "你想成为一个 ";
var first;
var newJobName;
var newJob;

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
        return;
    }

    if (mode == 1) {
        status++;
    } else {
        status--;
    }

    if (status == -1) {
        cm.dispose();
        return;
    }


    if (status == 0 && (cm.getJobId() % 10 == 2 && cm.getJobId() != 2002 && cm.getJobId() != 3002 && cm.getJobId() != 4002 && cm.getJobId() != 6002 && cm.getJobId() != 432 && cm.getJobId() != 15002 || cm.getJobId() == 2217 || cm.getJobId() == 434)) { //四转结束
        if (cm.getLevel() < 200) {
            cm.sendOk("您的等级不足200无法进行第五次转职");
            cm.dispose();
        } else {
            cm.sendOk("恭喜你，勇士！现在你可以进行第五次转职了，请到市场寻找NPC进行免费五转，否则必须消耗元宝...\r\n#L10#进入五转任务\r\n#L11#快速五转 (消耗20元宝)");
        }
        return;
    } else if (selection < 10) {
        if (cm.haveItem(2431305)) { // 如果有火光武器箱，那么提示玩家使用后才能转职
            cm.sendOk("#r您还有上次转职未使用的火光武器箱，请使用后再转职。");
            cm.dispose();
            return;
        }
    }

    if (status == 0) {
        if (cm.getJobId() % 100 == 0) {
            noAdvance += cm.getJobId() % 1000 == 0 ? "10级以上" : "30级以上";
        } else {
            noAdvance += cm.getJobId() % 10 == 0 ? "60级以上" : "100级以上";
            noAdvance += " 才能转职，你现在的等级为 " + cm.getLevel() + " 级。";
        }
        if (cm.getJobId() % 1000 == 0 || cm.getJobId() == 0 || cm.getJobId() == 4001 || cm.getJobId() == 4002 || cm.getJobId() == 3000 || cm.getJobId() == 2001 || cm.getJobId() == 2002 || cm.getJobId() == 2003 || cm.getJobId() == 2004 || cm.getJobId() == 2005 || cm.getJobId() == 2000 || cm.getJobId() == 6001 || cm.getJobId() == 3001 || cm.getJobId() == 3002 || cm.getJobId() == 6002 || cm.getJobId() == 15001) {
            if (cm.getLevel() >= 10) { //其他职业
                for (var i = 0; i < jobData.length; i++) {
                    if ((jobData[i][1] % 100 == 0) && (jobData[i][1] > cm.getJobId()) && (jobData[i][1] <= (600 + cm.getJobId()) && jobData[i][1] >= (100 + cm.getJobId()) || jobData[i][1] == (700 + cm.getJobId()))) {
                        advance += "\r\n#b#L" + jobData[i][1] + "#" + jobData[i][0] + "#l";
                    } else if (cm.getJobId() == 0 & jobData[i][1] % 100 == 0 && (jobData[i][1] > cm.getJobId()) && (jobData[i][1] < (600 + cm.getJobId()) || jobData[i][1] == (700 + cm.getJobId()))) {
                        advance += "\r\n#b#L" + jobData[i][1] + "#" + jobData[i][0] + "#l";
                    }
                }
            } else {
                cm.sendOk(noAdvance);
                cm.dispose();
                return;
            }
            first = true;
        } else if (cm.getJobId() % 100 == 0 || cm.getJobId() == 3101) { //第二次转职
            if (cm.getLevel() >= 30) {
                for (var i = 0; i < jobData.length; i++)
                    if (((jobData[i][1] % 10 == 0 && jobData[i][1] % 100 != 0)) && (jobData[i][1] > cm.getJobId() && jobData[i][1] <= (cm.getJobId() + 30)))
                        advance += "\r\n#b#L" + jobData[i][1] + "#" + jobData[i][0] + "#l";
            } else {
                cm.sendOk(noAdvance);
                cm.dispose();
                return;
            }

        } else if (cm.getJobId() % 10 == 0 || cm.getJobId() % 10 == 1 || cm.getJobId() == 3120 || cm.getJobId() == 3121 || cm.getJobId() == 2214) { // 第三次\4次转职
            if (cm.getLevel() >= (cm.getJobId() % 10 == 1 ? 100 : 60) && cm.getJobId() != 2211 && cm.getJobId() != 2214) {
                for (var i = 0; i < jobData.length; i++)
                    if (jobData[i][1] - 1 == cm.getJobId())
                        advance += "\r\n#b#L" + jobData[i][1] + "#" + jobData[i][0] + "#l";
            } else if (cm.getJobId() == 2211 && cm.getLevel() >= 60) {
                advance += "\r\n#b#L" + 2214 + "# 龙神（三转）#l";
            } else if (cm.getJobId() == 2214 && cm.getLevel() >= 100) {
                advance += "\r\n#b#L" + 2217 + "# 龙神（四转）#l";
            } else {
                cm.sendOk(noAdvance);
                cm.dispose();
                return;
            }
        } else {
            cm.sendOk(unable);
            cm.dispose();
            return;
        }
        advance += noThanks;
        cm.sendSimple(advance);
    } else if (status == 1) {
        if (selection == 1) {
            cm.sendOk("你现在不想转职吗？那好吧。等你想要转职可以来找我，我时时刻刻在这里。");
            cm.dispose();
        } else if (selection == 10) {
            cm.warp(270010111);
            cm.dispose();
        } else if (selection == 11) {
            cm.dispose();
            cm.openNpc(1530635, "五转");
        } else {
            newJob = selection;
            for (var i = 0; i < jobData.length; i++) {
                if (jobData[i][1] == newJob) {
                    newJobName = jobData[i][0];
                }
            }
            cm.sendNext("你确定想好要成为一个 #b" + newJobName + "#k 吗？\r\n\r\n#r - 战神转职、四转转职、暗影双刀转职，因为有学习技能操作，可能会延迟2~3秒，请不要关闭对话框。造成的技能异常不能恢复。\r\n\r\n#r - 转职后，会赠送道具。请确认你的道具栏每格都有2个以上的空格。如果转职后因背包格数不足而领取不到道具，不能恢复。")
        } //selection
    } else if (status == 2) {
        cm.changeJobById(newJob);
        // cm.gainItem(2431305, 1); //火光武器箱 根据角色情况而赠送道具
        cm.playerMessage(-1, "赠送给你 >>> 火光武器箱 一个，可以根据你的角色等级获取相应的道具！")
        //		if (first) {
        //			cm.resetAp();
        //		}//如果是一转，重置AP
        switch (newJob) {
            case 2700:
                equip(1352400); // Lv10 - 闪电宝珠(无描述)
                break;
            case 2710:
                equip(1352401); // Lv30 - 耀眼宝珠(无描述)
                break;
            case 2711:
                equip(1352402); // Lv60 - 闪耀宝珠(无描述)
                break;
            case 2712:
                equip(1352403); // Lv100 - 命运宝珠(无描述)
                break;
            case 6100:
                equip(1352500); // Lv10 - 诺巴精髓(无描述)
                break;
            case 6110:
                equip(1352501); // Lv30 - 守护之诺巴精髓(无描述)
                break;
            case 6111:
                equip(1352502); // Lv60 - 正义之诺巴精髓(无描述)
                break;
            case 6112:
                equip(1352503); // Lv100 - 真理之诺巴精髓(无描述)
                break;
            case 6500:
                equip(1352601); // Lv10 - 粉色灵魂手镯(无描述)
                break;
            case 6510:
                equip(1352602); // Lv30 - 紫色灵魂手镯(无描述)
                break;
            case 6511:
                equip(1352603); // Lv60 - 蓝色灵魂手镯(无描述)
                break;
            case 6512:
                equip(1352604); // Lv100 - 绿色灵魂手镯(无描述)
                break;
            case 3300:
            case 3310:
            case 3311:
            case 3312: {
                if (!cm.hasSkill(30001061)) {
                    cm.teachSkill(30001061, 1);
                }
                if (!cm.hasSkill(30001062)) {
                    cm.teachSkill(30001062, 1);
                }
                break;
            }
            case 222:
                cm.teachSkill(2221001, 0, 30, -1);
                cm.teachSkill(2221002, 0, 30, -1);
                cm.teachSkill(2221006, 0, 30, -1);
                break;
        }
        cm.sendOk("经过小助手的辛苦培养。从现在开始你已经是#b" + newJobName + "#k了！\r\n赠送给你#b火光武器箱#k一个，可以根据你的角色等级获取相应的道具！");
        cm.dispose();
    }
}

function equip(itemId) {
    cm.gainItemAndEquip(itemId, -10);
}
