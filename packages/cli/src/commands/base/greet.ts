import type { Command } from 'commander'
import prompts from 'prompts'

import { logger } from '../../utils/logger'

export function greet(program: Command) {
    return program
        .createCommand('greet')
        .description('greet')
        .action(async () => {
            const nameRes = await prompts({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })

            logger.log(` HELLO!!! ${nameRes.name}! Welcome to slpack!`)
        })
}
