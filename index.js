const request = require("request");
const express = require("express");
require("./uptime.js")();
const app = express();
const port = 3000;
const fs = require('fs')
require('dotenv').config()

const { Client, CustomStatus, RichPresence, getUUID } = require('discord.js-selfbot-v13');

const client = new Client();

client.on("ready", async () => {
	console.log(`✅ ${client.user.username} Started Online`);
	const {joinVoiceChannel} = require('@discordjs/voice');
	const channel = client.channels.cache.get("1215738730409627818"); // voice channel's id
	if (!channel) return console.log("The channel does not exist !");
	setInterval(() => {
			const connection = joinVoiceChannel({
				channelId: 1215738730409627818, // the voice channel's id
				guildId: 1215738542949531819, // the guild that the channel is in
				adapterCreator: channel.guild.voiceAdapterCreator, // and setting the voice adapter creator
				selfDeaf: false,
				selfMute: true,
			});
		  }, 6000)
		});  

client.login(process.env.TOKEN)
