import fibonacci from './component/fibonacci.js'
import reverse, {snakize} from './component/sentence.js'

const a = fibonacci(20)

console.log('Suite de fibonacci', a)

const sentence = "Ça te dit de rentrer chez moi et de faire des choses que je raconterai de toute façon à tout le monde?"

snakize(sentence).then(console.log)
reverse(sentence).then(console.log)
reverse(sentence).then(snakize).then(console.log)