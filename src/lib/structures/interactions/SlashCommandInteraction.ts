import type { APIInteraction } from 'discord-api-types/v8';

export class SlashCommandInteraction {}

export interface SlashCommandContext extends Record<PropertyKey, unknown> {
	rawData: APIInteraction;
}
