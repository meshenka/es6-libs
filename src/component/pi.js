/**
 * @author Sylvain Gogel <sylvain.gogel@gmail.com>
 * 
 * pi functions, load 1M digits of Pi and do some stuff with it
 * 
 * for an async await implementation
 * @see https://stackoverflow.com/questions/33599688/how-to-use-es8-async-await-with-streams 
 * @see https://nodejs.org/api/stream.html#stream_stream_pipeline_streams_callback
 
 */
import fs from 'fs'
import { Transform, pipeline } from 'stream'
import { promisify } from 'util'

/**
 * a Stream transofrm to remove new lines
 */
const removeNewLineTransform = new Transform({
  transform(chunk, encoding, callback) {
    const cleanedString = chunk.toString().replace(/\n/g, '')
    this.push(cleanedString)
    callback()
  }
})
/**
 * reduce as a Stream Transform
 *
 * @see https://www.ramielcreations.com/the-hidden-power-of-node-js-streams/
 *
 * @param {} fn
 * @param {*} acc
 * @param {*} options
 */
const reduce = (fn, acc, options = {}) =>
  new Transform({
    objectMode: true,
    ...options,

    transform(chunk, encoding, callback) {
      try {
        acc = fn(acc, chunk)
      } catch (e) {
        return callback(e)
      }
      return callback()
    },

    flush(callback) {
      callback(null, acc)
    }
  })

// const asyncPipeline = promisify(pipeline)

/**
 * Compute 1M digits of Pi frequency
 * @see https://github.com/substack/stream-handbook
 */
const frequencyFromData = () => {
  return new Promise((resolve, reject) => {
    const file = './data/pi1000000.txt'

    /** @var Object <key>: <value> key is the digit, value is nbr of time present in the file */
    let stats = {}

    const piStream = fs
      .createReadStream(file, { encoding: 'utf8' })
      .pipe(removeNewLineTransform)

      .on('data', chunk => {
        const chunkAsArray = chunk.toString().split('')
        stats = chunkAsArray.reduce((acc, value) => {
          if (!acc[value]) {
            acc[value] = 1
          }
          acc[value] += 1
          return acc
        }, stats)
      })

      .on('finish', () => {
        resolve(stats) //resolve promise with
      })

      .on('error', reject)
  })
}

/**
 * cached version to avoid reading the big file
 */
const frequency = async () => {
  return {
    '0': 99960,
    '1': 99759,
    '2': 100027,
    '3': 100230,
    '4': 100231,
    '5': 100360,
    '6': 99549,
    '7': 99801,
    '8': 99986,
    '9': 100107
  }
}

export { frequency, frequencyFromData }
