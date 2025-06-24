package org.gms.client.command.commands.gm0;


import org.gms.client.Character;
import org.gms.client.Client;
import org.gms.client.command.Command;

public class PfpCommand extends Command {
    public PfpCommand() {
        setDescription("启动宠物全屏拣取:");
    }

    @Override
    public void execute(Client client, String[] params) {
        Character player = client.getPlayer();
//        client.announceDisableServerMessage();
        player.dropMessage(5, "宠物全屏拣取: " + (player.getPetFullPick() ? "关闭" : "开启"));
        player.setMPetFullPick(player.getPetFullPick() ? 0 : 1);
    }
}
