import { program } from "commander"

import './commands'
import './utils/loadTemplate'

program.version('0.0.1').name('slpack')

export const run = (args: string[]) => {
    program.parse(args)
}