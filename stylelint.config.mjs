/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
    'stylelint-config-standard-scss',
  ],
  ignoreFiles: ['build/**/*.css'],
  rules: {
    'selector-class-pattern': null,
    'media-feature-name-no-unknown': null,
  },
};
