import yargs from 'yargs/yargs'

export class UtilService {
    //Get all process arguments 
    static getProcessArguments() {
        const argv = yargs(process.argv.slice(2))
            .options({
                input: { type: 'string' },
                output: { type: 'string' },
            })
            .parseSync()
        return argv
    }
}
