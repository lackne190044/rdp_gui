import { SortCommand } from "./Sort";
import { CommandDict } from "./Sort";


export class CommandFactory {
    /**
     * Return a method from CommandDict 
     */
    public buildCommand(key: string): SortCommand {
        /**
         * Return a method from CommandDict based on the key provided
         * 
         * @param key The key to be used in CommandDict
         * @returns A method of the type SortCommand.sort
         */
        const command = CommandDict[key]
        const object = new command()

        return object
    }
}
