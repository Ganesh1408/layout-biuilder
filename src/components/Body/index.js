// Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showRightNavbar, showLeftNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h1 className="left-nav-heading">Left Navbar Menu</h1>
              <ul>
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="desc">
                Lorem ipsum dolar sit amet,consectetur adipiscing elit sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. ut
                enim ad minim veniam
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1 className="right-nav-heading">Right Navbar</h1>
              <div className="ad1">
                <h1 className="box-heading">Ad 1</h1>
              </div>
              <div className="ad1">
                <h1 className="box-heading">Ad 2</h1>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
