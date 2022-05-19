import * as parser from '../../src/parser'
import { UtilService } from '../../src/utils/util.class'
describe('Parser module', () => {
    beforeAll(async () => {
        UtilService.getProcessArguments = jest.fn()
    })

    it('should be defined', () => {
        expect(parser).toBeDefined()
    })
    test('parser should have parse function', () => {
        expect(parser.parse).toBeDefined()
    })
    test('getProcessArguments function from UtilService should be called in parser function call', () => {
        const getProcessArguments = jest.spyOn(
            UtilService,
            'getProcessArguments'
        )
        parser.parse()
        expect(getProcessArguments).toBeCalled()
    })
})
