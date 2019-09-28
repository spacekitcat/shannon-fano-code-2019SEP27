# shannon-fano-code-2019SEP27

Small project to explore the Shannon-Fano coding scheme (just for fun).

## Progress

I've implemented a Transform stream to count byte occurrences from an input stream, generate the tree and then traverse it to get generate the codes.

## Build

```bash
$ yarn
yarn install v1.13.0
[1/4] 🔍  Resolving packages...
[2/4] 🚚  Fetching packages...
[3/4] 🔗  Linking dependencies...
[4/4] 🔨  Building fresh packages...
✨  Done in 116.68s.
$ yarn build
yarn run v1.13.0
$ eslint src/**
$ babel src -d lib
Successfully compiled 4 files with Babel.
✨  Done in 1.93s.
```

## Test

```bash
yarn run v1.13.0
$ jest --coverage
 PASS  __tests__/ByteOccurrenceCountStream.test.js
 PASS  __tests__/Node.test.js
------------------------------|----------|----------|----------|----------|-------------------|
File                          |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
------------------------------|----------|----------|----------|----------|-------------------|
All files                     |      100 |      100 |      100 |      100 |                   |
 ByteOccurrenceCountStream.js |      100 |      100 |      100 |      100 |                   |
 Node.js                      |      100 |      100 |      100 |      100 |                   |
------------------------------|----------|----------|----------|----------|-------------------|
```

## Run

File contents: `HELLOWORLD` (outputs are UTF-8 representation).

```bash
$ node . resources/a.txt
000	68
0010	69
0011	72
01	76
10	79
110	82
111	87
```

File contents: `The quick brown fox jumps over the lazy dog.` (outputs are UTF-8 representation).

```bash
$ node . resources/b.txt
000	32
0010	46
00110	84
00111	97
01000	98
010010	99
010011	100
0101	101
01100	102
01101	103
01110	104
01111	105
10000	106
10001	107
10010	108
100110	109
100111	110
1010	111
10110	112
10111	113
11000	114
11001	115
11010	116
11011	117
11100	118
11101	119
11110	120
111110	121
111111	122
```

File contents: `$$$$$zzzzzzzzzzzzzzzzzzzzzzz*********G@@@` (outputs are UTF-8 representation).

```bash
$ node . resources/c.txt
00    36
010   42
0110  64
0111  71
1	  122
```

File contents: `A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED` (outputs are UTF-8 representation). This example is from Wikipedia article on `Huffman_coding` and it matches.

```bash
$ node . resources/d.txt
00	65
010	66
011	67
10	68
110	69
111	95
```

File contents: `AAAAAAAAAAAAAAABBBBBBBCCCCCCDDDDDDEEEEE` (outputs are UTF-8 representation). This example is from Wikipedia article on `Shannon-Fano_coding` and it matches.

```bash
$ node . resources/e.txt
00	65
01	66
10	67
110	68
111	69
```


