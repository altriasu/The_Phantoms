import { Gamemap } from "./gamemap/base.js"
// import { Player } from "./player/base.js";
import { Kyo } from "./player/kyo.js";
import $ from 'jquery/dist/jquery.js';

class KOF {
    constructor(id) {
        this.$kof = $('#' + id);
        this.gamemap = new Gamemap(this);

        this.players = [
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];

    }
}

export {
    KOF
}