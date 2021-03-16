import './App.css';
import {Header} from "./components/Header/Header";
import {Intro} from "./components/Intro/Intro";
import {List} from "./components/List/List";
import {Motto} from "./components/Motto/Motto";
import {Range} from "./components/Range/Range";
import {Cite} from "./components/Cite/Cite";
import {News} from "./components/News/News";
import {Footer} from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Intro />
        <List />
        <Motto />
        <Range />
        <Cite />
        <News />
        <Footer />
    </div>
  );
}

export default App;
