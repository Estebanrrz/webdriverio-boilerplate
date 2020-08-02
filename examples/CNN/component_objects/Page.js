class Page {

  open(path) {
    if (!path) {
      browser.url("/")
    } else {
      browser.url(path)
    }
  }

  reviveFlyout(elem) {
    browser.execute((selector) => {
      const flyout = document.querySelector(selector)
      flyout.setAttribute("style", "display: block; opacity: 1")
    }, elem.selector)
  }

  destroyFlyout(elem) {
    browser.execute((selector) => {
      const flyout = document.querySelector(selector)
      flyout.setAttribute("style", "display: none")
    }, elem.selector)
  }

  maximixe() {
    browser.maximizeWindow();

  }

}

export default Page
