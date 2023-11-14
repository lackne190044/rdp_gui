import app from '../../App.vue'

export class SortCommand {
  /**
   * Base Class for Sort Commands that implement different ways to sort the values.
   */
  public sort(args: [typeof app, string]): void {
    /**
     * Base sort Method
     * 
     * @param args [
     * 0: root app that executes this command
     * 1: argument used to sort
     * ]
     */
  }
}

class SortType extends SortCommand {
  /**
   * Sort by Type 
   */
  public sort(args: [typeof app, string]): void {
    /**
     * Sort values by Type based on args
     * 
     * @param args [
     * 0: root app that executes this command
     * 1: argument used to sort
     * ]
     */
    const the_app = args[0]
    the_app.filter_type = the_app.getTypeId(args[1])
  }
}

class SortStart extends SortCommand {
  /**
   * Sort by StartTime 
   */
  public sort(args: [typeof app, string]): void {
    /**
     * Sort values by Time based on args
     * 
     * @param args [
     * 0: root app that executes this command
     * 1: argument used to sort
     * ]
     */
    const the_app = args[0]
    the_app.filter_start = args[1]
  }
}

class SortEnd extends SortCommand {
  /**
   * Sort by EndTime 
   */
  public sort(args: [typeof app, string]): void {
    /**
     * Sort values by Time based on args
     * 
     * @param args [
     * 0: root app that executes this command
     * 1: argument used to sort
     * ]
     */
    const the_app = args[0]
    the_app.filter_end = args[1]
  }
}

export const CommandDict: { [key: string] : typeof SortCommand } = {
  "type": SortType,
  "start": SortStart,
  "end": SortEnd,
}