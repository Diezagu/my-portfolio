document.addEventListener('turbo:load',() => {
  const tabs = document.querySelectorAll('[data-component="tab"]')
  tabs.forEach( tab => setupTab(tab, tabs) )
})

const setupTab = (tab, tabs) => {
  tab.addEventListener('click', () => {
    const tabContainers = document.querySelectorAll('[data-component="page-container"]')
    tabContainers.forEach( tabContainer => setupContainer(tabContainer))
    document.getElementById(tab.dataset.target).classList.remove('hidden')
    tabs.forEach(tab => setupTabStyle(tab))
    tab.classList.add('text-blue-500')
  })
}

const setupContainer = (container) => {
  container.classList.add('hidden')
}

const setupTabStyle = (tab) => {
  tab.classList.remove('text-blue-500')
  tab.classList.add('text-white')
}
