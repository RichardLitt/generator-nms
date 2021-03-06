import path from 'path'
import test from 'ava'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import pify from 'pify'

let generator

test.beforeEach(async () => {
  await pify(helpers.testDirectory)(path.join(__dirname, 'temp'))
  generator = helpers.createGenerator('nms:app', ['../app'], null, {skipInstall: true})
})

test.serial('generates expected files', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    githubUsername: 'test',
    website: 'test.com',
    description: 'test',
    keywords: 'test test',
    cli: false
  })

  await pify(generator.run.bind(generator))()

  assert.file([
    '.git',
    '.gitattributes',
    '.gitignore',
    '.travis.yml',
    'index.js',
    'license',
    'package.json',
    'readme.md',
    'test.js'
  ])

  assert.noFile('cli.js')
})

test.serial('CLI option', async () => {
  helpers.mockPrompt(generator, {
    moduleName: 'test',
    githubUsername: 'test',
    website: 'test.com',
    description: 'test',
    keywords: 'test test',
    cli: true
  })

  await pify(generator.run.bind(generator))()

  assert.file('cli.js')
  assert.fileContent('package.json', /"bin":/)
  assert.fileContent('package.json', /"bin": "cli.js"/)
  assert.fileContent('package.json', /"meow"/)
})
