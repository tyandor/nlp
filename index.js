const natural = require('natural');
const path = require("path");

const tknzr = new natural.WordTokenizer();
const stmmr = natural.PorterStemmer;
const NGrams = natural.NGrams;
const base_folder = path.join(path.dirname(require.resolve("natural")), "brill_pos_tagger");
const rulesFilename = base_folder + "/data/English/tr_from_posjs.txt";
const lexiconFilename = base_folder + "/data/English/lexicon_from_posjs.json";
const defaultCategory = 'N';
const lexicon = new natural.Lexicon(lexiconFilename, defaultCategory);
const rules = new natural.RuleSet(rulesFilename);
const tagger = new natural.BrillPOSTagger(lexicon, rules);

// data
const myString = "Lys soldered the beautiful jewelry pieces".split(" ");
const sentence = ["I", "see", "the", "man", "with", "the", "telescope"];
const strng = "All trespassers will be prosecuted. Therefore, some of those prosecuted will have trespassed";

// tokenize
let tknzd = tknzr.tokenize(strng);

// stem
tknzd.forEach(tkn => {
    console.log(stmmr.stem(tkn));
});

// pos tags
console.log(tagger.tag(myString));
console.log(tagger.tag(sentence));

