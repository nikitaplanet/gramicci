module.exports = {
    singleQuote: true, // false
    semi: true, // true
    tabWidth: 4, // 4
    printWidth: 150, // 80
    useTabs: true, // false
    quoteProps: 'as-needed', // as-needed
    trailingComma: 'all', // all
    bracketSpacing: false, // true
    bracketSameLine: true, // false
    plugins: ['prettier-plugin-organize-attributes'],
    attributeGroups: ['^v-if', '^v-else-if', '^v-else', '^v-model', '^v-', '^:', '^@', '^ref', '^id', '^class', '$DEFAULT'],
    attributeSort: 'ASC',
};
