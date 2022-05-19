import { WordExtractor } from '../../src/wordExtractor/wordExtractor.class'
describe('WordExtractor class', () => {
    let wordExtractor: WordExtractor
    beforeAll(async () => {
        wordExtractor = new WordExtractor(
            '2021-08-09T02:12:51.259Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Cannot find user orders list","code": 404,"err":"Not found"}'
        )
    })
    test('getDateTime function should parse and return correct value', () => {
        const dateTime = wordExtractor.getDateTime()

        expect(dateTime).toBe('2021-08-09T02:12:51.259Z')
    })
    test('getLogLevel function should parse and return correct value', () => {
        const logLevel = wordExtractor.getLogLevel()

        expect(logLevel).toBe('error')
    })
    test('getTransactionId function should parse and return correct value', () => {
        const transactionId = wordExtractor.getTransactionId()

        expect(transactionId).toBe('9abc55b2-807b-4361-9dbe-aa88b1b2e978')
    })
    test('getError function should parse and return correct value', () => {
        const error = wordExtractor.getError()

        expect(error).toBe('Not found')
    })
})
