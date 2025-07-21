
const { Client, GatewayIntentBits } = require("discord.js");
const { readFileSync } = require("node:fs");

const TOKEN = readFileSync('token.txt', {
    encoding: "utf-8"
});

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

console.log("Avor eiSveti");

client.on("ready", () => {
    console.log("Prestazikial");
    client.user.setPresence({
        activities: [{
            name: "décoder l'écriture d'Ovial"
        }]
    })
});

function invare_coFeur_ijQuoi_lokMisi(misi) {
    if (/.*[qQkK]+[uUwW]+([aA]+|[oO]+[iI]+)[ !\?\)\.]*$/.test(misi.content)) {
        misi.channel.send("feur")
    }   
}

client.on("messageCreate", (misi) => {
    invare_coFeur_ijQuoi_lokMisi(misi)
});

client.on("messageUpdate", (misi_likilial, misi_nevezial) => {
    invare_coFeur_ijQuoi_lokMisi(misi_nevezial)
})

client.login(TOKEN);