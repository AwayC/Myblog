
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [

    '@babel/plugin-transform-private-methods',
    // three.js (r16x+) 使用了 class static block
    '@babel/plugin-transform-class-static-block'
  ]
}