import 'jest'
import betwin from './index'

describe('test betwin with correct type', () => {
	it('test digit', () => {
		expect(betwin(0, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
		expect(betwin(6, 3)).toEqual([5, 4])
	})

	it('test string digit', () => {
		expect(betwin('0', '9')).toEqual(['1', '2', '3', '4', '5', '6', '7', '8'])
		expect(betwin('6', '3')).toEqual(['5', '4'])
	})

	it('test lower case char', () => {
		expect(betwin('p', 'v')).toEqual(['q', 'r', 's', 't', 'u'])
		expect(betwin('e', 'a')).toEqual(['d', 'c', 'b'])
	})

	it('test upper case char', () => {
		expect(betwin('P', 'V')).toEqual(['Q', 'R', 'S', 'T', 'U'])
		expect(betwin('E', 'A')).toEqual(['D', 'C', 'B'])
	})

	it('test negative digit', () => {
		expect(betwin(-1, -2)).toBe(undefined)
	})

	it('test 1+ digit', () => {
		expect(betwin(11, 22)).toBe(undefined)
	})

	it('test 1+ negative digit', () => {
		expect(betwin(-16, -29)).toBe(undefined)
	})

	it('test 1+ negative positive digit', () => {
		expect(betwin(96, -24)).toBe(undefined)
	})

	it('test float', () => {
		expect(betwin(6.1, 3.2)).toBe(undefined)
	})

	it('test negative float', () => {
		expect(betwin(-5.1, -0.2)).toBe(undefined)
	})

	it('test negative positive float', () => {
		expect(betwin(-4.1, 7.2)).toBe(undefined)
	})

	it('test 1+ string digit', () => {
		expect(betwin('11', '22')).toBe(undefined)
	})

	it('test 1+ charaters', () => {
		expect(betwin('PP', 'VV')).toBe(undefined)
	})
})

describe('test betwin with incorrect type(for js use case)', () => {
	it('test string digit and digit', () => {
		//@ts-expect-error
		expect(betwin('1', 1)).toBe(undefined)
	})

	it('test string digit and number', () => {
		//@ts-expect-error
		expect(betwin('1', -999)).toBe(undefined)
	})

	it('test string and digit', () => {
		//@ts-expect-error
		expect(betwin('abc', 6)).toBe(undefined)
	})

	it('test string and number', () => {
		//@ts-expect-error
		expect(betwin('abc', -7)).toBe(undefined)
	})

	it('test numeric string and digit', () => {
		//@ts-expect-error
		expect(betwin('1', 1)).toBe(undefined)
	})

	it('test upper and lower char', () => {
		//@ts-expect-error
		expect(betwin('b', 'E')).toBe(undefined)
	})

	it('test negative positive digit', () => {
		//@ts-expect-error
		expect(betwin(9, -2)).toBe(undefined)
	})
})
