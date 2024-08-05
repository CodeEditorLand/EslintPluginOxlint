// These rules are automatically generated by scripts/generate-rules.ts

const pedanticRules = {
  'array-callback-return': 'off',
  'max-classes-per-file': 'off',
  'max-lines': 'off',
  'no-array-constructor': 'off',
  'no-case-declarations': 'off',
  'no-constructor-return': 'off',
  'no-fallthrough': 'off',
  'no-inner-declarations': 'off',
  'no-new-wrappers': 'off',
  'no-prototype-builtins': 'off',
  'no-redeclare': 'off',
  'no-self-compare': 'off',
  radix: 'off',
  'require-await': 'off',
  'symbol-description': 'off',
  'import/max-dependencies': 'off',
  'jsdoc/require-param': 'off',
  'jsdoc/require-param-description': 'off',
  'jsdoc/require-param-name': 'off',
  'jsdoc/require-param-type': 'off',
  'jsdoc/require-returns': 'off',
  'jsdoc/require-returns-description': 'off',
  'jsdoc/require-returns-type': 'off',
  'react/checked-requires-onchange-or-readonly': 'off',
  'react/jsx-no-useless-fragment': 'off',
  'react/no-unescaped-entities': 'off',
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/no-duplicate-enum-values': 'off',
  '@typescript-eslint/prefer-enum-initializers': 'off',
  'unicorn/new-for-builtins': 'off',
  'unicorn/no-lonely-if': 'off',
  'unicorn/no-negated-condition': 'off',
  'unicorn/no-negation-in-equality-check': 'off',
  'unicorn/no-new-buffer': 'off',
  'unicorn/no-object-as-default-parameter': 'off',
  'unicorn/no-static-only-class': 'off',
  'unicorn/no-this-assignment': 'off',
  'unicorn/no-typeof-undefined': 'off',
  'unicorn/no-unreadable-iife': 'off',
  'unicorn/no-useless-switch-case': 'off',
  'unicorn/prefer-array-flat': 'off',
  'unicorn/prefer-array-some': 'off',
  'unicorn/prefer-blob-reading-methods': 'off',
  'unicorn/prefer-date-now': 'off',
  'unicorn/prefer-dom-node-dataset': 'off',
  'unicorn/prefer-dom-node-remove': 'off',
  'unicorn/prefer-event-target': 'off',
  'unicorn/prefer-math-trunc': 'off',
  'unicorn/prefer-native-coercion-functions': 'off',
  'unicorn/prefer-regexp-test': 'off',
  'unicorn/prefer-string-replace-all': 'off',
  'unicorn/prefer-string-slice': 'off',
  'unicorn/prefer-type-error': 'off',
};

const nurseryRules = {
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unused-vars': 'off',
  'import/export': 'off',
  'import/no-deprecated': 'off',
  'import/no-unused-modules': 'off',
  'react/require-render-return': 'off',
  'react/rules-of-hooks': 'off',
  'tree-shaking/no-side-effects-in-initialization': 'off',
};

const restrictionRules = {
  'default-case': 'off',
  'no-bitwise': 'off',
  'no-console': 'off',
  'no-empty': 'off',
  'no-empty-function': 'off',
  'no-eq-null': 'off',
  'no-eval': 'off',
  'no-iterator': 'off',
  'no-proto': 'off',
  'no-regex-spaces': 'off',
  'no-restricted-globals': 'off',
  'no-undefined': 'off',
  'no-unsafe-optional-chaining': 'off',
  'no-var': 'off',
  'no-void': 'off',
  'import/no-amd': 'off',
  'import/no-cycle': 'off',
  'import/no-default-export': 'off',
  'import/no-webpack-loader-syntax': 'off',
  'jsdoc/check-access': 'off',
  'jsdoc/empty-tags': 'off',
  'promise/avoid-new': 'off',
  'react/button-has-type': 'off',
  'react/no-danger': 'off',
  'react/no-unknown-property': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/no-dynamic-delete': 'off',
  '@typescript-eslint/no-namespace': 'off',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
  '@typescript-eslint/no-non-null-assertion': 'off',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/prefer-literal-enum-member': 'off',
  'unicorn/no-abusive-eslint-disable': 'off',
  'unicorn/no-anonymous-default-export': 'off',
  'unicorn/no-array-for-each': 'off',
  'unicorn/no-array-reduce': 'off',
  'unicorn/no-length-as-slice-end': 'off',
  'unicorn/no-magic-array-flat-depth': 'off',
  'unicorn/no-process-exit': 'off',
  'unicorn/prefer-modern-math-apis': 'off',
  'unicorn/prefer-number-properties': 'off',
};

