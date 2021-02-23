import { AsyncPreconditionResult, Command, ok, Precondition, PreconditionContext, PreconditionStore, Result, UserError } from '@sapphire/framework';
import { Store } from '@sapphire/pieces';
import { ISlashCommandPreconditionRunFunction, SlashCommandPreconditionRunFunction } from '../../utils/Symbols';

function getPreconditionStoreConstructor() {
	const originalStore = Store.injectedContext.stores.get('preconditions');
	return originalStore.constructor as typeof PreconditionStore;
}

export class SlashCommandPreconditionStore extends getPreconditionStoreConstructor() {
	public async slashCommandRun(interaction: SlashCommandInteraction, command: Command, context: PreconditionContext = {}) {
		for (const precondition of this['globalPreconditions'] as Precondition[]) {
			const slashCommandHandler = Reflect.get(precondition, SlashCommandPreconditionRunFunction) as ISlashCommandPreconditionRunFunction | null;

			if (slashCommandHandler) {
				const result: Result<unknown, UserError> = await Reflect.apply(slashCommandHandler, precondition, [interaction, command, context]);

				if (!result.success) return result;
			}
		}

		return ok();
	}
}

declare module '@sapphire/framework' {
	export interface PreconditionStore {
		slashCommandRun(interaction: SlashCommandInteraction, command: Command, context?: PreconditionContext): AsyncPreconditionResult;
	}
}
