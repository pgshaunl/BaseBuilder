import { Command } from 'commander'
import ora from 'ora';
import pc from 'picocolors'
import prompts from 'prompts'

import { loadTemplate } from '../../utils/loadTemplate'
import { logger } from '../../utils/logger'


export function create(program: Command) {
    return program
        .createCommand('create')
        .description('create project')
        .arguments('<name>')
        .option('-t, --template <template>', 'template name')
        .option('-l, --local', 'use local resource', false)
        .action(async (projectName, options) => {
            let { template } = options;
            const { local } = options;

            const spinner = ora(`Initializing project creation for ${projectName}`).start();

            try {
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
                    });

                    template = templateRes.template;
                }

                spinner.text = `Creating project with ${template} template...`;

                logger.info(`create project, name:${projectName}，${JSON.stringify(options)}`);
                logger.info(pc.bgCyan(`Create ${template} template`));

                await loadTemplate({ projectName, templateName: template, local });

                spinner.succeed(`Project ${projectName} successfully created using ${template} template!`);
            } catch (error) {
                spinner.fail(`Failed to create project: ${error.message}`);
                logger.error(error);
            }
        });
}