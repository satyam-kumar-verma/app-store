import './index.css'

const TabItem = props => {
  const {eachTab, onChangeTab, isTabSelected} = props
  const {displayText, tabId} = eachTab
  const onClickTab = () => {
    onChangeTab(tabId)
  }

  const higlightBorder = isTabSelected ? 'selected-tab-style' : ''
  const higlightButton = isTabSelected ? 'selected-button-style' : ''

  return (
    <li className={`tab-item-container ${higlightBorder}`} onClick={onClickTab}>
      <button className={`button ${higlightButton}`} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
