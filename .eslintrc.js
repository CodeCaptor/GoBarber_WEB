module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier/react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'ignore',
                custom: 'ignore',
                exceptions: [''],
            },
        ],
    },
    settings: {
        "import/resolver": {"babel-plugin-root-import": {
            rootPathSuffix: 'src'
        }}
    },
};
