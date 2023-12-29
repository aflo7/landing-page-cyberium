import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import epicorLogo from './epicor_logo.png';
import hubspotLogo from './hubspotlogo.png'
import netsuiteLogo from './netsuitelogo.png'
import sageLogo from './sage_logo.png'
import sapLogo from './sap_logo.png'

const logoSources = [
  { src: epicorLogo },
  { src: hubspotLogo },
  { src: netsuiteLogo },
  { src: sageLogo },
  { src: sapLogo }
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="top-nav"></div>
      <nav>
        <img
          src="https://www.cyberium.info/wp-content/uploads/2023/08/logo__2__copy.webp"
          height="30px"
        />

        <RxHamburgerMenu id="rxHamburgerMenu" />
      </nav>
      <main>
        <h1>Mockup site made by Andres Flores</h1>

        <div className="main-small-text-wrapper">
          <div>
            <div>💡</div>
            <div>Fit maps with custom code or enterprise apps</div>
          </div>

          <div>
            <div>🔬</div>
            <div>
              Get Deep Visibility Into Business Details Of Every Function, Gaps
              & Coverage.
            </div>
          </div>

          <div>
            <div>🚀</div>
            <div>
              Enhance Management, Operations, Knowledge, Technology With Digital
              Map
            </div>
          </div>
        </div>
        <hr className="main-hr"></hr>

        <h2>
          Rapidly Build, Transform, Upgrade, Integrate Your Business & IT.
        </h2>
        <div className="logo-wrapper">
          {logoSources.map((logo, i) => {
            return (
              <div key={i}>
                <img src={logo.src} />
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
