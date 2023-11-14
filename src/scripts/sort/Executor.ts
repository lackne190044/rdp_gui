import app from '../../App.vue'
import { CommandFactory } from './Factory'

export class Executor {
    /**
     * Execute Command from CommandFactory based on key
     */
    public execute(key: string, args: string, the_app: typeof app): void {
        /**
         * Get the correct function from the builder  using the key and
         * execute it.
         *
         * @param key key to get the correct function of the dictionary
         * @param args arguments that get parsed to the function of the factory
         * @param the_app Reference of the root app for the commands
         */
        const builder = new CommandFactory()
        const sorter = builder.buildCommand(key)
        sorter.sort([the_app, args]) 
    }
}