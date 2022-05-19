import { FileInputService } from '../../src/io/fileIOServices/fileInput.class'
import readline from 'readline'
describe('FileInputService class', () => {
    let fileInputService: FileInputService
    beforeAll(async () => {
        fileInputService = new FileInputService('./app.log')
    })
    test('readLines function should return correct type', () => {
        expect(fileInputService.readLines()).toBeInstanceOf(readline.Interface)
    })
     test('readLines function should return correct value', async () => {
         for await (let line of fileInputService.readLines()) {
             expect(typeof line).toBe('string')
            break
        }
    })
})
