module.exports = {
    root: true,

    env: {
        node: true,
    },

    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
    ],

    rules: {
        'max-len': 0,
        indent: ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },

    parserOptions: {
        parser: 'babel-eslint',
    },

    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
