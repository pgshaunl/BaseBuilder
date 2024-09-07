import { Command } from 'commander'
import { spawn } from 'node:child_process'

import { logger } from '../../utils/logger'

export function build(program: Command) {
    return program
        .createCommand('build')
        .description('build project')
        .action(() => {
            logger.info('build project')

            const command = 'npm'
            const params = ['run', 'build']

            const child = spawn(command, params, {
                stdio: 'inherit'
            })

            child.on('close', code => {
                logger.log(`The process exited with code:${code}`)
            })
        })
}