const styleRules = {
  'default-case-last': 'off',
  'default-param-last': 'off',
  'guard-for-in': 'off',
  'max-params': 'off',
  'no-continue': 'off',
  'no-label-var': 'off',
  'no-multi-str': 'off',
  'no-script-url': 'off',
  'no-template-curly-in-string': 'off',
  'no-ternary': 'off',
  'prefer-exponentiation-operator': 'off',
  'jest/max-expects': 'off',
  'jest/max-nested-describe': 'off',
  'jest/no-confusing-set-timeout': 'off',
  'jest/no-done-callback': 'off',
  'jest/no-duplicate-hooks': 'off',
  'jest/no-hooks': 'off',
  'jest/no-identical-title': 'off',
  'jest/no-interpolation-in-snapshots': 'off',
  'jest/no-large-snapshots': 'off',
  'jest/no-mocks-import': 'off',
  'jest/no-restricted-jest-methods': 'off',
  'jest/no-restricted-matchers': 'off',
  'jest/no-test-return-statement': 'off',
  'jest/prefer-called-with': 'off',
  'jest/prefer-equality-matcher': 'off',
  'jest/prefer-hooks-in-order': 'off',
  'jest/prefer-hooks-on-top': 'off',
  'jest/prefer-to-contain': 'off',
  'jest/require-hook': 'off',
  'jest/require-top-level-describe': 'off',
  'promise/param-names': 'off',
  'react/jsx-curly-brace-presence': 'off',
  'react/no-set-state': 'off',
  'react/prefer-es6-class': 'off',
  '@typescript-eslint/adjacent-overload-signatures': 'off',
  '@typescript-eslint/no-empty-interface': 'off',
  '@typescript-eslint/prefer-for-of': 'off',
  'unicorn/catch-error-name': 'off',
  'unicorn/error-message': 'off',
  'unicorn/filename-case': 'off',
  'unicorn/no-await-expression-member': 'off',
  'unicorn/no-unreadable-array-destructuring': 'off',
  'unicorn/prefer-array-flat-map': 'off',
  'unicorn/prefer-includes': 'off',
  'unicorn/prefer-logical-operator-over-ternary': 'off',
  'unicorn/prefer-modern-dom-apis': 'off',
  'unicorn/prefer-optional-catch-binding': 'off',
  'unicorn/prefer-reflect-apply': 'off',
  'unicorn/require-array-join-separator': 'off',
  'unicorn/text-encoding-identifier-case': 'off',
  'unicorn/throw-new-error': 'off',
};

const conditionalFixRules = {
  eqeqeq: 'off',
  'prefer-numeric-literals': 'off',
  'sort-imports': 'off',
  'use-isnan': 'off',
  'valid-typeof': 'off',
  'jest/no-jasmine-globals': 'off',
  'jest/no-untyped-mock-factory': 'off',
  'jest/prefer-mock-promise-shorthand': 'off',
  'jsx-a11y/aria-props': 'off',
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-imports': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/prefer-as-const': 'off',
  '@typescript-eslint/prefer-function-type': 'off',
  'unicorn/explicit-length-check': 'off',
  'unicorn/no-nested-ternary': 'off',
  'unicorn/no-single-promise-in-promise-methods': 'off',
  'unicorn/no-unnecessary-await': 'off',
  'unicorn/no-useless-fallback-in-spread': 'off',
  'unicorn/no-useless-spread': 'off',
  'unicorn/prefer-dom-node-text-content': 'off',
  'unicorn/prefer-query-selector': 'off',
  'unicorn/prefer-spread': 'off',
};

