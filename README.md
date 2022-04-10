# Logicrux [![Discord Version](https://img.shields.io/npm/v/discord.js?color=%237289da&label=Discord.js)](https://github.com/discordjs/discord.js) [![Build](https://img.shields.io/github/workflow/status/mariod8/logicrux/Logicrux)](https://github.com/XAMPPRocky/tokei) [![Latest Release](https://img.shields.io/github/v/release/mariod8/logicrux?include_prereleases)](https://github.com/mariod8/logicrux/releases/latest)
Another Discord Bot

## Commands
There are multiple commands to use. All of them use the Discord Slash Commands workflow in order to integrate its syntaxis. Use the prefix `/` to run them. You'll have some instruction on each commands's description.

Some commands may require certain permissions or roles to be executed. Here's a list showing that information briefly.

| Command | Bot Owner | Guild Owner | Administrators | Everybody | 
|----------------|:---------------:|:---------------:|:----------------:|:----------------:|
|/play|✅|✅|✅|✅|
|/stop|✅|✅|✅|✅|
|/loop|✅|✅|✅|✅|
|/pause|✅|✅|✅|✅|
|/resume|✅|✅|✅|✅|
|/shuffle|✅|✅|✅|✅|
|/skip|✅|✅|✅|✅|
|/profile|✅|✅|✅|✅|
|/say|✅|✅|✅|✅|
|/execute|✅|✅|✅|✅|
|/title|✅|✅|✅|✅|
|/ban|✅|✅|✅||
|/pardon|✅|✅|✅||
|/kick|✅|✅|✅||
|/mute|✅|✅|✅||
|/unmute|✅|✅|✅||
|/dev|✅||||
|/nuke|✅||||

## Building

You can run this bot in other servers. You'll have to provide a login token. It'll need to be specified in a `.env` file with the name TOKEN_OG `TOKEN_OG=...`

Anyway if you'd like to try, you can clone the repository to your computer with
```
git clone https://github.com/mariod8/logicrux
```

You'll need the NodeJS framework as well as npm in order to make it run. You can search on how to install those for your SO.

Once you've done that, you can navigate to the cloned repository folder in your computer and type
```
npm install
```

That should install the required packages. It is recommended to not update them as that'll probably break something.

For running Logicrux type
```
npx ts-node src/index.ts
```