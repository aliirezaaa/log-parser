import { FileOutputService } from '../fileIOServices/fileOutput.class'
import { IOutputService } from './output.interface'
/**
 * This class acts as factory for creation OutputService based on options
 */
export class OutputServiceFactory {
    public static createOutputService(options: any): IOutputService | null {

        if (options.outputPath != null) {
           return new FileOutputService(options.outputPath)
        }

        return null
    }
}
