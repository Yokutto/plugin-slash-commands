import type { RESTPostAPIApplicationCommandsJSONBody } from 'discord-api-types/v8';

export class SlashCommandBuilder {
	/**
	 * The data that will be sent to Discord
	 * @private
	 */
	private rawFinalData: RESTPostAPIApplicationCommandsJSONBody;

	public constructor() {
		this.rawFinalData = {} as any;
	}

	/**
	 * Returns the final data sent to Discord. You won't need this unless you're manually
	 * creating slash commands via this builder.
	 */
	public get rawDiscordData() {
		this.validateRequiredParameters();
		return this.rawFinalData;
	}

	/**
	 * Validates the required parameters
	 */
	private validateRequiredParameters() {
		const { name, description } = this.rawFinalData;

		if (typeof name === 'undefined') throw new Error("You didn't provide a command name! Did you forget a `.setName()`?");
		if (!name.length || name.length > 32) throw new Error(`The command name you provided ("${name}") is too short or over 32 characters`);

		if (typeof description === 'undefined') throw new Error("You didn't provide a command description! Did you forget a `.setDescription()`?");
		if (!description.length || description.length > 100)
			throw new Error(`The command description you provided ("${description}" is too short or over 100 characters`);
	}
}
