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

            const hobbyRes = await prompts({
                type: 'select',
                name: 'hobby',
                message: 'What is your hobby?',
                choices: [
                    { title: '🎮 Game', value: '🎮 Game' },
                    { title: '🎨 Drawing', value: '🎨 Drawing' },
                    { title: '🎸 Music', value: '🎸 Music' }
                ]
            })

            logger.log(`Hey,${nameRes.name}!Your hobby is ${hobbyRes.hobby}`)
        })
}
