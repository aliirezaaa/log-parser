import { FileInputService } from '../fileIOServices/fileInput.class'
import { IInputService } from './input.interface'
import { InputOptions } from './inputOptions.type'
/**
 * This class acts as factory for creation InputService based on options
 */
export class InputServiceFactory {
    public static createInputService(
        options: InputOptions
    ): IInputService | null {
        if (options.inputPath != null) {
            return new FileInputService(options.inputPath)
        }
        if (options.dbName) {
            throw new Error('this feature should be implement')
        }
        return null
    }
}
