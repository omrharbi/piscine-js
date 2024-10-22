function pronoun(str) {
    str = str.toLowerCase();
    let Pronouns = ["i", 'you', "he", "she", "it", "they", "we"];
    const pronounSet = new Set(Pronouns);
    const words = str.split(/\s+/);
    let newObject = {};

    for (let i = 0; i < words.length; i++) {
        if (pronounSet.has(words[i])) {
            if (!newObject[words[i]]) {
                newObject[words[i]] = { word: [], count: 0 };
                
            }
            newObject[words[i]].count++;

            if (i < words.length - 1 && !pronounSet.has(words[i + 1])) {
                newObject[words[i]].word.push(words[i + 1].replace(/^,+|,+$/g, ''));
            }
        }
    }

    return newObject;
}
const ex = 'I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go'
console.log(pronoun(ex));

