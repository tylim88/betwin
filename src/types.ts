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

export type FindWideType<T> = T extends StringDigit
	? StringDigit
	: T extends Digit
	? Digit
	: T extends LowerCaseChar
	? LowerCaseChar
	: T extends UpperCaseChar
	? UpperCaseChar
	: number extends T
	? number
	: string extends T
	? string
	: never

export type ErrorTypeMismatched =
	`Error: 1st arg type and 2nd arg type is mismatched`

export type ErrorInvalidType = 'Error: type must be subtype of string or number'

export type IsEqual<T, U> = T[] extends U[]
	? U[] extends T[]
		? true
		: false
	: false
