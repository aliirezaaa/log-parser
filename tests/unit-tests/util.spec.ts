import { UtilService } from '../../src/utils/util.class'

describe('Util class', () => {
    beforeAll(async () => {
        //mock process arguments
        process.argv.push('--input')
        process.argv.push('./app.log')
        process.argv.push('--output')
        process.argv.push('./errors.json')
    })
    it('should be defined', () => {
        expect(UtilService).toBeDefined()
    })
    test('getProcessArgument should return correct values', () => {
        const result = UtilService.getProcessArguments()
        expect(result).toHaveProperty('input')
        expect(result).toHaveProperty('output')
        expect(result.input).toEqual('./app.log')
        expect(result.output).toEqual('./errors.json')
    })
})
