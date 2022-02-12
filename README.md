# betwin

[![npm](https://img.shields.io/npm/v/betwin)](https://www.npmjs.com/package/betwin) [![GitHub](https://img.shields.io/github/license/tylim88/betwin?color=blue)](https://github.com/tylim88/betwin/blob/master/LICENSE) [![dependencies](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=dependencies&query=%24.dependencies.count&url=https%3A%2F%2Fapi.npmutil.com%2Fpackage%2Fbetwin)](https://www.npmjs.com/package/betwin?activeTab=dependencies) [![circleci](https://circleci.com/gh/tylim88/betwin.svg?style=shield)](https://app.circleci.com/pipelines/github/tylim88/betwin) [![Coverage Status](https://coveralls.io/repos/github/tylim88/betwin/badge.svg?branch=main)](https://coveralls.io/github/tylim88/betwin?branch=main)

🤞 Get middle values between 2 single digits or single alphabets

## Installation

```bash
npm i betwin
```

## 🎵 Usage

if first value is bigger than last value, return elements in descending order.

both type and run time are tested

deeply typed

```ts
import betwin from 'betwin'

// digit
betwin(0, 9) // [1, 2, 3, 4, 5, 6, 7, 8] : Digit[]
betwin(6, 3) // [5, 4] : Digit[]

// string digit
betwin('0', '9') // ['1', '2', '3', '4', '5', '6', '7', '8'] : StringDigit[]
betwin('6', '3') // ['5', '4'] : StringDigit[]

// lower case
betwin('p', 'v') // ['q', 'r', 's', 't', 'u'] : LowerCaseChar[]
betwin('e', 'a') // ['d', 'c', 'b'] : LowerCaseChar[]

// upper case
betwin('P', 'V') // ['Q', 'R', 'S', 'T', 'U'] : UpperCaseChar[]
betwin('E', 'A') // ['D', 'C', 'B'] : UpperCaseChar[]

// same data type but out of bound
// return <type>[] | undefined
betwin(11, 22) // undefined : number[] | undefined
betwin('11', '22') // undefined : string[] | undefined
betwin('PP', 'VV') // undefined : string[] | undefined
betwin(-4.1, 7.2) // undefined : number[] | undefined

// different data types
// type error: Argument of type '*' is not assignable to parameter of type '"first and last must be the same type"'.
// return undefined
betwin('1', 1) // undefined : undefined
betwin('b', 'E') // undefined : undefined
betwin('abc', -7) // undefined : undefined
```

see [test](https://github.com/tylim88/betwin/blob/main/src/index.test.ts) for more examples

## 🔨 Utility

most likely you wont need this because same type returns `<type>[] | undefined`

but if you do need finer control on type, you can also import some predefined types:

```ts
import { UpperCaseChar, LowerCaseChar, Digit, StringDigit } from 'betwin'
```

where

```ts
type StringDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'

type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type LowerCaseChar =
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

type UpperCaseChar =
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
```
