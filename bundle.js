#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const read = (...components) => fs.readFileSync(path.join(__dirname, ...components), 'utf-8').trimEnd()

const jsFiles = [
  // libraries
  'gl-matrix-min.js',
  'spin.min.js',
  'perfect-scrollbar.jquery.min.js',
  // 'satellite.js',

  // our script files
  'shader-loader.js',
  'color-scheme.js',
  'groups.js',
  'search-box.js',
  'orbit-display.js',
  'line.js',
  'earth.js',
  'sun.js',
  'sat.js',
  'main.js',
]

const shaderFiles = [
  'earth-fragment.glsl',
  'earth-vertex.glsl',
  'dot-fragment.glsl',
  'dot-vertex.glsl',
  'pick-fragment.glsl',
  'pick-vertex.glsl',
  'path-fragment.glsl',
  'path-vertex.glsl',
]

console.log('// This file is generated using the scripts-loader.php file')
console.log('// Source code changes should be made in the files that are')
console.log('// used for this file')

for (const jsFile of jsFiles) {
  console.log('// ****', jsFile, '***')
  console.log(read('scripts', jsFile))
  console.log('// **** end', jsFile, '***\n')
}

console.log(`\nwindow.shaderData = ${JSON.stringify(shaderFiles.map(path => ({ name: shaderFile, code: read('shaders', shaderFile) })))}`)
