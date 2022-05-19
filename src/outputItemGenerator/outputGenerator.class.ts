import { OutputItemType } from '../io/output/output.type'
import { IOutputItemGenerator } from './outputGenerator.interface'

export class OutputItemGenerator implements IOutputItemGenerator {
    private outputItem: OutputItemType = {
        timestamp: 0,
        loglevel: '',
        err: '',
        transactionId: '',
    }
    setTimeStamp(datetime: string) {
        this.outputItem.timestamp = new Date(datetime).getTime()
    }
    setLogLevel(logLevel: string) {
        this.outputItem.loglevel = logLevel
    }
    setTransactionId(transactionId: string) {
        this.outputItem.transactionId = transactionId
    }
    setError(logMessage: string) {
        this.outputItem.err = logMessage
    }

    generateOutputItem() {
        return this.outputItem
    }
}
