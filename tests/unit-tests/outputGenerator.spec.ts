import { OutputItemGenerator } from '../../src/outputItemGenerator/outputGenerator.class'
describe('OutputItemGenerator class', () => {
    let outputItemGenerator: OutputItemGenerator
    beforeAll(async () => {
        outputItemGenerator = new OutputItemGenerator()
    })
    test('getDateTime function should parse and return correct value', () => {
        outputItemGenerator.setTimeStamp('2021-08-09T02:12:51.259Z')
        outputItemGenerator.setError('Not found')
        outputItemGenerator.setLogLevel('error')
        outputItemGenerator.setTransactionId('9abc55b2-807b-4361-9dbe-aa88b1b2e978')

        expect(outputItemGenerator.generateOutputItem()).toStrictEqual({
            timestamp: 1628475171259,
            loglevel: 'error',
            err: 'Not found',
            transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
        })
    })
})
