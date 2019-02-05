/*eslint no-console: 0 */
import fibonacci from './component/fibonacci'
import reverse, {snakize} from './component/sentence'
import {frequency,frequencyFromData} from './component/pi'
import {flipFirstKElements} from './component/array'

const a = fibonacci(20)

console.log('Suite de fibonacci', a)

const sentence = "Ça te dit de rentrer chez moi et de faire des choses que je raconterai de toute façon à tout le monde?"

snakize(sentence).then(console.log)
reverse(sentence).then(console.log)
reverse(sentence).then(snakize).then(console.log)

const piFromData = frequencyFromData()
piFromData.then(console.log)
frequency().then(console.log)

console.log(flipFirstKElements(['1','2','3','4','5'],3))