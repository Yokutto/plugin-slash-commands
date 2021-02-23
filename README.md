<div align="center">

<!-- ![Sapphire Logo](https://cdn.skyra.pw/gh-assets/sapphire.png) -->

# @vladfrangu/plugin-slash-commands

**Simple plugin for adding Slash Command support in your existing bot.**

[![GitHub](https://img.shields.io/github/license/vladfrangu/plugin-slash-commands)](https://github.com/vladfrangu/plugin-slash-commands/blob/main/LICENSE.md)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/vladfrangu/plugin-slash-commands.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/vladfrangu/plugin-slash-commands/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/vladfrangu/plugin-slash-commands.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/vladfrangu/plugin-slash-commands/context:javascript)
[![Coverage Status](https://coveralls.io/repos/github/vladfrangu/plugin-slash-commands/badge.svg?branch=main)](https://coveralls.io/github/vladfrangu/plugin-slash-commands?branch=main)
[![npm](https://img.shields.io/npm/v/@vladfrangu/plugin-slash-commands?color=crimson&logo=npm&style=flat-square)](https://www.npmjs.com/package/@vladfrangu/plugin-slash-commands)
[![Depfu](https://badges.depfu.com/badges/plugin-slash-commands/count.svg)](https://depfu.com/github/vladfrangu/plugin-slash-commands?project_id=plugin-slash-commands)

</div>

## Features

-   Create slash commands with ease
-   Implement slash command support in your existing code base
-   Support for the [discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) library
-   _Other things Vlad just doesn't know what/why to list cuz this is literally the basic jist_

## Installation

```bash
yarn add -D @vladfrangu/plugin-slash-commands
```

## Usage

_First, register the plugin_

> Note that at this time, we only support discord.js directly! You may use the classes directly if you want to.

```typescript
import '@vladfrangu/plugin-slash-commands/register-discordjs';
```

_Usage with TypeScript_

```typescript
import {
	SlashCommandBuilderFunction,
	SlashCommandBuilder,
	SlashCommandRunFunction,
	SlashCommandInteraction,
	SlashCommandArgs
} from '@vladfrangu/plugin-slash-commands';
import { Args, Command } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class UserCommand extends Command {
	public [SlashCommandBuilderFunction]() {
		return new SlashCommandBuilder().setName(this.name).setDescription('Examples are pretty hard, cut me slack!');
	}

	public [SlashCommandRunFunction](interaction: SlashCommandInteraction, args: SlashCommandArgs) {
		return interaction.reply('Hello from slash commands!', { ephemeral: true });
	}

	public run(message: Message, args: Args) {
		return message.reply('Hello from normal commands!');
	}
}
```

_Usage with JavaScript_

```javascript
const { SlashCommandBuilderFunction, SlashCommandBuilder, SlashCommandRunFunction } = require('@vladfrangu/plugin-slash-commands');
const { Args, Command } = require('@sapphire/framework');

exports.UserCommand = class extends Command {
	[SlashCommandBuilderFunction]() {
		return new SlashCommandBuilder().setName(this.name).setDescription('Examples are pretty hard, cut me slack!');
	}

	[SlashCommandRunFunction](interaction, args) {
		return interaction.reply('Hello from slash commands!', { ephemeral: true });
	}

	run(message, args) {
		return message.reply('Hello from normal commands!');
	}
};
```

## API Documentation

For the full API documentation please refer to the TypeDoc generated [documentation](https://vladfrangu.github.io/plugin-slash-commands).

## Buy us some doughnuts

Sapphire Project is and always will be open source, even if we don't get donations. That being said, we know there are amazing people who may still want to donate just to show their appreciation. Thank you very much in advance!

We accept donations through Ko-fi, PayPal, Patreon and GitHub Sponsorships. You can use the buttons below to donate through your method of choice.

| Donate With |                     Address                      |
| :---------: | :----------------------------------------------: |
|    Ko-fi    |   [Click Here](https://ko-fi.com/wolfgalvlad)    |
|   Patreon   | [Click Here](https://www.patreon.com/vladfrangu) |
|   PayPal    |    [Click Here](https://paypal.me/franguvlad)    |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
