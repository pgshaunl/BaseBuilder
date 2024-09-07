import { Command } from 'commander'
import { spawn } from 'node:child_process'

import { logger } from '../../utils/logger'

export function serve(program: Command) {
    return program
        .createCommand('serve')
        .description('serve project')
        .action(() => {
            logger.log('serve project')

            const command = 'npm'
            const params = ['run', 'dev']

            const child = spawn(command, params, {
                stdio: 'inherit'
            })

            child.on('close', code => {
                logger.log(`The process exited with code: ${code}`)
            })
        })
}
