const natural = require('natural')
const wordnet = new natural.WordNet()
const etym = require('en-etym')

const testWord = "vocation"

wordnet.lookup(testWord, results => {
    results.forEach(result => {
        console.log("\n");
        console.log(result.synsetOffset);
        console.log(result.pos);
        console.log(result.synonyms);
        console.log(result.gloss);
    });
});

etym.getEtym(testWord).then(etymList => {
    console.log("\n");
    console.log("Etymology");
    console.log(etymList);
    /* etymList.map(item => {
        console.log(item.title);

        for (let from in item.etymDict) {
            console.log("From " + from + " " + from[value]);
        }
    }); */
});
