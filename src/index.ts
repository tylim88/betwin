import {
	StringDigit,
	Digit,
	LowerCaseChar,
	UpperCaseChar,
	FindWideType,
	ErrorTypeMismatched,
	ErrorInvalidType,
} from './types'

const isDigit = (value: number | string) => {
	const num = parseFloat(value as string)
	return value <= 9 && value >= 0 && Number.isInteger(num)
}

const betwin = <
	T extends string | number,
	U extends T extends number
		? number
		: T extends string
		? string
		: ErrorInvalidType
>(
	first: T extends never
		? T
		: FindWideType<T> extends never
		? ErrorInvalidType
		: T,
	last: U extends never
		? U
		: FindWideType<U> extends FindWideType<T>
		? string | number extends infer R
			? R extends T
				? T
				: Exclude<FindWideType<U>, T>
			: never
		: FindWideType<U> extends never
		? ErrorInvalidType
		: T extends number
		? number extends U
			? U
			: ErrorTypeMismatched
		: T extends string
		? string extends U
			? U
			: ErrorTypeMismatched
		: number extends T
		? U extends number
			? U
			: ErrorTypeMismatched
		: string extends T
		? U extends string
			? U
			: ErrorTypeMismatched
		: ErrorTypeMismatched
): number extends T
	? number[] | undefined
	: string extends T
	? string[] | undefined
	: number extends U
	? number[] | undefined
	: string extends U
	? string[] | undefined
	: Exclude<FindWideType<U>, T | U>[] => {
	let arr: (StringDigit | Digit | LowerCaseChar | UpperCaseChar)[] = []
	if (typeof first !== typeof last) {
		// @ts-expect-error
		return undefined
	} else if (typeof first === 'number' && typeof last === 'number') {
		if (!isDigit(first) || !isDigit(last)) {
			// @ts-expect-error
			return undefined
		}
		arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	} else if (typeof first === 'string' && typeof last === 'string') {
		if (isDigit(first) && isDigit(last)) {
			arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
		} else if (first.length > 1 || last.length > 1) {
			// @ts-expect-error
			return undefined
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
			// @ts-expect-error
			return undefined
		}
	}

	if ((first as T) > (last as unknown as T)) {
		// @ts-expect-error
		return arr.reverse().filter(v => {
			return v < first && v > last
		})
	} else {
		// @ts-expect-error
		return arr.filter(v => {
			return v > first && v < last
		})
	}
}

export default betwin
