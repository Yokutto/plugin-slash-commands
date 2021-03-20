import { slashCommandAssertions } from '../src/index';

const largeArray = Array.from({ length: 26 }, () => 1 as any);

describe('Slash Command Assertions tests', () => {
	test('GIVEN valid name THEN does not throw error', () => {
		expect(() => slashCommandAssertions.validateName('ping')).not.toThrowError();
	});

	test('GIVEN invalid name THEN throw error', () => {
		// @ts-expect-error Testing validation with invalid data
		expect(() => slashCommandAssertions.validateName(null)).toThrowError();

		// Too short of a name
		expect(() => slashCommandAssertions.validateName('')).toThrowError();

		// Invalid characters used
		expect(() => slashCommandAssertions.validateName('ABC123$%^&')).toThrowError();

		// Too long of a name
		expect(() => slashCommandAssertions.validateName('qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm')).toThrowError();
	});

	test('GIVEN valid description THEN does not throw error', () => {
		expect(() => slashCommandAssertions.validateDescription('This is an OwO moment fur sure!~')).not.toThrowError();
	});

	test('GIVEN invalid description THEN throw error', () => {
		// @ts-expect-error Testing validation with invalid data
		expect(() => slashCommandAssertions.validateDescription(null)).toThrowError();

		// Too short of a description
		expect(() => slashCommandAssertions.validateDescription('')).toThrowError();

		// Too long of a description
		expect(() =>
			slashCommandAssertions.validateDescription(
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam autem libero expedita vitae accusamus nostrum ipsam tempore repudiandae deserunt ipsum facilis, velit fugiat facere accusantium, explicabo corporis aliquam non quos.'
			)
		).toThrowError();
	});

	test('GIVEN valid array of options or choices THEN does not throw error', () => {
		expect(() => slashCommandAssertions.validateMaxOptionsLength([])).not.toThrowError();

		expect(() => slashCommandAssertions.validateMaxChoicesLength([])).not.toThrowError();
	});

	test('GIVEN invalid options or choices THEN throw error', () => {
		// @ts-expect-error Testing validation with invalid data
		expect(() => slashCommandAssertions.validateMaxOptionsLength(null)).toThrowError();

		// @ts-expect-error Testing validation with invalid data
		expect(() => slashCommandAssertions.validateMaxChoicesLength(null)).toThrowError();

		// Given an array that's too big
		expect(() => slashCommandAssertions.validateMaxOptionsLength(largeArray)).toThrowError();

		expect(() => slashCommandAssertions.validateMaxChoicesLength(largeArray)).toThrowError();
	});
});
