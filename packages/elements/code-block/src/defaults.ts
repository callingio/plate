import { PlatePluginOptions } from '@udecode/plate-core';

export const ELEMENT_CODE_BLOCK = 'code_block';
export const ELEMENT_CODE_LINE = 'code_line';

export const KEYS_CODE_BLOCK = [ELEMENT_CODE_BLOCK, ELEMENT_CODE_LINE];

export const DEFAULTS_CODE_BLOCK: Partial<PlatePluginOptions> = {
  hotkey: ['mod+opt+8', 'mod+shift+8'],
};

// `
// javascript:
// abap: ABAP
// arduino: Arduino
// bash: Bash
// basic: BASIC
// c: C
// clojure: Clojure
// coffeescript: CoffeeScript
// cpp: C++
// csharp: C#
// css: CSS
// dart: Dart
// diff: Diff
// docker: Docker
// elixir: Elixir
// elm: Elm
// erlang: Erlang
// flow: Flow
// fortran: Fortran
// fsharp: F#
// gherkin: Gherkin
// glsl: GLSL
// go: Go
// graphql: GraphQL
// groovy: Groovy
// haskell
// less
// livescript
// lua
// makefile
// match
// matlab
// nix
// objectivec
// ocaml
// pascal
// perl
// prolog
// purebasic
// r
// reason
// scss
// scala
// scheme
// sql
// swift
// vbnet
// verilog
// vhdl
// visual-basic
// wasm
// `;

export const CODE_BLOCK_LANGUAGES: Record<string, string> = {
  antlr4: 'ANTLR4',
  bash: 'Bash',
  c: 'C',
  csharp: 'C#',
  css: 'CSS',
  coffeescript: 'CoffeeScript',
  cmake: 'CMake',
  django: 'Django',
  docker: 'Docker',
  ejs: 'EJS',
  erlang: 'Erlang',
  git: 'Git',
  go: 'Go',
  graphql: 'GraphQL',
  groovy: 'Groovy',
  html: 'HTML',
  java: 'Java',
  javascript: 'JavaScript',
  json: 'JSON',
  kotlin: 'Kotlin',
  latex: 'LaTeX',
  less: 'Less',
  lua: 'Lua',
  makefile: 'Makefile',
  markdown: 'Markdown',
  matlab: 'MATLAB',
  markup: 'Markup',
  objectivec: 'Objective-C',
  perl: 'Perl',
  php: 'PHP',
  powershell: 'PowerShell',
  properties: '.properties',
  protobuf: 'Protocol Buffers',
  python: 'Python',
  r: 'R',
  jsx: 'React JSX',
  tsx: 'React TSX',
  ruby: 'Ruby',
  sass: 'Sass (Sass)',
  scss: 'Sass (Scss)',
  scala: 'Scala',
  scheme: 'Scheme',
  sql: 'SQL',
  shell: 'Shell',
  swift: 'Swift',
  svg: 'SVG',
  typescript: 'TypeScript',
  wasm: 'WebAssembly',
  yaml: 'YAML',
  xml: 'XML',
};
