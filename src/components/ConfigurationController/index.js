// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="card-container">
          <h1 className="heading">Layout</h1>
          <div className="input-container">
            <input
              type="checkbox"
              className="input-content"
              id="layout-checkbox1"
              checked={showContent}
              onChange={onChangeContent}
            />
            <label className="label" htmlFor="layout-checkbox1">
              Content
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="input-content"
              id="layout-checkbox2"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label className="label" htmlFor="layout-checkbox2">
              Left Navbar
            </label>
          </div>
          <div className="input-container">
            <input
              type="checkbox"
              className="input-content"
              id="layout-checkbox3"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label className="label" htmlFor="layout-checkbox3">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
