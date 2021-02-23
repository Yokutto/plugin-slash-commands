import type { Awaited, Command, Precondition } from '@sapphire/framework';
import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v8';
import type { SlashCommandBuilder } from '../structures/SlashCommandBuilder';

/**
 * Represents the function that is called when building a new slash command (or updates an existing one)
 *
 * @example
 * ```typescript
 * [SlashCommandBuilderFunction]() {
 *    return new SlashCommandBuilder().setName(this.name).setDescription('Examples are hard, ok?');
 * }
 * ```
 *
 * @example
 * ```typescript
 * [SlashCommandBuilderFunction]() {
 *    return {
 * 		  name: 'raw',
 * 		  description: 'You can use this too!'
 *    };
 * }
 * ```
 */
export const SlashCommandBuilderFunction = Symbol('SlashCommands.Builder');

/**
 * Represents the function that builds a new slash command (or updates an existing one)
 *
 * If you'd prefer, you may return the raw API data instead (however, the builder is preferred)
 *
 * @example
 * ```typescript
 * [SlashCommandBuilderFunction]() {
 *    return new SlashCommandBuilder().setName(this.name).setDescription('Examples are hard, ok?');
 * }
 * ```
 *
 * @example
 * ```typescript
 * [SlashCommandBuilderFunction]() {
 *    return {
 * 		  name: 'raw',
 * 		  description: 'You can use this too!'
 *    };
 * }
 * ```
 */
export interface ISlashCommandBuilderFunction {
	(): Awaited<SlashCommandBuilder | RESTPostAPIApplicationCommandsJSONBody>;
}

/**
 * Represents the function that is called when a slash command should be limited to some guild IDs
 *
 * @example
 * ```typescript
 * [SlashCommandGuildOnlyFunction]() {
 *    return ['737141877803057244'];
 * }
 * ```
 */
export const SlashCommandGuildOnlyFunction = Symbol('SlashCommand.GuildOnly');

/**
 * Represents the function that is called when a slash command should be limited to some guild ids
 *
 * @example
 * ```typescript
 * [SlashCommandGuildOnlyFunction]() {
 *    return ['737141877803057244'];
 * }
 * ```
 */
export interface ISlashCommandGuildOnlyFunction {
	(): Awaited<string[]>;
}

// TODO: SlashCommandPreParse

/**
 * Represents the function that is called when a slash command interaction is received
 *
 * @example
 * ```typescript
 * [SlashCommandRunFunction](interaction: SlashCommandInteraction) {
 * 	  return interaction.reply('Hello from slash commands!', { ephemeral: true });
 * }
 * ```
 */
export const SlashCommandRunFunction = Symbol('SlashCommands.Run');

/**
 * Represents the function that is called when a slash command interaction is received
 *
 * @example
 * ```typescript
 * [SlashCommandRunFunction](interaction: SlashCommandInteraction) {
 * 	  return interaction.reply('Hello from slash commands!', { ephemeral: true });
 * }
 * ```
 */
export interface ISlashCommandRunFunction {
	(interaction: SlashCommandInteraction, args: SlashCommandArgs, context: SlashCommandContext): Awaited<unknown>;
}

// Preconditions

/**
 * Represents the function that is called in a precondition when a slash command interaction is received
 *
 * @example
 * ```typescript
 * [SlashCommandPreconditionRunFunction](interaction: SlashCommandInteraction, command: Command) {
 *    return interaction.author.id === '139836912335716352' ? this.ok() : this.error('No');
 * }
 * ```
 */
export const SlashCommandPreconditionRunFunction = Symbol('SlashCommands.PreconditionRun');

/**
 * Represents the function that is called in a precondition when a slash command interaction is received
 *
 * @example
 * ```typescript
 * [SlashCommandPreconditionRunFunction](interaction: SlashCommandInteraction, command: Command) {
 *    return interaction.author.id === '139836912335716352' ? this.ok() : this.error('No');
 * }
 * ```
 */
export interface ISlashCommandPreconditionRunFunction {
	(interaction: SlashCommandInteraction, command: Command, context: Precondition.Context): Precondition.Result;
}
