const body = 'Succeeding with 5G will require operators to look beyond the limitations of legacy rating and charging \n ' +
    "Success will demand a next-generation Converged Charging System that can enable continuous innovation and continuous deployment to unlock 5G commerce opportunities. Our next-generation rating and charging platform has reinvented what’s possible with OCS and will set the bar for 5G Converged Charging. Timely implementation of the ongoing design of MATRIXX's software products\n" +
    'All phases of development including requirements definition, design, coding and testing\n' +
    'Integrating feedback from architects into product development\n' +
    'Enhancing and maintaining the core load-balancing, application routing, and high availability services\n' +
    'Assisting with development of core test drivers for the different networking services\n' +
    'Participating in design and implementation of the next generation infrastructure services from the ground up\n' +
    'Supporting debugging and issue resolution for escalations that may arise in the field\n' +
    '\n' +
    'Company Location:  Boston MA ' +
    'Required Experience:\n' +
    '\n' +
    '6+ years overall software development experience\n' +
    'Strong object oriented C programming experience and strong scripting language skills (preferably Python)\n' +
    'Experience on Linux/Unix using C frameworks, such as boost\n' +
    'A background in Telecom & Networking protocols\n' +
    'Expertise developing multi-threaded applications on Linux\n' +
    'Competency in networking and storage/file-systems\n' +
    'Test Driven Development experience\n' +
    'Experience developing cloud based applications (containers, Kubernetes) a big plus\n' +
    'Socket programming and asynchronous I/O is highly desirable\n' +
    'BS or MS Computer Science or related subject area \n'

const getLocation = (Text) => {
  const body = Text
  const start = body.indexOf('Company Location')
  const string = body.substring(start, start + 45)
  const list = string.split(' ')
  const locationList = list.slice(2, 4)
  const tempLocation = locationList.join().replace(',', '').split('\n')[0]
  const location = tempLocation.charAt(0).toUpperCase() + tempLocation.slice(1)
  return location
}

console.log(getLocation(body))

var trainingData =
    [
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
      { text: 'prolog', entityType: 'Language' },
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
      { text: 'prolog', entityType: 'Language' }
    ]

const getSkills = (Text) => {
  const ner = require('wink-ner')
  const myNER = ner()
  myNER.learn(trainingData)
  const winkTokenizer = require('wink-tokenizer')
  const tokenize = winkTokenizer().tokenize
  let tokens = tokenize(body)
  tokens = myNER.recognize(tokens)
  let result = []
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].entityType === 'Language') {
      result.push(tokens[i].value)
    }
  }
  result = new Set(result)
  return Array.from(result).join(' ')
}
console.log(getSkills(body))

const getExperience = (Text) => {
  const list = Text.split('\n')
  const arrayLength = list.length
  let exp = 0
  for (let i = 0; i < arrayLength; i++) {
    if (list[i].includes('experience')) {
      if (list[i].match(/\d+/g) != null) {
        exp = list[i].match(/\d+/g).map(Number)
      }
    }
  }
  return exp
}
console.log(getExperience(body))
