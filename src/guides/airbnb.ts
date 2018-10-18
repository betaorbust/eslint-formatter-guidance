import { RuleCollection } from './guide-types';

const rules: RuleCollection = {
    'array-bracket-spacing': { context: ['http://bit.ly/2AexQLf'] },
    'array-callback-return': { context: ['http://bit.ly/2AexCnn'] },
    'arrow-body-style': { context: ['http://bit.ly/2AexILL'] },
    'arrow-parens,': { context: ['http://bit.ly/2Aduh7U'] },
    'arrow-parens': { context: ['http://bit.ly/2AexJ2h'] },
    'arrow-spacing': { context: ['http://bit.ly/2Adk2jO'] },
    'block-spacing': { context: ['http://bit.ly/2AdCuZP'] },
    'brace-style': { context: ['http://bit.ly/2AexOmB'] },
    camelcase: { context: ['http://bit.ly/2AexV1v'] },
    'comma-dangle': { context: ['http://bit.ly/2AfgnCf'] },
    'comma-spacing': { context: ['http://bit.ly/2AexRyN'] },
    'comma-style': { context: ['http://bit.ly/2AexT9T'] },
    'computed-property-spacing': { context: ['http://bit.ly/2AeG8Tk'] },
    'dot-notation': { context: ['http://bit.ly/2AexKDn'] },
    'eol-last': { context: ['http://bit.ly/2yLDe6A'] },
    eqeqeq: { context: ['http://bit.ly/2AexMLv'] },
    'func-call-spacing': { context: ['http://bit.ly/2AexS5P'] },
    'func-style': { context: ['http://bit.ly/2AdNBC8'] },
    'function-paren-newline': { context: ['http://bit.ly/2AexHHH'] },
    'generator-star-spacing': { context: ['http://bit.ly/2AdCuJj'] },
    'id-length': { context: ['http://bit.ly/2AdLxd5'] },
    'implicit-arrow-linebreak': { context: ['http://bit.ly/2AdWFXC'] },
    'import/first': { context: ['http://bit.ly/2P9Qwnt'] },
    'import/no-mutable-exports': { context: ['http://bit.ly/2Ah4Sdu'] },
    'import/no-webpack-loader-syntax': { context: ['http://bit.ly/2ynUoYC'] },
    'import/prefer-default-export': { context: ['http://bit.ly/2P9M4oJ'] },
    indent: { context: ['http://bit.ly/2Adk2Ak'] },
    'key-spacing': { context: ['http://bit.ly/2AdNC9a'] },
    'keyword-spacing': { context: ['http://bit.ly/2AexPa9'] },
    'max-len': { context: ['http://bit.ly/2AdWGe8'] },
    'new-cap': { context: ['http://bit.ly/2AebJEt'] },
    'newline-per-chained-call': { context: ['http://bit.ly/2J5NoDK'] },
    'no-array-constructor': { context: ['http://bit.ly/2AexCDT'] },
    'no-case-declarations': { context: ['http://bit.ly/2AexNix'] },
    'no-confusing-arrow': { context: ['http://bit.ly/2AdF4Pk'] },
    'no-const-assign': { context: ['http://bit.ly/2AexBjj'] },
    'no-dupe-class-members': { context: ['http://bit.ly/2AexK6l'] },
    'no-duplicate-imports': { context: ['http://bit.ly/2AgJcy0'] },
    'no-else-return': { context: ['http://bit.ly/2AfhAcG'] },
    'no-eval': { context: ['http://bit.ly/2AexEeZ'] },
    'no-iterator': { context: ['http://bit.ly/2Ae719D'] },
    'no-loop-func': { context: ['http://bit.ly/2AexFzz'] },
    'no-mixed-operators': { context: ['http://bit.ly/2AexNPz'] },
    'no-multi-assign': { context: ['http://bit.ly/2AexMet'] },
    'no-multiple-empty-lines': { context: ['http://bit.ly/2Aegb6b'] },
    'no-nested-ternary': { context: ['http://bit.ly/2AdAXml'] },
    'no-new-func': { context: ['http://bit.ly/2AexF2x'] },
    'no-new-object': { context: ['http://bit.ly/2AegaiD'] },
    'no-new-wrappers': {
        context: [
            'http://bit.ly/2AexTGV',
            'http://bit.ly/2AexTXr',
            'http://bit.ly/2AdcC0b'
        ]
    },
    'no-param-reassign': {
        context: ['http://bit.ly/2Aegaz9', 'http://bit.ly/2AdcBt9']
    },
    'no-prototype-builtins': { context: ['http://bit.ly/2AdugRo'] },
    'no-restricted-globals': { context: ['http://bit.ly/2CqYFNt'] },
    'no-restricted-properties.': { context: ['http://bit.ly/2AexLap'] },
    'no-restricted-syntax': { context: ['http://bit.ly/2Ae719D'] },
    'no-trailing-spaces': { context: ['http://bit.ly/2AexSml'] },
    'no-undef': { context: ['http://bit.ly/2AdXqjm'] },
    'no-underscore-dangle': { context: ['http://bit.ly/2AexUKZ'] },
    'no-unneeded-ternary': { context: ['http://bit.ly/2AfgnlJ'] },
    'no-unused-vars': { context: ['http://bit.ly/2AegaPF'] },
    'no-useless-constructor': { context: ['http://bit.ly/2AexJzj'] },
    'no-useless-escape': { context: ['http://bit.ly/2AdXq2Q'] },
    'no-var': { context: ['http://bit.ly/2AeG85M'] },
    'no-whitespace-before-property': { context: ['http://bit.ly/2J5NoDK'] },
    'nonblock-statement-body-position': { context: ['http://bit.ly/2Ad5wsy'] },
    'object-curly-spacing': { context: ['http://bit.ly/2AexQuJ'] },
    'object-shorthand': {
        context: ['http://bit.ly/2AdCr05', 'http://bit.ly/2AdyIj2']
    },
    'one-var': { context: ['http://bit.ly/2AexLHr'] },
    'padded-blocks': { context: ['http://bit.ly/2AexPXH'] },
    'prefer-arrow-callback,': { context: ['http://bit.ly/2Adk2jO'] },
    'prefer-const,': { context: ['http://bit.ly/2AexBjj'] },
    'prefer-const': { context: ['http://bit.ly/2AeG8CO'] },
    'prefer-destructuring': {
        context: ['http://bit.ly/2AdF4yO', 'http://bit.ly/2AdXpvO']
    },
    'prefer-rest-params': { context: ['http://bit.ly/2AexFQ5'] },
    'prefer-spread': { context: ['http://bit.ly/2AexHYd'] },
    'prefer-template': { context: ['http://bit.ly/2AdCusN'] },
    'quote-props': { context: ['http://bit.ly/2AexBQl'] },
    quotes: { context: ['http://bit.ly/2AexDrr'] },
    radix: { context: ['http://bit.ly/2AexTXr'] },
    semi: { context: ['http://bit.ly/2AdyKYc'] },
    'space-before-blocks': {
        context: ['http://bit.ly/2AdZdVz', 'http://bit.ly/2AexHaF']
    },
    'space-before-function-paren': { context: ['http://bit.ly/2AdZdVz'] },
    'space-in-parens': { context: ['http://bit.ly/2AdF55Q'] },
    'space-infix-ops': { context: ['http://bit.ly/2AebJnX'] },
    'spaced-comment': { context: ['http://bit.ly/2AexOTD'] },
    'template-curly-spacing': { context: ['http://bit.ly/2AexDHX'] },
    'wrap-iife': { context: ['http://bit.ly/2AdAX5P'] }
};

export = {
    name: 'airbnb',
    schema: 1,
    rules
};