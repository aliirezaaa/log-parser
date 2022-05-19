import { OutputItemType } from './output.type'
import { OutputOptions } from './outputOptions.type'
export interface IOutputService {
    addToOutputArray(output: OutputItemType): void
    write(): void
}
