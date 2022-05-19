import { WordExtractor } from './wordExtractor/wordExtractor.class'
import { InputServiceFactory } from './io/input/input.factory'
import { OutputServiceFactory } from './io/output/output.factory'
import { OutputItemGenerator } from './outputItemGenerator/outputGenerator.class'
import { UtilService } from './utils/util.class'
import { LOG_LEVEL } from './constants/logLevel.constant'

//The entry point of the project.
export async function parse() {
    //get input and output values from process enviroment
    const argv = UtilService.getProcessArguments()

    const inputService = InputServiceFactory.createInputService({
        inputPath: argv.input,
    })
    const outputService = OutputServiceFactory.createOutputService({
        outputPath: argv.output,
    })
    //iterate over all lines 
    for await (const line of inputService.readLines()) {
        const wordExtractor = new WordExtractor(line)
        const logLevel = wordExtractor.getLogLevel()
        if (logLevel != LOG_LEVEL.ERROR) {
            continue
        }
        const dateTime = wordExtractor.getDateTime()
        const transactionId = wordExtractor.getTransactionId()
        const err = wordExtractor.getError()

        const outputItemGenerator = new OutputItemGenerator()
        outputItemGenerator.setTimeStamp(dateTime)
        outputItemGenerator.setLogLevel(logLevel)
        outputItemGenerator.setTransactionId(transactionId)
        outputItemGenerator.setError(err)

        outputService.addToOutputArray(outputItemGenerator.generateOutputItem())
    }
    outputService.write()
}

parse()
