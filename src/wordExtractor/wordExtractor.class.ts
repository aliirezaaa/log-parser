import { SupportedWords } from './supportedWords.type'
import { WordRegex } from '../constants/regexPatterns.constant'
import { IWordExtractor } from './wordExtractor.interface'
export class WordExtractor implements IWordExtractor {
    private text: string
    constructor(text: string) {
        this.text = text
    }
    getDateTime(): string | null {
        return this.find(SupportedWords.DATE_TIME)
    }
    getLogLevel(): string | null {
        return this.find(SupportedWords.LOG_LEVEL)
    }
    getTransactionId(): string | null {
        const logMessage = JSON.parse(this.find(SupportedWords.LOG_MESSAGE))
        if (logMessage.transactionId) {
            return logMessage.transactionId
        } else {
            return null
        }
    }
    getError(): string | null {
        const logMessage = JSON.parse(this.find(SupportedWords.LOG_MESSAGE))
        if (logMessage.err) {
            return logMessage.err
        } else {
            return null
        }
    }
    //Find supported words using regex patterns
    find(wordType: SupportedWords): string | null {
        let regexPattern = null
        switch (wordType) {
            case SupportedWords.DATE_TIME:
                regexPattern = WordRegex.DATE_TIME
                break
            case SupportedWords.LOG_LEVEL:
                regexPattern = WordRegex.LOG_LEVEL
                break

            case SupportedWords.LOG_MESSAGE:
                regexPattern = WordRegex.LOG_MESSAGE
                break
        }
        const re = new RegExp(regexPattern, 'g')
        const r = this.text.match(re)
        if (r) {
            return r[0]
        } else {
            return null
        }
    }
}
