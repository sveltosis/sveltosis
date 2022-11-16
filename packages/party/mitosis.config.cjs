module.exports = {
  files: 'sveltosis/**/*',
  dest: 'output',
  targets: ['react', 'vue', 'angular', 'qwik', 'marko'],
  options: {
    react: {
      typescript: true,
    },
    vue: {
      vueVersion: 3,
      api: 'composition',
      typescript: true,
    },
  },
};
