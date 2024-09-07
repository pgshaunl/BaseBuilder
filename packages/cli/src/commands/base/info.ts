import { Command } from 'commander'
import pc from 'picocolors'

import pkg from '../../../package.json'
import { logger } from '../../utils/logger'

export function info(program: Command) {
    return program
        .createCommand('info')
        .description('show slpack CLI info')
        .action(() => {
            logger.log(pc.bgGreen(`Product: slpack CLI v${pkg.version}`))
            logger.log(pc.green('Author: Shaun Li'))
        })
    }