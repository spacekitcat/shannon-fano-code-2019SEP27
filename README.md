# shannon-fano-code-2019SEP27

Small project to explore the Shannon-Fano coding scheme (just for fun).

## Progress

I've implemented a Transform stream to count byte occurrences from an input stream.

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
Not implemented yet.
```

File contents: `The quick brown fox jumps over the lazy dog.` (outputs are UTF-8 representation).

```bash
$ node . resources/b.txt
Not implemented yet.
```

File contents: `$$$$$zzzzzzzzzzzzzzzzzzzzzzz*********G@@@` (outputs are UTF-8 representation).

```bash
$ node . resources/c.txt
Not implemented yet.
```

File contents: `A_DEAD_DAD_CEDED_A_BAD_BABE_A_BEADED_ABACA_BED` (outputs are UTF-8 representation). This example is from Wikipedia article on Huffman coding and it matches.

```bash
$ node . resources/d.txt
Not implemented yet.
```
