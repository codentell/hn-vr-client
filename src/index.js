import "./styles.scss";
import App from "./App";


App.Create().init()
window.addEventListener('hashchange', function(){ App.Create().init()});




