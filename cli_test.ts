import { flarectl } from "./cli.ts";
import { assert as ok, assertEquals as equals } from "jsr:@std/assert@0.225.3";
import { pathFinder } from "@gnome/exec/path-finder";

const hasExe = pathFinder.findExeSync("flarectl") !== undefined;

Deno.test({
    name: "flarectl",
    ignore: !hasExe,
    fn: async () => {
        const result = await flarectl("--version");
        equals(result.code, 0);
        ok(result.text().length > 3);
    },
});
