import { Transform } from 'stream'
import { inherits } from 'util'

/**
 * a Stream transofrm to remove new lines
 */

function RemoveNewLineTransform(options) {
  Transform.call(this, options)
}

inherits(RemoveNewLineTransform, Transform)

RemoveNewLineTransform.prototype._transform = function(
  chunk,
  encoding,
  callback
) {
  const cleanedString = chunk.toString().replace(/\n/g, '')
  this.push(cleanedString)
  callback()
}

export default RemoveNewLineTransform