import { build } from './base/build'
import { create } from './base/create'
import { greet } from './base/greet'
import { info } from './base/info'
import { preview } from './base/preview'
import { serve } from './base/serve'
import { registerCommand } from './registerCommand'


registerCommand(create)

registerCommand(build)

registerCommand(serve)

registerCommand(greet)

registerCommand(info)

registerCommand(preview)