const ner = require('wink-ner')
const winkTokenizer = require('wink-tokenizer')
function getNer (text) {
  const trainingData = [
    { text: 'Python', entityType: 'Language' },
    { text: 'Java', entityType: 'Language' },
    { text: 'R', entityType: 'Language' },
    { text: 'C', entityType: 'Language' },
    { text: 'C++', entityType: 'Language' },
    { text: 'HTML', entityType: 'Language' },
    { text: 'CSS', entityType: 'Language' },
    { text: 'C#', entityType: 'Language' },
    { text: 'Visual Basic', entityType: 'Language' },
    { text: 'Javascript', entityType: 'Language' },
    { text: 'PHP', entityType: 'Language' },
    { text: 'SQL', entityType: 'Language' },
    { text: 'Perl', entityType: 'Language' },
    { text: 'Groovy', entityType: 'Language' },
    { text: 'Ruby', entityType: 'Language' },
    { text: 'Go', entityType: 'Language' },
    { text: 'Matlab', entityType: 'Language' },
    { text: 'Swift', entityType: 'Language' },
    { text: 'Assembly Language', entityType: 'Language' },
    { text: 'Objective-C', entityType: 'Language' },
    { text: 'Classic Visual Basic', entityType: 'Language' },
    { text: 'PL/SQL', entityType: 'Language' },
    { text: 'SAS', entityType: 'Language' },
    { text: 'Delphi', entityType: 'Language' },
    { text: 'Object Pascal', entityType: 'Language' },
    { text: 'Scratch', entityType: 'Language' },
    { text: 'Transact-SQL', entityType: 'Language' },
    { text: 'Rust', entityType: 'Language' },
    { text: 'Dart', entityType: 'Language' },
    { text: 'Logo', entityType: 'Language' },
    { text: 'Scala', entityType: 'Language' },
    { text: 'ABAP', entityType: 'Language' },
    { text: 'Scheme', entityType: 'Language' },
    { text: 'Prolog', entityType: 'Language' },
    { text: 'awk', entityType: 'Language' },
    { text: 'foxpro', entityType: 'Language' },
    { text: 'ml', entityType: 'Language' },
    { text: 'apex', entityType: 'Language' },
    { text: 'typescript', entityType: 'Language' },
    { text: 'haskell', entityType: 'Language' },
    { text: 'vhdl', entityType: 'Language' },
    { text: 'alice', entityType: 'Language' },
    { text: 'openedge abl', entityType: 'Language' },
    { text: 'bash', entityType: 'Language' },
    { text: 'powershell', entityType: 'Language' },
    { text: 'ada', entityType: 'Language' },
    { text: 'lua', entityType: 'Language' },
    { text: 'fortran', entityType: 'Language' },
    { text: 'cobol', entityType: 'Language' },
    { text: 'lisp', entityType: 'Language' },
    { text: 'd', entityType: 'Language' },
    { text: 'kotlin', entityType: 'Language' },
    { text: 'julia', entityType: 'Language' },
    { text: 'prolog', entityType: 'Language' }]
  console.log(text)
  const myNER = ner()
  myNER.learn(trainingData)
  const { tokenize } = winkTokenizer()
  let tokens = tokenize(text)
  tokens = myNER.recognize(tokens)
  const res = []
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].entityType === 'Language') {
      res.push(tokens[i].value)
    }
  }
  return res.join()
}
var exp = 0
const generateBadge = (color, label, value) => {
  const badgeDiv = document.createElement('div')
  badgeDiv.setAttribute('id', label)
  badgeDiv.style = `display: inline-block;
                      border-radius: .75em;
                      font-family: 'Dejavu Sans','Arial';
                      margin-right: 20px;`
  const titleDiv = document.createElement('div')
  titleDiv.style = `border-top-left-radius: .25em; 
                      border-bottom-left-radius: .25em;
                      background: #555555;
                      display: inline-block;
                      float: left;
                      text-transform: lowercase;
                      color: #FFF;
                      text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.5);
                      margin: 0;
                      border: 0;
                      padding-left: 10px;
                      padding-right: 10px;`
  titleDiv.innerHTML = label
  const valueDiv = document.createElement('div')
  valueDiv.style = `background: ${color};
                      border-top-right-radius: .25em;
                      border-bottom-right-radius: .25em;
                      display: inline-block;
                      float: left;
                      color: #FFF;
                      text-shadow: 0px 0.1em 0px rgba(0, 0, 0, 0.5);
                      margin: 0;
                      border: 0;
                      padding-left: 10px;
                      padding-right: 10px;`
  valueDiv.innerHTML = value
  badgeDiv.appendChild(titleDiv)
  badgeDiv.appendChild(valueDiv)
  return badgeDiv
}
const getExperience = (text) => {
  return exp
}
const getSponsorship = (text) => {
  return 'Yes'
}
const getLocation = () => {
  const body = document.body.innerText
  const start = body.indexOf('Company Location')
  const string = body.substring(start, start + 45)
  const list = string.split(' ')
  // eslint-disable-next-line camelcase
  const locationList = list.slice(2, 4)
  const tempLocation = locationList.join().replace(',', '').split('\n')[0]
  return tempLocation.charAt(0).toUpperCase() + tempLocation.slice(1)
}
function getElementByXpath (path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}
const text = document.getElementsByTagName('article')[0].textContent
var list = text.split('.')
var arrayLength = list.length
for (var i = 0; i < arrayLength; i++) {
  if (list[i].includes('experience') && list[i].match(/\d+/g) != null) {
    exp = list[i].match(/\d+/g).map(Number)
  }
}
const parentDiv = getElementByXpath('/html/body/div[8]/div[3]/div/div[1]/div[1]/div/div[1]/div/section/div[3]/article')
const experienceBadge = generateBadge('#44cc11', 'experience', getExperience(text))
const sponsorshipBadge = generateBadge('#00aadd', 'sponsorship', getSponsorship(text))
const locationBadge = generateBadge('#12ee00', 'Location', getLocation())
const badges = {
  experience: experienceBadge,
  sponsorship: sponsorshipBadge,
  location: locationBadge
}
// eslint-disable-next-line no-undef
chrome.runtime.onMessage.addListener(newMessage)
function newMessage (message, sender, sendResponse) {
  resetBadges(message)
}
function resetBadges (message) {
  for (const badge in message) {
    const badgeElement = document.getElementById(badge)
    if (message[badge].checked) {
      if (!badgeElement) {
        parentDiv.appendChild(badges[badge])
      }
    } else {
      if (badgeElement) {
        badgeElement.remove()
      }
    }
  }
}
console.log(getNer(text))