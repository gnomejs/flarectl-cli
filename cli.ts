import { Command, type CommandArgs, type CommandOptions } from "@gnome/exec";
import { pathFinder } from "@gnome/exec/path-finder";

pathFinder.set("flarectl", {
    name: "flarectl",
    windows: [
        "${ALLUSERSPROFILE:-C:\\ProgramData}\\chocolatey\\bin\\flarectl.exe",
        "${ChocolateyInstall}\\bin\\flarectl.exe",
    ],
    linux: [
        "/usr/local/bin/flarectl",
    ],
});

/**
 * Represents a flarectl command.
 */
export class FlareCtlCommand extends Command {
    /**
     * Creates a new instance of the `ttCliCommand` class.
     * @param args The command arguments.
     * @param options The command options.
     */
    constructor(args?: CommandArgs, options?: CommandOptions) {
        super("flarectl", args, options);
    }
}

/**
 * Creates a new instance of the FlareCtlCommand class.
 * @param args - The command arguments.
 * @param options - The command options.
 * @returns An instance of the FlareCtlCommand class.
 */
export function flarectl(args?: CommandArgs, options?: CommandOptions): FlareCtlCommand {
    return new FlareCtlCommand(args, options);
}
