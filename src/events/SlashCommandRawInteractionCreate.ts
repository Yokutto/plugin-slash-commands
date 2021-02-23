import type { Command } from '@sapphire/framework';
import type { APIInteraction } from 'discord-api-types/v8';

export interface SlashCommandPreRunPayload {
	interaction: SlashCommandInteraction;
	command: Command;
	rawData: APIInteraction;
}

// client.ws event
