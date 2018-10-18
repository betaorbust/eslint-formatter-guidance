import { RuleCollection } from './guide-types';

const rules: RuleCollection = {
    'react/boolean-prop-naming': { context: ['http://bit.ly/2Aeh2DL'] },
    'react/button-has-type': { context: ['http://bit.ly/2AcP7UL'] },
    'react/default-props-match-prop-types': {
        context: ['http://bit.ly/2Aeh3HP']
    },
    'react/destructuring-assignment': { context: ['http://bit.ly/2AfY1kF'] },
    'react/display-name': { context: ['http://bit.ly/2Aeh4eR'] },
    'react/forbid-component-props': { context: ['http://bit.ly/2AdHA8k'] },
    'react/forbid-dom-props': { context: ['http://bit.ly/2Aeh52p'] },
    'react/forbid-elements': { context: ['http://bit.ly/2Ae0uw0'] },
    'react/forbid-prop-types': { context: ['http://bit.ly/2Aeh5zr'] },
    'react/forbid-foreign-prop-types': { context: ['http://bit.ly/2AdLiyF'] },
    'react/no-access-state-in-setstate': { context: ['http://bit.ly/2Aeh5PX'] },
    'react/no-array-index-key': { context: ['http://bit.ly/2AdJiXn'] },
    'react/no-children-prop': { context: ['http://bit.ly/2AdHBZW'] },
    'react/no-danger': { context: ['http://bit.ly/2AdV0B4'] },
    'react/no-danger-with-children': { context: ['http://bit.ly/2AdTyPd'] },
    'react/no-deprecated': { context: ['http://bit.ly/2AdTzCL'] },
    'react/no-did-mount-set-state': { context: ['http://bit.ly/2AfY2Ff'] },
    'react/no-did-update-set-state': { context: ['http://bit.ly/2Afpoeu'] },
    'react/no-direct-mutation-state': { context: ['http://bit.ly/2AdNhmC'] },
    'react/no-find-dom-node': { context: ['http://bit.ly/2AfpjaL'] },
    'react/no-is-mounted': { context: ['http://bit.ly/2AepXVV'] },
    'react/no-multi-comp': { context: ['http://bit.ly/2AeC0CA'] },
    'react/no-redundant-should-component-update': {
        context: ['http://bit.ly/2AdOgU7']
    },
    'react/no-render-return-value': { context: ['http://bit.ly/2AekbDH'] },
    'react/no-set-state': { context: ['http://bit.ly/2Aeh66t'] },
    'react/no-typos': { context: ['http://bit.ly/2Ae6Nj2'] },
    'react/no-string-refs': { context: ['http://bit.ly/2AdHCgs'] },
    'react/no-this-in-sfc': { context: ['http://bit.ly/2Ae3QPe'] },
    'react/no-unescaped-entities': { context: ['http://bit.ly/2AfpiDJ'] },
    'react/no-unknown-property': { context: ['http://bit.ly/2Ae3rww'] },
    'react/no-unsafe': { context: ['http://bit.ly/2AeNKVU'] },
    'react/no-unused-prop-types': { context: ['http://bit.ly/2AdLiPb'] },
    'react/no-unused-state': { context: ['http://bit.ly/2AepYcr'] },
    'react/no-will-update-set-state': { context: ['http://bit.ly/2Afpov0'] },
    'react/prefer-es6-class': { context: ['http://bit.ly/2Aekb6F'] },
    'react/prefer-stateless-function': { context: ['http://bit.ly/2AcPazV'] },
    'react/prop-types': { context: ['http://bit.ly/2AdOhaD'] },
    'react/react-in-jsx-scope': { context: ['http://bit.ly/2AeNLJs'] },
    'react/require-default-props': { context: ['http://bit.ly/2Ae6MM0'] },
    'react/require-optimization': { context: ['http://bit.ly/2AcPaQr'] },
    'react/require-render-return': { context: ['http://bit.ly/2Ae3qZu'] },
    'react/self-closing-comp': { context: ['http://bit.ly/2AfpoLw'] },
    'react/sort-comp': { context: ['http://bit.ly/2AdLii9'] },
    'react/sort-prop-types': { context: ['http://bit.ly/2Aeh7ax'] },
    'react/style-prop-object': { context: ['http://bit.ly/2AdTzmf'] },
    'react/void-dom-elements-no-children': {
        context: ['http://bit.ly/2Afpjrh']
    },
    'react/jsx-boolean-value': { context: ['http://bit.ly/2AepYsX'] },
    'react/jsx-child-element-spacing': { context: ['http://bit.ly/2AdNiqG'] },
    'react/jsx-closing-bracket-location': {
        context: ['http://bit.ly/2AeNLcq']
    },
    'react/jsx-closing-tag-location': { context: ['http://bit.ly/2AdCLMi'] },
    'react/jsx-curly-spacing': { context: ['http://bit.ly/2AekbUd'] },
    'react/jsx-equals-spacing': { context: ['http://bit.ly/2Aekbnb'] },
    'react/jsx-filename-extension': { context: ['http://bit.ly/2Ae3rN2'] },
    'react/jsx-first-prop-new-line': { context: ['http://bit.ly/2AdHCNu'] },
    'react/jsx-handler-names': { context: ['http://bit.ly/2Ae8KvP'] },
    'react/jsx-indent': { context: ['http://bit.ly/2Ae3QyI'] },
    'react/jsx-indent-props': { context: ['http://bit.ly/2AepZx1'] },
    'react/jsx-key': { context: ['http://bit.ly/2Afpq66'] },
    'react/jsx-max-depth': { context: ['http://bit.ly/2AdJjKV'] },
    'react/jsx-max-props-per-line': { context: ['http://bit.ly/2AdHEF6'] },
    'react/jsx-no-bind': { context: ['http://bit.ly/2AdHDB2'] },
    'react/jsx-no-comment-textnodes': { context: ['http://bit.ly/2AdCNDU'] },
    'react/jsx-no-duplicate-props': { context: ['http://bit.ly/2Ae0wUE'] },
    'react/jsx-no-literals': { context: ['http://bit.ly/2AeC1Xa'] },
    'react/jsx-no-target-blank': { context: ['http://bit.ly/2AeNMgu'] },
    'react/jsx-no-undef': { context: ['http://bit.ly/2AdsQWU'] },
    'react/jsx-one-expression-per-line': { context: ['http://bit.ly/2AdNiHc'] },
    'react/jsx-curly-brace-presence': { context: ['http://bit.ly/2AekcYh'] },
    'react/jsx-pascal-case': { context: ['http://bit.ly/2AeC19C'] },
    'react/jsx-props-no-multi-spaces': { context: ['http://bit.ly/2AeNXIG'] },
    'react/jsx-sort-default-props': { context: ['http://bit.ly/2Ae3s3y'] },
    'react/jsx-sort-props': { context: ['http://bit.ly/2Ae8LQp'] },
    'react/jsx-space-before-closing': { context: ['http://bit.ly/2AdV186'] },
    'react/jsx-tag-spacing': { context: ['http://bit.ly/2AdJl5v'] },
    'react/jsx-uses-react': { context: ['http://bit.ly/2AdlNOb'] },
    'react/jsx-uses-vars': { context: ['http://bit.ly/2AdCOaW'] },
    'react/jsx-wrap-multilines': { context: ['http://bit.ly/2AepZNx'] }
};

export = {
    name: 'react',
    schema: 1,
    rules
};