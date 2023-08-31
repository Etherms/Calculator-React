
import { useEffect, React } from "react";

export default function Header(){

    useEffect(() => {
        const light = document.getElementById('light');
        const dark = document.getElementById('dark');
        const blue = document.getElementById('blue');
        const yellow = document.getElementById('yellow');
        var root = document.querySelector(':root');

        
        const lightTheme = () => {
            root.style.setProperty('--background-color', '#d9d9d9');
            root.style.setProperty('--other-button-color', '#F2EDE9');
            root.style.setProperty('--eql-color', '#F2EDE9');
            root.style.setProperty('--button-color', '#0C7382');
            root.style.setProperty('--c-value-color', '#35352c');
            root.style.setProperty('--t-value-color', '#a69d91');
            root.style.setProperty('--value-background', '#ededed');
            root.style.setProperty('--button-container-background', '#d1cccc');
            root.style.setProperty('--button-bg', '#FFFFFF');
            root.style.setProperty('--button--bg-accent', '#9a9898');
            root.style.setProperty('--button-eqtn-bg', '#0c7383');
            root.style.setProperty('--button-eqtn-accent-bg', '#09525d');
            root.style.setProperty('--button-eql-bg', '#A63838');
            root.style.setProperty('--button-eql-accent-bg', '#8a2e2e');
        };

        const darkTheme = () => {
            root.style.setProperty('--background-color', '#1F2C3C');
            root.style.setProperty('--other-button-color', '#18253b');
            root.style.setProperty('--eql-color', '#18253b');
            root.style.setProperty('--button-color', '#DFD1AD');
            root.style.setProperty('--c-value-color', '#DFD1AD');
            root.style.setProperty('--t-value-color', '#5f594b');
            root.style.setProperty('--value-background', '#192531');
            root.style.setProperty('--button-container-background', '#192531');
            root.style.setProperty('--button-bg', '#253358');
            root.style.setProperty('--button--bg-accent', '#171f36');
            root.style.setProperty('--button-eqtn-bg', '#DFD1AD');
            root.style.setProperty('--button-eqtn-accent-bg', '#d1bd89');
            root.style.setProperty('--button-eql-bg', '#F87060');
            root.style.setProperty('--button-eql-accent-bg', '#AD4E43');
        };
        const yellowTheme = () => {
            root.style.setProperty('--background-color', '#F2B705');
            root.style.setProperty('--other-button-color', '#514745');
            root.style.setProperty('--eql-color', '#514745');
            root.style.setProperty('--button-color', '#F2B705');
            root.style.setProperty('--c-value-color', '#9E999D');
            root.style.setProperty('--t-value-color', '#4C473C');
            root.style.setProperty('--value-background', '#5C4F47');
            root.style.setProperty('--button-container-background', '#4A3C33');
            root.style.setProperty('--button-bg', '#514745');
            root.style.setProperty('--button--bg-accent', '#403837');
            root.style.setProperty('--button-eqtn-bg', '#9E999D');
            root.style.setProperty('--button-eqtn-accent-bg', '#9E999D');
            root.style.setProperty('--button-eql-bg', '#BC6F07');
            root.style.setProperty('--button-eql-accent-bg', '#BC6F07');
        };
        const blueTheme = () => {
            root.style.setProperty('--background-color', '#21303B');
            root.style.setProperty('--other-button-color', '#FF8D7D');
            root.style.setProperty('--eql-color', '#416279');
            root.style.setProperty('--button-color', '#416279');
            root.style.setProperty('--c-value-color', '#9E999D');
            root.style.setProperty('--t-value-color', '#4C473C');
            root.style.setProperty('--value-background', '#2B4258');
            root.style.setProperty('--button-container-background', '#0D1F2D');
            root.style.setProperty('--button-bg', '#F9F9F9');
            root.style.setProperty('--button--bg-accent', '#C3C3C3');
            root.style.setProperty('--button-eqtn-bg', '#416279');
            root.style.setProperty('--button-eqtn-accent-bg', '#14314D');
            root.style.setProperty('--button-eql-bg', '#FE897C');
            root.style.setProperty('--button-eql-accent-bg', '#B83A2A');
        };


        dark.addEventListener('click', darkTheme);
        light.addEventListener('click', lightTheme);
        yellow.addEventListener('click', yellowTheme);
        blue.addEventListener('click', blueTheme);




        // document.addEventListener('DOMContentLoaded', function() {

        //     if (!sessionStorage.getItem('checkboxState')) {
        //         applyOriginalMode();
        //       } else {
        //         checkboxes.forEach(function(checkbox) {
        //           checkbox.checked = true;
        //         });
        //         applyDarkMode();
        //       }     
        // });
        
        return () => {
            dark.removeEventListener('click', darkTheme);
            light.removeEventListener('click', lightTheme);
            yellow.removeEventListener('click', yellowTheme);
            blue.removeEventListener('click', blueTheme);
        };
    }, []);

    return(
        <div className="header">
            <h3 className="header__title">Calculator</h3>
            <div className="theme">
                <p className="theme__text">THEME</p>
                <div className="theme__container">
                        <div className="upper-container">
                            <label className="theme-color theme-light">1 </label>
                            <label className="theme-color theme-dark">2 </label>
                            <label className="theme-color theme-green">3</label>
                            <label className="theme-color theme-green">4</label>
                        </div>
                        <div className="lower-container">
                            <input type="radio" value="light" name="theme" id="light"/>
                            <input type="radio" value="dark" name="theme" id="dark"/>
                            <input type="radio" value="green" name="theme" id="blue"/>
                            <input type="radio" value="yellow" name="theme" id="yellow"/>
                        </div>
                </div>
            </div>
        </div>
    )
}