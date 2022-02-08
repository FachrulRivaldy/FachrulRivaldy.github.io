import React from 'react';
import './content.css';
import Andro from '../assets/images/androgif.gif';
import Flutter from '../assets/images/flutter.png';
import Kotlin from '../assets/images/kotlin.png';

function Content() {
  return (
    <div className="content">
        <div className="landingpage">
            <div className="description">
                <div className="hello">Hello, my name is</div>
                <div className="my-name">Fachrul Rivaldy.</div>
                <div className="my-desc">I'm a
                    <div className="my-desc-a"> Mobile Developer.</div>
                </div>
                <div className="prog-lang">
                    <img src={Andro} className="androgif"/>
                    <img src={Flutter}/>
                    <img src={Kotlin}/>
                </div>
            </div>
        <div className="android">
            <div className="android-logo">
                <ul className="andy">
                  <li className="head anim-head">
                    <ul className="antennas">
                            <li className="left-antenna anim-l-ant"></li>
                            <li className="right-antenna anim-r-ant"></li>
                        </ul>
                        <ul className="eyes anim-eyes">
                            <li className="left-eye anim-l-eye"></li>
                            <li className="right-eye anim-r-eye"></li>
                        </ul>
                    </li>
                    <li className="body">
                        <ul className="arms anim-arms">
                            <li className="left-arm anim-l-arm"></li>
                            <li className="right-arm anim-r-arm"></li>
                        </ul>
                        <ul className="legs">
                            <li className="left-leg anim-l-leg"></li>
                            <li className="right-leg anim-r-leg"></li>
                        </ul>
                     </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content;
