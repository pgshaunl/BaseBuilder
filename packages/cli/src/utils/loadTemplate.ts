import { copy, remove } from 'fs-extra'
import { downloadTemplate } from 'giget'
import { join } from 'node:path'

import { logger } from './logger'

interface LoadTemplateParams {
    projectName: string
    templateName: string
    local?: boolean
}

export const loadLocalTemplate = async (params: Omit<LoadTemplateParams, 'local'>) => {
    const { templateName, projectName } = params
    copy(join(__dirname, `../templates/template-${templateName}`), `${process.cwd()}/${projectName}`)
}

export const loadRemoteTemplate = async (params: Omit<LoadTemplateParams, 'local' | 'template'>) => {
    const { projectName } = params
    const { dir } = await downloadTemplate('https://codeload.github.com/design-sparx/antd-multipurpose-dashboard/tar.gz/refs/heads/main', {
        dir: `${process.cwd()}/.temp`
    })

    await copy(dir, `${process.cwd()}/${projectName}`)

    try {
        await remove(`${process.cwd()}/.temp`);
    } catch (err) {
        logger.error('Error removing .temp directory:', err);
    }
}

export const loadTemplate = async (params: LoadTemplateParams) => {
    const { local, ...restParams } = params

    if (local) {
        await loadLocalTemplate(restParams)
    } else {
        await loadRemoteTemplate(restParams)
    }
}
