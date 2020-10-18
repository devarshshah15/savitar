let params = {
  active: true,
  currentWindow: true
}

let message = {
  experience: {
    checked: true
  },
  sponsorship: {
    checked: true
  },
  location: {
    checked: true
  },
  skills: {
    checked: true
  }
}
document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.sync.get('data', function (items) {
    if (!chrome.runtime.error) {
      message = items.data
      for (const badge in message) {
        if (document.getElementById(badge) != null) { document.getElementById(badge).checked = message[badge].checked }
      }
      chrome.tabs.query(params, gotTabs)
    }
  })
}, false)

function gotTabs (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, message)
}

// eslint-disable-next-line no-unused-vars
function toggle (event) {
  const badge = event.target.id
  message[badge].checked = event.target.checked
  chrome.tabs.query(params, gotTabs)

  chrome.storage.sync.set({ data: message }, function () {
    if (chrome.runtime.error) {
      console.log('Runtime error.')
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = document.getElementsByTagName('input')
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', function (event) {
      var params = {
        active: true,
        currentWindow: true
      }

      var message = {
        experience: {
          checked: true
        },
        sponsorship: {
          checked: true
        },
        location: {
          checked: true
        },
        skills: {
          checked: true
        }
      }
      const badge = event.target.id
      message[badge].checked = event.target.checked

      // eslint-disable-next-line no-undef
      chrome.tabs.query(params, gotTabs)

      chrome.storage.sync.set({ data: message }, function () {
        // eslint-disable-next-line no-undef
        if (chrome.runtime.error) {
          console.log('Runtime error.')
        }
      })
    })
  }
}, false)
