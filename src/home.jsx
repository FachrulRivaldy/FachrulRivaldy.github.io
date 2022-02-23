import React from 'react';
import "./home.css";
// import AboutMe from "./aboutme";
import Andro from './components/assets/androgif.gif';
import Flutter from './components/assets/flutter.png';
import Kotlin from './components/assets/kotlin.png';

function Home() {
    return (
        <div className='allcontent'>
            <div className="home">
                <div className="content">
                    <div className="landingpage">
                        <div className="description">
                            <div className="hello">Hello, my name is</div>
                            <div className="my-name">Fachrul Rivaldy.</div>
                            <div className="my-desc">I'm a
                                <div className="my-desc-a"> Mobile Developer.</div>
                            </div>
                            <div className="prog-lang">
                                <img src={Andro} alt='' className="androgif"/>
                                <img src={Flutter} alt=''/>
                                <img src={Kotlin} alt=''/>
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
                                <li className="bodys">
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
            </div>
            {/* <AboutMe className="AboutMe"/> */}
        </div>
    )
}

export default Home;
