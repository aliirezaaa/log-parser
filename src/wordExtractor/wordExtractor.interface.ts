import { SupportedWords } from './supportedWords.type'

export interface IWordExtractor {
    find(wordType: SupportedWords): string | null
    getDateTime(): string | null
    getLogLevel(): string | null
    getTransactionId(): string | null
    getError(): string | null
}
