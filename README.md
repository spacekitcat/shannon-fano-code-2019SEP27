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
000	D
0010	E
0011	H
01	L
10	O
110	R
111	W
```

File contents: `The quick brown fox jumps over the lazy dog.` (outputs are UTF-8 representation).

```bash
$ node . resources/b.txt
000
0010	.
00110	T
00111	a
01000	b
010010	c
010011	d
0101	e
01100	f
01101	g
01110	h
01111	i
10000	j
10001	k
10010	l
100110	m
100111	n
1010	o
10110	p
10111	q
11000	r
11001	s
11010	t
11011	u
11100	v
11101	w
11110	x
111110	y
111111	z
```

File contents: `$$$$$zzzzzzzzzzzzzzzzzzzzzzz*********G@@@` (outputs are UTF-8 representation).

```bash
$ node . resources/c.txt
00	$
010	*
0110	@
0111	G
1	z
```

File contents: `A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED` (outputs are UTF-8 representation). This example is from Wikipedia article on `Huffman_coding` and it matches.

```bash
$ node . resources/d.txt
00	A
010	B
011	C
10	D
110	E
111	_
```

File contents: `AAAAAAAAAAAAAAABBBBBBBCCCCCCDDDDDDEEEEE` (outputs are UTF-8 representation). This example is from Wikipedia article on `Shannon-Fano_coding` and it matches.

```bash
$ node . resources/e.txt
00	A
01	B
10	C
110	D
111	E
```


