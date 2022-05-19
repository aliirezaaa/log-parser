import { FileOutputService } from '../../src/io/fileIOServices/fileOutput.class'
import readline from 'readline'
describe('FileInputService class', () => {
    let fileOutputService: FileOutputService
    beforeAll(async () => {
        fileOutputService = new FileOutputService('')
    })
    test('addToOutputArray function should be defiend', () => {
        expect(fileOutputService.addToOutputArray).toBeDefined()
    })
    test('write function should be defiend', () => {
        expect(fileOutputService.write).toBeDefined()
    })

    test('write function should do correct task', () => {
        fileOutputService.addToOutputArray({
            timestamp: 1628475171259,
            loglevel: 'error',
            err: 'Not found',
            transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
        })
        fileOutputService.write = jest.fn(() => fileOutputService.output)
        const result = fileOutputService.write()
        expect(result).toStrictEqual([{
            timestamp: 1628475171259,
            loglevel: 'error',
            err: 'Not found',
            transactionId: '9abc55b2-807b-4361-9dbe-aa88b1b2e978',
        }])
    })

})
