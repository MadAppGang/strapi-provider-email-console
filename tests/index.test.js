// import provider from '../src/index'
const provider = require("../src/index.js");
import {expect, vi, test} from 'vitest';

test('init is working fine', () => {
  const p = provider.init({},{
    defaultFrom: 'from@from.com',
    defaultReplyTo: 'reply@reply.com'
  })
  expect(p).toBeDefined()
})


test('check output', async () => {
  let output  = ''
  const logger = function(s) { 
    output = `${output}${s}\n`; 
  }
  const mockConsole = vi.fn(logger);

  const p = provider.init({
    logger: mockConsole
  },{
    defaultFrom: 'from@from.com',
    defaultReplyTo: 'reply@reply.com'
  })
  expect(p).toBeDefined()

  await p.send({
    to: 'test@test.com',
    cc: '',
    bcc: '',
    text: '',
    subject: 'testing it out',
    html: '<h1>I am a test email \n with multi lines\n and emojis 🙋‍♂️ </h1>',
  })

  expect(mockConsole).toBeCalled()
  console.log(output)
  expect(output).toMatch(/test@test.com/)
})


