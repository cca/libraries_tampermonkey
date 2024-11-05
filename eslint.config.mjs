import globals from "globals"
import pluginJs from "@eslint/js"


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ["**/*.js"],
        languageOptions: {sourceType: "script"}
    },
    {
        languageOptions: {
            globals: globals.browser
        },
        rules: {
            indent: ['warn', 4],
            'linebreak-style': ['error', 'unix'],
            semi: ['warn', 'never']
        }
    },
    pluginJs.configs.recommended,
]
