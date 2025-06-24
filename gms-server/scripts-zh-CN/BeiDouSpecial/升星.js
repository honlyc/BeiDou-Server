// importPackage(java.util);
// importPackage(net.sf.odinms.client);
// importPackage(net.sf.odinms.server);

var 爱心 = "#fEffect/CharacterEff/1112905/0/0#";
var 红色箭头 = "#fUI/UIWindow.img/Quest/icon6/0#";
var 蓝色角点 = "#fUI/UIWindow.img/Item/Quality/1/0#";

var xnew1 = "★";
var xnew2 = "★★";
var xnew3 = "★★★";
var xnew4 = "★★★★";
var xnew5 = "★★★★★";
var xold1 = "★";
var xold2 = "★★";
var xold3 = "★★★";
var xold4 = "★★★★";
var xold5 = "★★★★★";
var xold0 = "";

//////////////////////////////////////////////////////////
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    const InventoryType = Java.type('org.gms.client.inventory.InventoryType');
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            var textz = "" + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + 爱心 + "\r\n"
            textz += " \t\t\t #e#d欢迎来到#r怀旧冒险岛#k#r升星系统#n \r\n"
            textz += "\t\t\t#e#d  每次升星全属性+100！！！#k#n\r\n"
            textz += "#L1##b" + 红色箭头 + "升级#e#b■#n#r★　　　　#e#b■" + 蓝色角点 + "  需要#v4310000#×100个#l\r\n";
            textz += "#L2##b" + 红色箭头 + "升级#e#b■#n#r★★　　　#e#b■" + 蓝色角点 + "  需要#v4310000#×200个#l\r\n";
            textz += "#L3##b" + 红色箭头 + "升级#e#b■#n#r★★★　　#e#b■" + 蓝色角点 + "  需要#v4310000#×300个#l\r\n";
            textz += "#L4##b" + 红色箭头 + "升级#e#b■#n#r★★★★　#e#b■" + 蓝色角点 + "  需要#v4310000#×400个#l\r\n";
            textz += "#L5##b" + 红色箭头 + "升级#e#b■#n#r★★★★★#e#b■" + 蓝色角点 + "  需要#v4310000#×500个#l\r\n";

            cm.sendSimple(textz);

        } else if (status == 1) {
            var ii = Java.type("org.gms.server.ItemInformationProvider").getInstance();
            const InventoryManipulator = Java.type('org.gms.client.inventory.manipulator.InventoryManipulator');
            var item = cm.getInventory(1).getItem(1);
            if (selection == 1) {
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1) == null || ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
                    cm.dispose();
                    return;
                }
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() >= xold1) {//检查是否等于这个物品
                    cm.sendOk("#e#d您的装备#r星级#d为#k【#b" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "#k】#d无需强化！！");
                    cm.dispose();
                    return;
                }
                if (cm.haveItem(4310000, 100)) {
                    var item = cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setOwner(xnew1);
                    // cm.gainItem(4310000, -100);
                    var hwchancess = 100;
                    item.setStr(item.getStr() * 1 + hwchancess);
                    item.setDex(item.getDex() * 1 + hwchancess);
                    item.setInt(item.getInt() * 1 + hwchancess);
                    item.setLuk(item.getLuk() * 1 + hwchancess);
                    item.setWdef(item.getWdef() * 1 + hwchancess);
                    item.setMdef(item.getMdef() * 1 + hwchancess);
                    item.setMatk(item.getMatk() * 1 + hwchancess);
                    item.setWatk(item.getWatk() * 1 + hwchancess);
                    item.setHp(item.getHp() * 1 + hwchancess);
                    item.setMp(item.getMp() * 1 + hwchancess);
                    InventoryManipulator.removeFromSlot(cm.getClient(), InventoryType.EQUIP, 1, 1, true);
                    InventoryManipulator.addFromDrop(cm.getClient(), item, false);
                    var a = item.getItemId();
                    // cm.serverNotice(6,"『升星公告』：恭喜【" + cm.getChar().getName() + "】的装备升为【" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "】 战斗力大幅提升！");
                    cm.sendOk("#e#b成功的将  #v" + a + "#提升至#r " + xnew1 + "");
                    cm.dispose();
                } else {
                    cm.sendOk("没有足够的#v4310000#");
                    cm.dispose();
                }


            } else if (selection == 2) {
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1) == null || ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
                    cm.dispose();
                    return;
                }
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() != xold1) {//检查是否等于这个物品
                    cm.sendOk("#e#d您的装备#r星级#d为#k【#b" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "#k】#d未满足强化要求！！");
                    cm.dispose();
                    return;
                }
                if (cm.haveItem(4310000, 200)) {
                    var item = cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setOwner(xnew2);
                    cm.gainItem(4310000, -200);
                    var hwchancess = 100;
                    item.setStr(item.getStr() * 1 + hwchancess);
                    item.setDex(item.getDex() * 1 + hwchancess);
                    item.setInt(item.getInt() * 1 + hwchancess);
                    item.setLuk(item.getLuk() * 1 + hwchancess);
                    item.setWdef(item.getWdef() * 1 + hwchancess);
                    item.setMdef(item.getMdef() * 1 + hwchancess);
                    item.setMatk(item.getMatk() * 1 + hwchancess);
                    item.setWatk(item.getWatk() * 1 + hwchancess);
                    item.setHp(item.getHp() * 1 + hwchancess);
                    item.setMp(item.getMp() * 1 + hwchancess);
                    InventoryManipulator.removeFromSlot(cm.getClient(), InventoryType.EQUIP, 1, 1, true);
                    InventoryManipulator.addFromDrop(cm.getClient(), item, false);
                    var a = item.getItemId();
                    // cm.serverNotice(6,"『升星公告』：恭喜【" + cm.getChar().getName() + "】的装备升为【" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "】 战斗力大幅提升！");
                    cm.sendOk("#e#b成功的将  #v" + a + "#提升至#r " + xnew2 + "");
                    cm.dispose();
                } else {
                    cm.sendOk("没有足够的#v4310000#");
                    cm.dispose();
                }


            } else if (selection == 3) {
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1) == null || ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
                    cm.dispose();
                    return;
                }
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() != xold2) {//检查是否等于这个物品
                    cm.sendOk("#e#d您的装备#r星级#d为#k【#b" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "#k】#d未满足强化要求！！");
                    cm.dispose();
                    return;
                }
                if (cm.haveItem(4310000, 300)) {
                    var item = cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setOwner(xnew3);
                    cm.gainItem(4310000, -300);
                    var hwchancess = 100;
                    item.setStr(item.getStr() * 1 + hwchancess);
                    item.setDex(item.getDex() * 1 + hwchancess);
                    item.setInt(item.getInt() * 1 + hwchancess);
                    item.setLuk(item.getLuk() * 1 + hwchancess);
                    item.setWdef(item.getWdef() * 1 + hwchancess);
                    item.setMdef(item.getMdef() * 1 + hwchancess);
                    item.setMatk(item.getMatk() * 1 + hwchancess);
                    item.setWatk(item.getWatk() * 1 + hwchancess);
                    item.setHp(item.getHp() * 1 + hwchancess);
                    item.setMp(item.getMp() * 1 + hwchancess);
                    InventoryManipulator.removeFromSlot(cm.getClient(), InventoryType.EQUIP, 1, 1, true);
                    InventoryManipulator.addFromDrop(cm.getClient(), item, false);
                    var a = item.getItemId();
                    // cm.serverNotice(6,"『升星公告』：恭喜【" + cm.getChar().getName() + "】的装备升为【" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "】 战斗力大幅提升！");
                    cm.sendOk("#e#b成功的将  #v" + a + "#提升至#r " + xnew3 + "");
                    cm.dispose();
                } else {
                    cm.sendOk("没有足够的#v4310000#");
                    cm.dispose();
                }


            } else if (selection == 4) {
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1) == null || ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
                    cm.dispose();
                    return;
                }
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() != xold3) {//检查是否等于这个物品
                    cm.sendOk("#e#d您的装备#r星级#d为#k【#b" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "#k】#d未满足强化要求！！");
                    cm.dispose();
                    return;
                }
                if (cm.haveItem(4310000, 400)) {
                    var item = cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setOwner(xnew4);
                    cm.gainItem(4310000, -400);
                    var hwchancess = 100;
                    item.setStr(item.getStr() * 1 + hwchancess);
                    item.setDex(item.getDex() * 1 + hwchancess);
                    item.setInt(item.getInt() * 1 + hwchancess);
                    item.setLuk(item.getLuk() * 1 + hwchancess);
                    item.setWdef(item.getWdef() * 1 + hwchancess);
                    item.setMdef(item.getMdef() * 1 + hwchancess);
                    item.setMatk(item.getMatk() * 1 + hwchancess);
                    item.setWatk(item.getWatk() * 1 + hwchancess);
                    item.setHp(item.getHp() * 1 + hwchancess);
                    item.setMp(item.getMp() * 1 + hwchancess);
                    InventoryManipulator.removeFromSlot(cm.getClient(), InventoryType.EQUIP, 1, 1, true);
                    InventoryManipulator.addFromDrop(cm.getClient(), item, false);
                    var a = item.getItemId();
                    // cm.serverNotice(6,"『升星公告』：恭喜【" + cm.getChar().getName() + "】的装备升为【" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "】 战斗力大幅提升！");
                    cm.sendOk("#e#b成功的将  #v" + a + "#提升至#r " + xnew4 + "");
                    cm.dispose();
                } else {
                    cm.sendOk("没有足够的#v4310000#");
                    cm.dispose();
                }


            } else if (selection == 5) {
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1) == null || ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("你的装备栏第一格没有装备，或者为商城物品，不能进行此操作!..");
                    cm.dispose();
                    return;
                }
                if (cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() != xold4) {
                    cm.sendOk("#e#d您的装备#r星级#d为#k【#b" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "#k】#d未满足强化要求！！");
                    cm.dispose();
                    return;
                }
                if (cm.haveItem(4310000, 500)) {
                    var item = cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setOwner(xnew5);
                    cm.gainItem(4310000, -500);
                    var hwchancess = 100;
                    item.setStr(item.getStr() * 1 + hwchancess);
                    item.setDex(item.getDex() * 1 + hwchancess);
                    item.setInt(item.getInt() * 1 + hwchancess);
                    item.setLuk(item.getLuk() * 1 + hwchancess);
                    item.setWdef(item.getWdef() * 1 + hwchancess);
                    item.setMdef(item.getMdef() * 1 + hwchancess);
                    item.setMatk(item.getMatk() * 1 + hwchancess);
                    item.setWatk(item.getWatk() * 1 + hwchancess);
                    item.setHp(item.getHp() * 1 + hwchancess);
                    item.setMp(item.getMp() * 1 + hwchancess);
                    InventoryManipulator.removeFromSlot(cm.getClient(), InventoryType.EQUIP, 1, 1, true);
                    InventoryManipulator.addFromDrop(cm.getClient(), item, false);
                    var a = item.getItemId();
                    // cm.serverNotice(6,"『升星公告』：恭喜【" + cm.getChar().getName() + "】的装备升为【" + cm.getChar().getInventory(InventoryType.EQUIP).getItem(1).getOwner() + "】 战斗力大幅提升！");
                    cm.sendOk("#e#b成功的将  #v" + a + "#提升至#r " + xnew5 + "");
                    cm.dispose();
                } else {
                    cm.sendOk("没有足够的#v4310000#");
                    cm.dispose();
                }

            }
        }
    }
}


