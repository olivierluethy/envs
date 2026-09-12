# envs

A tiny Node.js command-line tool that URL-encodes a piece of text read from standard input.

## Features

- Reads one line of input and prints the encoded result.
- `-e` flag encodes the text with `encodeURIComponent`.
- Trims leading and trailing whitespace before encoding.
- Falls back to returning the text unchanged for unknown flags.

## Tech

- Node.js (`readline` module), plain JavaScript.

## Usage

Run the script and type the text followed by the encoding flag, separated by a space:

```bash
node Codierung.js
# then type, for example:
hello world -e
# output: hello
```

The program reads a single line from stdin, splits it into `text` and an encoding
type, encodes the text, prints the result and exits.
