import { Command } from 'commander'
import pc from 'picocolors'
import prompts from 'prompts'

import { logger } from '../../utils/logger'

export function create(program: Command) {
    return program
        .createCommand('create')
        .description('create project')
        .arguments('<name>')
        .option('-t, --template <template>', 'template name')
        .action(async (projectName, options) => {
            let { template } = options

            if (!template) {
                const templateRes = await prompts({
                    type: 'select',
                    name: 'template',
                    message: 'Please choose a template',
                    choices: [
                        { title: '🎮 React', value: 'react' },
                        { title: '🎨 React Typescript', value: 'react-ts' },
                        { title: '🎸 Vue', value: 'vue' },
                        { title: '🎸 Vue Typescript', value: 'vue-ts' },
                        { title: '🎸 Vanilla', value: 'vanilla' },
                        { title: '🎸 Vanilla Typescript', value: 'vanilla-ts' }
                    ]
                })
                template = templateRes.template
            }

            logger.info(`create project，name:${projectName}，${JSON.stringify(options)}`)
            logger.info(pc.bgCyan('create react typescript project'))
        })
}
