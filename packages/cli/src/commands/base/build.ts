import { Command } from 'commander'
import { spawn } from 'node:child_process'

import { logger } from '../../utils/logger'

export function build(program: Command) {
    return program
        .createCommand('build')
        .description('build project')
        .action(() => {
            logger.start('Building project...')

            const command = 'npm'
            const params = ['run', 'build']

            const child = spawn(command, params, {
                stdio: 'inherit'
            })
            
            child.on('close', code => {
                if (code !== 0) {
                    logger.error(`The process exited with code: ${code}`)
                }
            })
        })
}