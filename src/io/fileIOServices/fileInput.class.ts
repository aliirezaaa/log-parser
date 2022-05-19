import fs from 'fs'
import readline from 'readline'
import { IInputService } from '../input/input.interface'
/**
 * This class related to handle input file
 */
export class FileInputService implements IInputService {
    private inputPath: string
    inputFileStream: fs.ReadStream
    constructor(inputPath: string) {
        this.inputPath = inputPath
        this.setInput()
    }
    //Create a fileStream from input file
    setInput(): void {
        if (!fs.existsSync(this.inputPath)) {
            throw new Error('The input file not exists.')
        }
        this.inputFileStream = fs.createReadStream(this.inputPath)
    }
    //This function returns an iterable object to prevent loading all of the files in the ram.
    readLines(): AsyncIterable<any> {
        const rl = readline.createInterface({
            input: this.inputFileStream,
            crlfDelay: Infinity,
        })

        return rl
    }
}
