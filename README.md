# betwin

[![npm](https://img.shields.io/npm/v/betwin)](https://www.npmjs.com/package/betwin) [![GitHub](https://img.shields.io/github/license/tylim88/betwin?color=blue)](https://github.com/tylim88/betwin/blob/master/LICENSE) [![dependencies](https://img.shields.io/badge/dynamic/json?color=brightgreen&label=dependencies&query=%24.dependencies.count&url=https%3A%2F%2Fapi.npmutil.com%2Fpackage%2Fbetwin)](https://www.npmjs.com/package/betwin?activeTab=dependencies) [![circleci](https://circleci.com/gh/tylim88/betwin.svg?style=shield)](https://app.circleci.com/pipelines/github/tylim88/betwin) [![Coverage Status](https://coveralls.io/repos/github/tylim88/betwin/badge.svg?branch=main)](https://coveralls.io/github/tylim88/betwin?branch=main)

🤞 Get values in between 2 single digits or alphabets

## Installation

```bash
npm i betwin
```

## 🎵 Usage

if first value is bigger than last value, return elements in descending order.

both type and run time are tested

deeply typed

The return type is not perfect, I will improve it again when I have more time.

```ts
import betwin from 'betwin'

// digit
betwin(0, 9) // [1, 2, 3, 4, 5, 6, 7, 8], type: Exclude<Digit, 0 | 9>[]
betwin(6, 3) // [5, 4], type: Exclude<Digit, 5 | 4>[]

// string digit
betwin('0', '9') // ['1', '2', '3', '4', '5', '6', '7', '8'], type: Exclude<StringDigit, '0' | '9'>[]
betwin('6', '3') // ['5', '4'], type: Exclude<StringDigit, '6' | '3'>[]

// lower case
betwin('p', 'v') // ['q', 'r', 's', 't', 'u'], type: Exclude<LowerCaseChar, 'p' | 'w' >[]
betwin('e', 'a') // ['d', 'c', 'b'], type: Exclude<LowerCaseChar, 'e' | 'a' >[]

// upper case
betwin('P', 'V') // ['Q', 'R', 'S', 'T', 'U'], type: Exclude<UpperCaseChar, 'P' | 'V'>[]
betwin('E', 'A') // ['D', 'C', 'B'], type: Exclude<UpperCaseChar, 'E' | 'A'>[]

// accept supertype
betwin(8 as number, 4) // [7, 6, 5, 4], type: Exclude<Digit, 8 | 4>[]
betwin('T', 'U' as string) // ['v'], type: Exclude<UpperCaseChar, 'T' | 'U' >[]
betwin('t' as string, 'u' as string) // ['v'], type: Exclude<LowerCaseChar, 't' | 'u' >[]

// same arguments trigger type error
betwin(5, 5) // [], type: Exclude<Digit, 5>[]

// out of bound data trigger type error and return undefined
betwin(11, 22) // undefined, type: number[] | undefined
betwin('11', '22') // undefined, type: string[] | undefined
betwin('PP', 'VV') // undefined, type: string[] | undefined
betwin(-4.1, 7.2) // undefined, type : number[] | undefined

// different data types trigger type error and return undefined
betwin('1', 1) // undefined, type: undefined
betwin('b', 'E') // undefined, type: undefined
betwin('abc' as string, -7) // undefined, type: undefined
betwin(99.9 as number, 'xy' as string) // undefined, type: undefined
betwin(0.45, 'U' as string) // undefined, type: undefined
```

see [test](https://github.com/tylim88/betwin/blob/main/src/index.test.ts) for more examples

## 🔨 Utility

in case you need some predefined types:

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
