
# Log parser

Reading the specific logs from the input file, parse and filter items with the error log level, and writing them to the output file.

## Features

- Using regex patterns
- Ready to read file from database (It should be implemented.)
- Unit-testing ready


## Run Locally

Clone the project

```bash
  git clone https://github.com/aliirezaaa/log-parser.git
```

Go to the project directory

```bash
  cd log-parser

```

Install dependencies

```bash
  npm install
```

Build the project

```bash
   npx tsc
```

Run the parser

```bash
  node .\dist\parser.js --input ./app.log --output ./errors.json  
```

## Running Tests

To run tests, run the following command

```bash
  npm run test
```