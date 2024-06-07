import './index.css'

const AppItem = props => {
  const {eachApp} = props
  const {appName, imageUrl} = eachApp
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-img" />
      <p className="app-para">{appName}</p>
    </li>
  )
}

export default AppItem
