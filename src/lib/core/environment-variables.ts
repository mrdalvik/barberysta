import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const DIR_NAME = dirname(fileURLToPath(import.meta.url))
const ROOT_DIR = DIR_NAME + '/../../../'

export {
  ROOT_DIR
}
