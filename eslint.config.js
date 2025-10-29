// eslint.config.js
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{js,jsx}'],
		extends: [
			js.configs.recommended,
			reactHooks.configs['recommended-latest'],
			reactRefresh.configs.vite,
		],
		plugins: { react },
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		settings: { react: { version: 'detect' } },
		rules: {
			// Indent con TAB
			indent: ['error', 'tab', { SwitchCase: 1 }],
			'no-mixed-spaces-and-tabs': 'error',
			'no-tabs': 'off',

			// JSX con TAB
			'react/jsx-indent': ['error', 'tab'],
			'react/jsx-indent-props': ['error', 'tab'],

			// Varie tue
			'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
		},
	},
])