const correctnessRules = {
  'for-direction': 'off',
  'no-async-promise-executor': 'off',
  'no-caller': 'off',
  'no-class-assign': 'off',
  'no-compare-neg-zero': 'off',
  'no-cond-assign': 'off',
  'no-const-assign': 'off',
  'no-constant-binary-expression': 'off',
  'no-constant-condition': 'off',
  'no-control-regex': 'off',
  'no-delete-var': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-else-if': 'off',
  'no-dupe-keys': 'off',
  'no-duplicate-case': 'off',
  'no-empty-character-class': 'off',
  'no-empty-pattern': 'off',
  'no-empty-static-block': 'off',
  'no-ex-assign': 'off',
  'no-extra-boolean-cast': 'off',
  'no-func-assign': 'off',
  'no-global-assign': 'off',
  'no-import-assign': 'off',
  'no-irregular-whitespace': 'off',
  'no-loss-of-precision': 'off',
  'no-new-native-nonconstructor': 'off',
  'no-nonoctal-decimal-escape': 'off',
  'no-obj-calls': 'off',
  'no-self-assign': 'off',
  'no-setter-return': 'off',
  'no-shadow-restricted-names': 'off',
  'no-sparse-arrays': 'off',
  'no-this-before-super': 'off',
  'no-unsafe-finally': 'off',
  'no-unused-private-class-members': 'off',
  'no-useless-catch': 'off',
  'no-useless-rename': 'off',
  'no-with': 'off',
  'require-yield': 'off',
  'import/default': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'jest/expect-expect': 'off',
  'jest/no-conditional-expect': 'off',
  'jest/no-disabled-tests': 'off',
  'jest/no-export': 'off',
  'jest/no-standalone-expect': 'off',
  'jest/require-to-throw-message': 'off',
  'jest/valid-describe-callback': 'off',
  'jest/valid-expect': 'off',
  'jest/valid-title': 'off',
  'jsdoc/check-property-names': 'off',
  'jsdoc/check-tag-names': 'off',
  'jsdoc/implements-on-classes': 'off',
  'jsdoc/no-defaults': 'off',
  'jsdoc/require-property': 'off',
  'jsdoc/require-property-description': 'off',
  'jsdoc/require-property-name': 'off',
  'jsdoc/require-property-type': 'off',
  'jsdoc/require-yields': 'off',
  'jsx-a11y/alt-text': 'off',
  'jsx-a11y/anchor-has-content': 'off',
  'jsx-a11y/anchor-is-valid': 'off',
  'jsx-a11y/aria-activedescendant-has-tabindex': 'off',
  'jsx-a11y/aria-role': 'off',
  'jsx-a11y/aria-unsupported-elements': 'off',
  'jsx-a11y/autocomplete-valid': 'off',
  'jsx-a11y/click-events-have-key-events': 'off',
  'jsx-a11y/heading-has-content': 'off',
  'jsx-a11y/html-has-lang': 'off',
  'jsx-a11y/iframe-has-title': 'off',
  'jsx-a11y/img-redundant-alt': 'off',
  'jsx-a11y/lang': 'off',
  'jsx-a11y/media-has-caption': 'off',
  'jsx-a11y/mouse-events-have-key-events': 'off',
  'jsx-a11y/no-access-key': 'off',
  'jsx-a11y/no-aria-hidden-on-focusable': 'off',
  'jsx-a11y/no-distracting-elements': 'off',
  'jsx-a11y/no-redundant-roles': 'off',
  'jsx-a11y/prefer-tag-over-role': 'off',
  'jsx-a11y/role-has-required-aria-props': 'off',
  'jsx-a11y/role-supports-aria-props': 'off',
  'jsx-a11y/scope': 'off',
  'jsx-a11y/tabindex-no-positive': 'off',
  'nextjs/google-font-display': 'off',
  'nextjs/google-font-preconnect': 'off',
  'nextjs/inline-script-id': 'off',
  'nextjs/next-script-for-ga': 'off',
  'nextjs/no-assign-module-variable': 'off',
  'nextjs/no-async-client-component': 'off',
  'nextjs/no-before-interactive-script-outside-document': 'off',
  'nextjs/no-css-tags': 'off',
  'nextjs/no-document-import-in-page': 'off',
  'nextjs/no-duplicate-head': 'off',
  'nextjs/no-head-element': 'off',
  'nextjs/no-head-import-in-document': 'off',
  'nextjs/no-img-element': 'off',
  'nextjs/no-page-custom-font': 'off',
  'nextjs/no-script-component-in-head': 'off',
  'nextjs/no-styled-jsx-in-document': 'off',
  'nextjs/no-sync-scripts': 'off',
  'nextjs/no-title-in-document-head': 'off',
  'nextjs/no-typos': 'off',
  'nextjs/no-unwanted-polyfillio': 'off',
  'react/jsx-key': 'off',
  'react/jsx-no-duplicate-props': 'off',
  'react/jsx-no-target-blank': 'off',
  'react/jsx-no-undef': 'off',
  'react/no-children-prop': 'off',
  'react/no-direct-mutation-state': 'off',
  'react/no-find-dom-node': 'off',
  'react/no-is-mounted': 'off',
  'react/no-render-return-value': 'off',
  'react/no-string-refs': 'off',
  'react/void-dom-elements-no-children': 'off',
  '@typescript-eslint/no-extra-non-null-assertion': 'off',
  '@typescript-eslint/no-misused-new': 'off',
  '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
  '@typescript-eslint/no-this-alias': 'off',
  '@typescript-eslint/no-unsafe-declaration-merging': 'off',
  '@typescript-eslint/triple-slash-reference': 'off',
  'unicorn/no-await-in-promise-methods': 'off',
  'unicorn/no-document-cookie': 'off',
  'unicorn/no-empty-file': 'off',
  'unicorn/no-invalid-remove-event-listener': 'off',
  'unicorn/no-new-array': 'off',
  'unicorn/no-thenable': 'off',
  'unicorn/no-useless-length-check': 'off',
  'unicorn/prefer-set-size': 'off',
};

