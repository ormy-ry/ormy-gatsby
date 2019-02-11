{ Error: Unexpected '/'. Escaping special characters with \ may help.
    at <input css 2>:36:1
    at Root._error (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:182:24)
    at Root.error (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/selectors/root.js:43:25)
    at Parser.error (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:666:25)
    at Parser.unexpected (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:684:21)
    at Parser.combinator (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:593:18)
    at Parser.parse (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:968:22)
    at Parser.loop (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:923:18)
    at new Parser (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/parser.js:174:14)
    at Processor._root (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/processor.js:47:22)
    at Processor._runSync (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/processor.js:83:25)
    at Processor.processSync (/home/pl/Code/gsite/node_modules/postcss-selector-parser/dist/processor.js:177:27)
    at Purgecss.evaluateRule (/home/pl/Code/gsite/node_modules/purgecss/lib/purgecss.js:811:16)
    at /home/pl/Code/gsite/node_modules/purgecss/lib/purgecss.js:737:34
    at /home/pl/Code/gsite/node_modules/purgecss/node_modules/postcss/lib/container.js:135:18
    at Root.each (/home/pl/Code/gsite/node_modules/purgecss/node_modules/postcss/lib/container.js:101:16)
    at Root.walk (/home/pl/Code/gsite/node_modules/purgecss/node_modules/postcss/lib/container.js:131:17)
    at Purgecss.getSelectorsCss (/home/pl/Code/gsite/node_modules/purgecss/lib/purgecss.js:735:23)
    at Purgecss.getCssContents (/home/pl/Code/gsite/node_modules/purgecss/lib/purgecss.js:454:26)
    at Purgecss.purge (/home/pl/Code/gsite/node_modules/purgecss/lib/purgecss.js:413:25)
    at Object.loader (/home/pl/Code/gsite/node_modules/gatsby-plugin-purgecss/loader.js:74:18)
    at LOADER_EXECUTION (/home/pl/Code/gsite/node_modules/loader-runner/lib/LoaderRunner.js:119:14)
    at runSyncOrAsync (/home/pl/Code/gsite/node_modules/loader-runner/lib/LoaderRunner.js:120:4)
  postcssNode:
   Rule {
     raws:
      { before: '\n\n', between: ' ', semicolon: false, after: '\n' },
     type: 'rule',
     nodes:
      [ Rule {
          raws:
           { before: '\n    ',
             between: ' ',
             semicolon: true,
             after: '\n    ' },
          type: 'rule',
          nodes:
           [ Declaration {
               raws: { before: '\n        ', between: ': ' },
               type: 'decl',
               parent: [Circular],
               source:
                { start: { line: 40, column: 9 },
                  input:
                   Input {
                     css:
                      'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                     hasBOM: false,
                     id: '<input css 2>' },
                  end: { line: 40, column: 22 } },
               prop: 'height',
               value: '50rem' } ],
          parent: [Circular],
          source:
           { start: { line: 39, column: 5 },
             input:
              Input {
                css:
                 'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                hasBOM: false,
                id: '<input css 2>' },
             end: { line: 41, column: 5 } },
          selector: '.hero-header' } ],
     parent:
      Root {
        raws: { semicolon: false, after: '\n' },
        type: 'root',
        nodes:
         [ Rule {
             raws: { before: '', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ AtRule {
                  raws: { before: '\n    ', between: '', afterName: ' ' },
                  type: 'atrule',
                  name: 'apply',
                  parent: [Circular],
                  source:
                   { start: { line: 2, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 2, column: 21 } },
                  params: 'font-sans',
                  lastEach: 1,
                  indexes: { '1': 0 } } ],
             parent: [Circular],
             source:
              { start: { line: 1, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 3, column: 1 } },
             selector: 'body',
             lastEach: 1,
             indexes: {} },
           Rule {
             raws:
              { before: '\n\n', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 6, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 6, column: 27 } },
                  prop: 'padding-bottom',
                  value: '0.8rem' } ],
             parent: [Circular],
             source:
              { start: { line: 5, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 7, column: 1 } },
             selector: 'p',
             lastEach: 1,
             indexes: {} },
           Rule {
             raws:
              { before: '\n\n', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 10, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 10, column: 26 } },
                  prop: 'text-decoration',
                  value: 'none' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 11, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 11, column: 41 } },
                  prop: 'box-shadow',
                  value: 'inset 0 -3px 0 0 #f9acaa' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 12, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 12, column: 16 } },
                  prop: 'color',
                  value: '#000' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 13, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 13, column: 21 } },
                  prop: 'transition',
                  value: '0.2s' } ],
             parent: [Circular],
             source:
              { start: { line: 9, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 14, column: 1 } },
             selector: 'a:not(.nav-link)',
             lastEach: 1,
             indexes: {} },
           Rule {
             raws:
              { before: '\n\n', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 17, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 17, column: 41 } },
                  prop: 'box-shadow',
                  value: 'inset 0 -6px 0 0 #f9acaa' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 18, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 18, column: 21 } },
                  prop: 'transition',
                  value: '0.2s' } ],
             parent: [Circular],
             source:
              { start: { line: 16, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 19, column: 1 } },
             selector: 'a:not(.nav-link):hover',
             lastEach: 1,
             indexes: {} },
           Rule {
             raws:
              { before: '\n\n', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 30, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 30, column: 18 } },
                  prop: 'display',
                  value: 'flex' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 31, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 31, column: 24 } },
                  prop: 'align-items',
                  value: 'center' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 32, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 32, column: 28 } },
                  prop: 'justify-content',
                  value: 'center' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 33, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 33, column: 18 } },
                  prop: 'height',
                  value: '40rem' } ],
             parent: [Circular],
             source:
              { start: { line: 29, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 34, column: 1 } },
             selector: '.hero-header',
             lastEach: 1,
             indexes: {} },
           [Circular],
           Rule {
             raws:
              { before: '\n\n', between: ' ', semicolon: true, after: '\n' },
             type: 'rule',
             nodes:
              [ Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 45, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 45, column: 22 } },
                  prop: 'max-height',
                  value: '600px' },
                Declaration {
                  raws: { before: '\n    ', between: ': ' },
                  type: 'decl',
                  parent: [Circular],
                  source:
                   { start: { line: 46, column: 5 },
                     input:
                      Input {
                        css:
                         'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                        hasBOM: false,
                        id: '<input css 2>' },
                     end: { line: 46, column: 21 } },
                  prop: 'overflow',
                  value: 'hidden' } ],
             parent: [Circular],
             source:
              { start: { line: 44, column: 1 },
                input:
                 Input {
                   css:
                    'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
                   hasBOM: false,
                   id: '<input css 2>' },
                end: { line: 47, column: 1 } },
             selector: '.collapsed' } ],
        source:
         { input:
            Input {
              css:
               'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
              hasBOM: false,
              id: '<input css 2>' },
           start: { line: 1, column: 1 } },
        lastEach: 1,
        indexes: { '1': 5 } },
     source:
      { start: { line: 36, column: 1 },
        input:
         Input {
           css:
            'body {\n    @apply font-sans;\n}\n\np {\n    padding-bottom: 0.8rem;\n}\n\na:not(.nav-link) {\n    text-decoration: none;\n    box-shadow: inset 0 -3px 0 0 #f9acaa;\n    color: #000;\n    transition: 0.2s;\n}\n\na:not(.nav-link):hover {\n    box-shadow: inset 0 -6px 0 0 #f9acaa;\n    transition: 0.2s;\n}\n\n.footer {\n    background-color: #212121;\n    min-height: 20rem;\n    width: 100%;\n\n    @apply flex flex-row flex-wrap items-end justify-between;\n}\n\n.hero-header {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 40rem;\n}\n\n// media\n\n@media (min-width: 992px) {\n    .hero-header {\n        height: 50rem;\n    }\n}\n\n.collapsed {\n    max-height: 600px;\n    overflow: hidden;\n}\n',
           hasBOM: false,
           id: '<input css 2>' },
        end: { line: 42, column: 1 } },
     selector: '// media\n\n@media (min-width: 992px)' } }