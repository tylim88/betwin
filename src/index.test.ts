import 'jest'
import betwin from './index'

describe('test string subtype with string subtype, number subtype with number subtype', () => {
	it('test digit', () => {
		expect(betwin(0, 9)).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
		expect(betwin(6, 3)).toEqual([5, 4])
		expect(
			betwin(
				6,
				// @ts-expect-error
				6
			)
		).toEqual([])
	})

	it('test string digit', () => {
		expect(betwin('0', '9')).toEqual(['1', '2', '3', '4', '5', '6', '7', '8'])
		expect(betwin('6', '3')).toEqual(['5', '4'])
		expect(
			betwin(
				'6',
				// @ts-expect-error
				'6'
			)
		).toEqual([])
	})

	it('test lower case char', () => {
		expect(betwin('p', 'v')).toEqual(['q', 'r', 's', 't', 'u'])
		expect(betwin('e', 'a')).toEqual(['d', 'c', 'b'])
		expect(
			betwin(
				'a',
				// @ts-expect-error
				'a'
			)
		).toEqual([])
	})

	it('test upper case char', () => {
		expect(betwin('P', 'V')).toEqual(['Q', 'R', 'S', 'T', 'U'])
		expect(betwin('E', 'A')).toEqual(['D', 'C', 'B'])
		expect(
			betwin(
				'E',
				// @ts-expect-error
				'E'
			)
		).toEqual([])
	})

	it('test negative digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				-1,
				-2
			)
		).toBe(undefined)
	})

	it('test 1+ digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				11,
				22
			)
		).toBe(undefined)
	})

	it('test 1+ negative digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				-16,
				-29
			)
		).toBe(undefined)
	})

	it('test 1+ negative positive digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				96,
				-24
			)
		).toBe(undefined)
	})

	it('test float', () => {
		expect(
			betwin(
				//@ts-expect-error
				6.1,
				3.2
			)
		).toBe(undefined)
	})

	it('test negative float', () => {
		expect(
			betwin(
				//@ts-expect-error
				-5.1,
				-0.2
			)
		).toBe(undefined)
	})

	it('test negative positive float', () => {
		expect(
			betwin(
				//@ts-expect-error
				-4.1,
				7.2
			)
		).toBe(undefined)
	})

	it('test 1+ string digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				'11',
				'22'
			)
		).toBe(undefined)
	})

	it('test 1+ charaters', () => {
		expect(
			betwin(
				//@ts-expect-error
				'PP',
				'VV'
			)
		).toBe(undefined)
	})

	it('test string and negative string number', () => {
		expect(
			betwin(
				//@ts-expect-error
				'abc',
				'-7'
			)
		).toBe(undefined)
	})

	it('test upper and lower char', () => {
		expect(
			betwin(
				'b',
				//@ts-expect-error
				'E'
			)
		).toBe(undefined)
	})
	it('test negative positive digit', () => {
		expect(
			betwin(
				9,
				//@ts-expect-error
				-2
			)
		).toBe(undefined)
	})
})

describe('test string subtype with number subtype', () => {
	it('test string digit and digit', () => {
		expect(
			betwin(
				'1',
				//@ts-expect-error
				1
			)
		).toBe(undefined)
		expect(
			betwin(
				1,
				//@ts-expect-error
				'1'
			)
		).toBe(undefined)
	})

	it('test string digit and negative number', () => {
		expect(
			betwin(
				'1',
				//@ts-expect-error
				-999
			)
		).toBe(undefined)
	})

	it('test string and digit', () => {
		expect(
			betwin(
				//@ts-expect-error
				'abc',
				6
			)
		).toBe(undefined)
		expect(
			betwin(
				6,
				//@ts-expect-error
				'abc'
			)
		).toBe(undefined)
	})

	it('test string and negative number', () => {
		expect(
			betwin(
				//@ts-expect-error
				'abc',
				-7
			)
		).toBe(undefined)
		expect(
			betwin(
				//@ts-expect-error
				-7,
				'abc'
			)
		).toBe(undefined)
	})

	it('test numeric string and digit', () => {
		expect(
			betwin(
				'1',
				//@ts-expect-error
				1
			)
		).toBe(undefined)
		expect(
			betwin(
				1,
				//@ts-expect-error
				'1'
			)
		).toBe(undefined)
	})
})

describe('test string with string, number with number', () => {
	it('number', () => {
		const a: number = 11
		const b: number = 22
		expect(betwin(a, b)).toBe(undefined)
		const c: number = 1
		const d: number = 9
		expect(betwin(c, d)).toEqual([2, 3, 4, 5, 6, 7, 8])
	})
	it('string', () => {
		const a: string = 'abc'
		const b: string = 'efg'
		expect(betwin(a, b)).toBe(undefined)
		const c: string = 'a'
		const d: string = 'c'
		expect(betwin(c, d)).toEqual(['b'])
	})
})

describe('test string with number', () => {
	it('string with number', () => {
		const a: number = 11
		const b: string = 'efg'
		expect(
			betwin(
				a,
				//@ts-expect-error
				b
			)
		).toBe(undefined)
		const c: string = 'a'
		const d: number = 9
		expect(
			betwin(
				c,
				//@ts-expect-error
				d
			)
		).toBe(undefined)
	})
	it('number with string', () => {
		const a: string = 'abc'
		const b: number = 22
		expect(
			betwin(
				a,
				//@ts-expect-error
				b
			)
		).toBe(undefined)
		const c: number = 1
		const d: string = 'c'
		expect(
			betwin(
				c,
				//@ts-expect-error
				d
			)
		).toBe(undefined)
	})
})

describe('test string with string sub type, number with number sub type', () => {
	it('number', () => {
		const a: number = 11
		const b = 22
		expect(betwin(a, b)).toBe(undefined)
		const c: number = 1
		const d = 9
		expect(betwin(d, c)).toEqual([8, 7, 6, 5, 4, 3, 2])
	})
	it('string', () => {
		const a: string = 'abc'
		const b = 'efg'
		expect(betwin(a, b)).toBe(undefined)
		const c: string = 'a'
		const d = 'c'
		expect(betwin(d, c)).toEqual(['b'])
	})
})

describe('test string with number sub type, number with string sub type', () => {
	it('number with string subtype', () => {
		const a: number = 11
		const b = 'efg'
		expect(
			betwin(
				a,
				//@ts-expect-error
				b
			)
		).toBe(undefined)
		const c: number = 1
		const d = 'c'
		expect(
			betwin(
				d,
				//@ts-expect-error
				c
			)
		).toBe(undefined)
	})
	it('string with number subtype', () => {
		const a: string = 'abc'
		const b = 22
		expect(
			betwin(
				a,
				//@ts-expect-error
				b
			)
		).toBe(undefined)
		const c: string = 'a'
		const d = 9
		expect(
			betwin(
				d,
				//@ts-expect-error
				c
			)
		).toBe(undefined)
	})
})
