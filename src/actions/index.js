const setVagas = (vagas) => {
  return {
    type: 'SET_VAGAS',
    payload: vagas
  }
}

const changeCurrentTab = (activeTab) => {
  return {
    type: 'SET_ACTIVE_TAB',
    payload: activeTab
  }
}

const toggleExpansion = () => {
  return {
    type: 'TOGGLE_EXPANDED'
  }
}

const toggleIgnoreExpanded = (boolean) => {
  return {
    type: 'TOGGLE_IGNORE',
    payload: boolean
  }
}

export default { setVagas, changeCurrentTab, toggleExpansion, toggleIgnoreExpanded }
