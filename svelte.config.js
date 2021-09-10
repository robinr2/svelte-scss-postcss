const sveltePreprocess = require('svelte-preprocess');

const preprocessOptions = {
  sourceMap: true,
  defaults: {
    style: "scss",
  },
  scss: {
    prependData: `
      @import 'src/styles/variables.scss';
    `
  },
  postcss: {
    plugins: [require('autoprefixer')()]
  }
};

module.exports = {
  preprocess: sveltePreprocess(preprocessOptions),
  preprocessOptions,
}