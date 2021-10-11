# Logicrux [![Discord Version](https://img.shields.io/npm/v/discord.js?color=%237289da&label=Discord.js)](https://github.com/discordjs/discord.js) [![Total lines](https://img.shields.io/tokei/lines/github/mariod8/Logicrux?color=red)](https://github.com/XAMPPRocky/tokei)


## Commands
There are multiple commands to use. All of them use the Discord Slash Commands workflow in order to integrate its syntaxis. Use the prefix `/` 

| Command | Bot Owner | Guild Owner | Administrators | Everybody | 
|----------------|:---------------:|:---------------:|:----------------:|:----------------:|
|/play|✅|✅|✅|✅|
|/profile|✅|✅|✅|✅|
|/say|✅|✅|✅|✅|
|/execute|✅|✅|✅|✅|
|/title|✅|✅|✅|✅|
|/ban|✅|✅|✅||
|/pardon|✅|✅|✅||
|/kick|✅|✅|✅||
|/mute|✅|✅|✅||
|/unmute|✅|✅|✅||
|/simulate|✅|✅|||
|/value|✅||||

## Building

You shouldn't be able to run this bot in other servers as it's build from scratch for LC.

Anyway if you'd like to check or whatever, you can clone the repository
```
git clone https://github.com/mariod8/logicrux
```

You'll need the NodeJS framework as well as npm in order to make it run. You can search how to install those for your SO.

Once you've done that, you can navigate to the cloned repository folder in your computer and type
```
npm install
```

That should install the required packages. It is recommended to not update them as that'll probably break something.

For running Logicrux type
```
ts-node index.ts
```