const pendingRules = {
  'func-names': 'off',
};

const perfRules = {
  'no-await-in-loop': 'off',
  'react-perf/jsx-no-jsx-as-prop': 'off',
  'react-perf/jsx-no-new-array-as-prop': 'off',
  'react-perf/jsx-no-new-function-as-prop': 'off',
  'react-perf/jsx-no-new-object-as-prop': 'off',
};

const fixRules = {
  'no-debugger': 'off',
  'no-div-regex': 'off',
  'no-unsafe-negation': 'off',
  'no-unused-labels': 'off',
  'no-useless-constructor': 'off',
  'no-useless-escape': 'off',
  'unicode-bom': 'off',
  'jest/consistent-test-it': 'off',
  'jest/no-alias-methods': 'off',
  'jest/no-deprecated-functions': 'off',
  'jest/no-focused-tests': 'off',
  'jest/no-test-prefixes': 'off',
  'jest/prefer-comparison-matcher': 'off',
  'jest/prefer-expect-resolves': 'off',
  'jest/prefer-jest-mocked': 'off',
  'jest/prefer-lowercase-title': 'off',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  'jest/prefer-to-be': 'off',
  'jest/prefer-to-have-length': 'off',
  'jest/prefer-todo': 'off',
  'jsx-a11y/no-autofocus': 'off',
  'promise/no-new-statics': 'off',
  'react/jsx-boolean-value': 'off',
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/ban-tslint-comment': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/no-import-type-side-effects': 'off',
  '@typescript-eslint/no-useless-empty-export': 'off',
  '@typescript-eslint/prefer-namespace-keyword': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'off',
  'unicorn/empty-brace-spaces': 'off',
  'unicorn/escape-case': 'off',
  'unicorn/no-console-spaces': 'off',
  'unicorn/no-hex-escape': 'off',
  'unicorn/no-instanceof-array': 'off',
  'unicorn/no-null': 'off',
  'unicorn/no-useless-promise-resolve-reject': 'off',
  'unicorn/no-useless-undefined': 'off',
  'unicorn/no-zero-fractions': 'off',
  'unicorn/number-literal-case': 'off',
  'unicorn/numeric-separators-style': 'off',
  'unicorn/prefer-code-point': 'off',
  'unicorn/prefer-dom-node-append': 'off',
  'unicorn/prefer-node-protocol': 'off',
  'unicorn/prefer-prototype-methods': 'off',
  'unicorn/prefer-string-starts-ends-with': 'off',
  'unicorn/prefer-string-trim-start-end': 'off',
  'unicorn/require-number-to-fixed-digits-argument': 'off',
  'unicorn/switch-case-braces': 'off',
  'vitest/no-import-node-test': 'off',
};

const suspiciousRules = {
  'no-new': 'off',
  'no-useless-concat': 'off',
  'import/no-duplicates': 'off',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-self-import': 'off',
  'jest/no-commented-out-tests': 'off',
  'react/jsx-no-comment-textnodes': 'off',
  'react/react-in-jsx-scope': 'off',
  '@typescript-eslint/no-confusing-non-null-assertion': 'off',
  '@typescript-eslint/no-extraneous-class': 'off',
  '@typescript-eslint/no-unnecessary-type-constraint': 'off',
  'unicorn/prefer-add-event-listener': 'off',
};

export {
  pedanticRules,
  nurseryRules,
  restrictionRules,
  styleRules,
  conditionalFixRules,
  correctnessRules,
  pendingRules,
  perfRules,
  fixRules,
  suspiciousRules,
};
