const jsdom = require('jsdom')
const dom = new jsdom.JSDOM()
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
dom.window.document.createElement('div')
const div8 = dom.window.document.createElement('div')
div8.appendChild(dom.window.document.createElement('div'))
div8.appendChild(dom.window.document.createElement('div'))
const div3 = div8.appendChild(dom.window.document.createElement('div'))
const div1_3 = div3.appendChild(dom.window.document.createElement('div'))
const div_1_1_3 = div1_3.appendChild(dom.window.document.createElement('div'))
div1_3.appendChild(dom.window.document.createElement('div'))
const div_1_1_1_3 = div_1_1_3.appendChild(dom.window.document.createElement('div'))
div_1_1_3.appendChild(dom.window.document.createElement('div'))
const div_1_1_1_1_3 = div_1_1_1_3.appendChild(dom.window.document.createElement('div'))
const div_1_1_1_1_1_3 = div_1_1_1_1_3.appendChild(dom.window.document.createElement('div'))
div_1_1_1_1_3.appendChild(dom.window.document.createElement('div'))
const div_1_1_1_1_1_1_3 = div_1_1_1_1_1_3.appendChild(dom.window.document.createElement('div'))
const section = div_1_1_1_1_1_1_3.appendChild(dom.window.document.createElement('section'))
section.appendChild(dom.window.document.createElement('div'))
const div122 = section.appendChild(dom.window.document.createElement('div'))
const finalDiv = div122.appendChild(dom.window.document.createElement('div'))

div122.appendChild(dom.window.document.createElement('div'))
const articleDiv = finalDiv.appendChild(dom.window.document.createElement('article'))

beforeEach(() => {
  articleDiv.textContent = 'Location : Chicago, IL  2+ years of work experience with Java Experience working with Spring and cloud technologies (AWS)' +
        ' Knowledge of react would be beneficial BSc/MSc in Computer Science or technical discipline from top universities' +
      'Java Python programming knowledge'
  dom.window.document.body.appendChild(articleDiv)
})

global.window = dom.window
global.document = dom.window.document

require('../code/js/content')
test('experience should return 2', () => {
  expect(getExperience(document.getElementsByTagName('article')[0].textContent)).toBe(2)
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  expect(getExperience(document.getElementsByTagName('article')[0].textContent)).toBe(undefined)
})

test('getLocation should return Chicago', () => {
  expect(getLocation(document.getElementsByTagName('article')[0].textContent)).toBe('Chicago')
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  expect(getLocation(document.getElementsByTagName('article')[0].textContent)).toBe('')
})

test('getSkills should return Java Python', () => {
  expect(getNer(document.getElementsByTagName('article')[0].textContent)).toBe('java python')
  dom.window.document.body.removeChild(articleDiv)
  articleDiv.textContent = 'Experience is not required'
  dom.window.document.body.appendChild(articleDiv)
  expect(getNer(document.getElementsByTagName('article')[0].textContent)).toBe('')
})
