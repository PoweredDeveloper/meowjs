#!/usr/bin/env node
"use strict"

const { spawnSync } = require('child_process')
const path = require('path')

const cliPath = require.resolve('meowljs/cli.js')
const result = spawnSync(process.execPath, [cliPath, ...process.argv.slice(2)], {
  stdio: 'inherit',
  cwd: process.cwd(),
})
process.exit(result.status ?? 0)
