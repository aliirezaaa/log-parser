export interface IInputService {
    setInput(): void
    readLines(): AsyncIterable<any>
}
