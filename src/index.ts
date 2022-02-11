export type StringDigit =
	| '0'
	| '1'
	| '2'
	| '3'
	| '4'
	| '5'
	| '6'
	| '7'
	| '8'
	| '9'
export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

export type LowerCaseChar =
	| 'a'
	| 'b'
	| 'c'
	| 'd'
	| 'e'
	| 'f'
	| 'g'
	| 'h'
	| 'i'
	| 'j'
	| 'k'
	| 'l'
	| 'm'
	| 'n'
	| 'o'
	| 'p'
	| 'q'
	| 'r'
	| 's'
	| 't'
	| 'u'
	| 'v'
	| 'w'
	| 'x'
	| 'y'
	| 'z'

export type UpperCaseChar =
	| 'A'
	| 'B'
	| 'C'
	| 'D'
	| 'E'
	| 'F'
	| 'G'
	| 'H'
	| 'I'
	| 'J'
	| 'K'
	| 'L'
	| 'M'
	| 'N'
	| 'O'
	| 'P'
	| 'Q'
	| 'R'
	| 'S'
	| 'T'
	| 'U'
	| 'V'
	| 'W'
	| 'X'
	| 'Y'
	| 'Z'

type MustSame = 'all argument must be the same type'

type IsSameType<
	T extends string | number,
	U extends string | number
> = T extends LowerCaseChar
	? U extends LowerCaseChar
		? LowerCaseChar
		: MustSame
	: T extends Digit
	? U extends Digit
		? Digit
		: MustSame
	: T extends StringDigit
	? U extends StringDigit
		? StringDigit
		: MustSame
	: T extends UpperCaseChar
	? U extends UpperCaseChar
		? UpperCaseChar
		: MustSame
	: T extends string
	? U extends string
		? string
		: MustSame
	: T extends number
	? U extends number
		? number
		: MustSame
	: 'this error is impossible, please open issue on github'

const isDigit = (value: number | string) => {
	const num = parseFloat(value as string)
	return value <= 9 && value >= 0 && Number.isInteger(num)
}

const betwin = <T extends string | number, U extends string | number>(
	first: T,
	last: IsSameType<T, U> extends MustSame ? MustSame : U
): IsSameType<T, U> extends MustSame
	? undefined
	: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
	? IsSameType<T, U>[]
	: IsSameType<T, U>[] | undefined => {
	let arr: (StringDigit | Digit | LowerCaseChar | UpperCaseChar)[] = []
	if (typeof first !== typeof last) {
		return undefined as IsSameType<T, U> extends MustSame
			? undefined
			: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
			? IsSameType<T, U>[]
			: IsSameType<T, U>[] | undefined
	} else if (typeof first === 'number' && typeof last === 'number') {
		if (!isDigit(first) || !isDigit(last))
			return undefined as IsSameType<T, U> extends MustSame
				? undefined
				: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
				? IsSameType<T, U>[]
				: IsSameType<T, U>[] | undefined
		arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	} else if (typeof first === 'string' && typeof last === 'string') {
		if (isDigit(first) && isDigit(last)) {
			arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
		} else if (first.length > 1 || last.length > 1) {
			return undefined as IsSameType<T, U> extends MustSame
				? undefined
				: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
				? IsSameType<T, U>[]
				: IsSameType<T, U>[] | undefined
		} else if (first === first.toUpperCase() && last === last.toUpperCase()) {
			arr = [
				'A',
				'B',
				'C',
				'D',
				'E',
				'F',
				'G',
				'H',
				'I',
				'J',
				'K',
				'L',
				'M',
				'N',
				'O',
				'P',
				'Q',
				'R',
				'S',
				'T',
				'U',
				'V',
				'W',
				'X',
				'Y',
				'Z',
			]
		} else if (first === first.toLowerCase() && last === last.toLowerCase()) {
			arr = [
				'a',
				'b',
				'c',
				'd',
				'e',
				'f',
				'g',
				'h',
				'i',
				'j',
				'k',
				'l',
				'm',
				'n',
				'o',
				'p',
				'q',
				'r',
				's',
				't',
				'u',
				'v',
				'w',
				'x',
				'y',
				'z',
			]
		} else {
			return undefined as IsSameType<T, U> extends MustSame
				? undefined
				: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
				? IsSameType<T, U>[]
				: IsSameType<T, U>[] | undefined
		}
	}

	if ((first as T) > (last as unknown as T)) {
		return arr.reverse().filter(v => {
			return v < first && v > last
		}) as IsSameType<T, U> extends MustSame
			? undefined
			: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
			? IsSameType<T, U>[]
			: IsSameType<T, U>[] | undefined
	} else {
		return arr.filter(v => {
			return v > first && v < last
		}) as IsSameType<T, U> extends MustSame
			? undefined
			: T extends StringDigit | Digit | LowerCaseChar | UpperCaseChar
			? IsSameType<T, U>[]
			: IsSameType<T, U>[] | undefined
	}
}

export default betwin
