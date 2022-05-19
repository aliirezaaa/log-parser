import fs from 'fs'
import { IOutputService } from '../output/output.interface'
import { OutputItemType } from '../output/output.type'
/**
 * This class related to handle output file
 */
export class FileOutputService implements IOutputService {
    private outputPath: string
    output: OutputItemType[] = []
    constructor(outputPath: string) {
        this.outputPath = outputPath
    }
    addToOutputArray(output: OutputItemType) {
        this.output.push(output)
    }

    write() {
        const jsonContent = JSON.stringify(this.output)
        fs.writeFile(this.outputPath, jsonContent, 'utf8', function (err) {
            if (err) {
                throw new Error(
                    'An error occured while writing JSON Object to File.'
                )
            }
        })
    }
}
