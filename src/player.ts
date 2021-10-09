import { Player } from "discord-music-player"

export class MyPlayer {
    private static player: Player

    public static setPlayer(player: Player) {
        this.player = player
    }

    public static getPlayer() {
        return this.player
    }
}
