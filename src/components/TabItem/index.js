import './index.css'

const TabItem = props => {
  const {details, onSelectTab, isActive} = props
  const {tabId, displayText} = details
  const className1 = isActive === true ? 'btn1 one1231' : 'btn1'

  const selectTab = () => {
    onSelectTab(tabId)
  }
  return (
    <li>
      <button type="button" className={className1} onClick={selectTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
