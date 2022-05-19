import { OutputItemType } from '../io/output/output.type'

export interface IOutputItemGenerator {
    setTimeStamp(datetime: string): void
    setLogLevel(logLevel: string): void
    setTransactionId(transactionId: string): void
    setError(logMessage: string): void
    generateOutputItem(): OutputItemType
}
