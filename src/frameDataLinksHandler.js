const { CHARACTER_TO_FRAME_DATA_MAP, FRAME_DATA_WEBSITE } = require('../utils/frameDataLinks.js'); 

function MatchCharacterToHandle(message) {
    var character;
    
    if (message.includes("banjo")) {
        character = CHARACTER_TO_FRAME_DATA_MAP.banjo_and_kazooie;
    }
    else if (message === "bayonetta" || message === "bayo") {
        character = CHARACTER_TO_FRAME_DATA_MAP.bayonetta;
    }
    else if (message === "bowser") {
        character = CHARACTER_TO_FRAME_DATA_MAP.bowser;
    }
    else if (message === "bowser jr" || message === "bowser jr.") {
        character = CHARACTER_TO_FRAME_DATA_MAP.bowser_jr;
    }
    else if (message === "byleth") {
        character = CHARACTER_TO_FRAME_DATA_MAP.byleth;
    }
    else if (message === "captain falcon") {
        character = CHARACTER_TO_FRAME_DATA_MAP.captain_falcon;
    }
    else if (message === "chrom") {
        character = CHARACTER_TO_FRAME_DATA_MAP.chrom;
    }
    else if (message === "cloud") {
        character = CHARACTER_TO_FRAME_DATA_MAP.cloud;
    }
    else if (message === "corrin") {
        character = CHARACTER_TO_FRAME_DATA_MAP.corrin;
    }
    else if (message === "daisy") {
        character = CHARACTER_TO_FRAME_DATA_MAP.daisy;
    }
    else if (message === "dark pit") {
        character = CHARACTER_TO_FRAME_DATA_MAP.dark_pit;
    }
    else if (message === "dark samus") {
        character = CHARACTER_TO_FRAME_DATA_MAP.dark_samus;
    }
    else if (message === "diddy kong" || message === "diddy") {
        character = CHARACTER_TO_FRAME_DATA_MAP.diddy_kong;
    }
    else if (message === "donkey kong" || message === "donkey" || message === "dk") {
        character = CHARACTER_TO_FRAME_DATA_MAP.donkey_kong;
    }
    else if (message === "dr mario" || message === "dr. mario") {
        character = CHARACTER_TO_FRAME_DATA_MAP.dr_mario;
    }
    else if (message === "duck hunt") {
        character = CHARACTER_TO_FRAME_DATA_MAP.duck_hunt;
    }
    else if (message === "falco") {
        character = CHARACTER_TO_FRAME_DATA_MAP.falco;
    }
    else if (message === "fox") {
        character = CHARACTER_TO_FRAME_DATA_MAP.fox;
    }
    else if (message === "ganondorf") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ganondorf;
    }
    else if (message === "greninja") {
        character = CHARACTER_TO_FRAME_DATA_MAP.greninja;
    }
    else if (message === "hero") {
        character = CHARACTER_TO_FRAME_DATA_MAP.hero;
    }
    else if (message === "ice climbers") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ice_climbers;
    }
    else if (message === "ike") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ike;
    }
    else if (message === "incineroar") {
        character = CHARACTER_TO_FRAME_DATA_MAP.incineroar;
    }
    else if (message === "inkling") {
        character = CHARACTER_TO_FRAME_DATA_MAP.inkling;
    }
    else if (message === "isabelle") {
        character = CHARACTER_TO_FRAME_DATA_MAP.isabelle;
    }
    else if (message === "jigglypuff" || message === "jiggly" || message === "puff") {
        character = CHARACTER_TO_FRAME_DATA_MAP.jigglypuff;
    }
    else if (message === "joker") {
        character = CHARACTER_TO_FRAME_DATA_MAP.joker;
    }
    else if (message === "ken") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ken;
    }
    else if (message === "king dedede" || message === "dedede" || message.includes("d3")) {
        character = CHARACTER_TO_FRAME_DATA_MAP.king_dedede;
    }
    else if (message === "king k rool" || message.includes("rool")) {
        character = CHARACTER_TO_FRAME_DATA_MAP.king_k_rool;
    }
    else if (message === "kirby") {
        character = CHARACTER_TO_FRAME_DATA_MAP.kirby;
    }
    else if (message === "link") {
        character = CHARACTER_TO_FRAME_DATA_MAP.link;
    }
    else if (message === "little mac" || message === "lil mac" || message === "mac") {
        character = CHARACTER_TO_FRAME_DATA_MAP.little_mac;
    }
    else if (message === "lucario") {
        character = CHARACTER_TO_FRAME_DATA_MAP.lucario;
    }
    else if (message === "lucas") {
        character = CHARACTER_TO_FRAME_DATA_MAP.lucas;
    }
    else if (message === "lucina") {
        character = CHARACTER_TO_FRAME_DATA_MAP.lucina;
    }
    else if (message === "luigi") {
        character = CHARACTER_TO_FRAME_DATA_MAP.luigi;
    }
    else if (message === "mario") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mario;
    }
    else if (message === "marth") {
        character = CHARACTER_TO_FRAME_DATA_MAP.marth;
    }
    else if (message === "mega man") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mega_man;
    }
    else if (message === "meta knight") {
        character = CHARACTER_TO_FRAME_DATA_MAP.meta_knight;
    }
    else if (message === "mewtwo") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mewtwo;
    }
    else if (message === "mii brawler") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mii_brawler;
    }
    else if (message === "mii gunner") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mii_gunner;
    }
    else if (message === "mii swordfighter") {
        character = CHARACTER_TO_FRAME_DATA_MAP.mii_swordfighter;
    }
    else if (message === "minmin" || message === "min min") {
        character = CHARACTER_TO_FRAME_DATA_MAP.minmin;
    }
    else if (message.includes("game and watch")) {
        character = CHARACTER_TO_FRAME_DATA_MAP.mr_game_and_watch;
    }
    else if (message === "ness") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ness;
    }
    else if (message === "olimar") {
        character = CHARACTER_TO_FRAME_DATA_MAP.olimar;
    }
    else if (message === "pacman" || message === "pac man") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pacman;
    }
    else if (message === "palutena") {
        character = CHARACTER_TO_FRAME_DATA_MAP.palutena;
    }
    else if (message === "peach") {
        character = CHARACTER_TO_FRAME_DATA_MAP.peach;
    }
    else if (message === "pichu") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pichu;
    }
    else if (message === "pikachu") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pikachu;
    }
    else if (message === "piranha plant" || message === "piranha") {
        character = CHARACTER_TO_FRAME_DATA_MAP.piranha_plant;
    }
    else if (message === "pit") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pit;
    }
    else if (message === "squirtle") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pt_squirtle;
    }
    else if (message === "ivysaur") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pt_ivysaur;
    }
    else if (message === "charizard") {
        character = CHARACTER_TO_FRAME_DATA_MAP.pt_charizard;
    }
    else if (message === "richter") {
        character = CHARACTER_TO_FRAME_DATA_MAP.richter;
    }
    else if (message === "ridley") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ridley;
    }
    else if (message === "rob") {
        character = CHARACTER_TO_FRAME_DATA_MAP.rob;
    }
    else if (message === "robin") {
        character = CHARACTER_TO_FRAME_DATA_MAP.robin;
    }
    else if (message === "rosalina") {
        character = CHARACTER_TO_FRAME_DATA_MAP.rosalina_and_luma;
    }
    else if (message === "roy") {
        character = CHARACTER_TO_FRAME_DATA_MAP.roy;
    }
    else if (message === "ryu") {
        character = CHARACTER_TO_FRAME_DATA_MAP.ryu;
    }
    else if (message === "samus") {
        character = CHARACTER_TO_FRAME_DATA_MAP.samus;
    }
    else if (message === "sephiroth") {
        character = CHARACTER_TO_FRAME_DATA_MAP.sephiroth;
    }
    else if (message === "sheik") {
        character = CHARACTER_TO_FRAME_DATA_MAP.sheik;
    }
    else if (message === "shulk") {
        character = CHARACTER_TO_FRAME_DATA_MAP.shulk;
    }
    else if (message === "simon") {
        character = CHARACTER_TO_FRAME_DATA_MAP.simon;
    }
    else if (message === "snake") {
        character = CHARACTER_TO_FRAME_DATA_MAP.snake;
    }
    else if (message === "sonic") {
        character = CHARACTER_TO_FRAME_DATA_MAP.sonic;
    }
    else if (message === "steve") {
        character = CHARACTER_TO_FRAME_DATA_MAP.steve;
    }
    else if (message === "terry") {
        character = CHARACTER_TO_FRAME_DATA_MAP.terry;
    }
    else if (message === "toon link") {
        character = CHARACTER_TO_FRAME_DATA_MAP.toon_link;
    }
    else if (message === "villager") {
        character = CHARACTER_TO_FRAME_DATA_MAP.villager;
    }
    else if (message === "wario") {
        character = CHARACTER_TO_FRAME_DATA_MAP.wario;
    }
    else if (message === "wii fit trainer" || message === "wii fit" || message === "wft") {
        character = CHARACTER_TO_FRAME_DATA_MAP.wii_fit_trainer;
    }
    else if (message === "wolf") {
        character = CHARACTER_TO_FRAME_DATA_MAP.wolf;
    }
    else if (message === "yoshi") {
        character = CHARACTER_TO_FRAME_DATA_MAP.yoshi;
    }
    else if (message === "young link") {
        character = CHARACTER_TO_FRAME_DATA_MAP.young_link;
    }
    else if (message === "zelda") {
        character = CHARACTER_TO_FRAME_DATA_MAP.zelda;
    }
    else if (message === "zero suit samus" || message === "zss") {
        character = CHARACTER_TO_FRAME_DATA_MAP.zero_suit_samus;
    }
    else {
        character = "";
    }

    return character;
}

function GenerateFrameDataLinkFromMessage(message) {
    const character = MatchCharacterToHandle(message);

    if (character === "") {
        return "Character not found: Please try writing the character name differently"
    }
    
    return FRAME_DATA_WEBSITE.concat(character);
}

module.exports.GenerateFrameDataLinkFromMessage = GenerateFrameDataLinkFromMessage;