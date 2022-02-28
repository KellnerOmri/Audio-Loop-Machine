import './App.module.css';
import {img_logo} from './utils/ImageManagement';
import myStyles from './App.module.css';
import {authorName} from './utils/DictioneryManagement';
// import Main3 from './component/Main3';
import Main from './component/Main';

function App() {
  return (
    <div>
      <div className={myStyles.App}>
        <img src={img_logo} className={myStyles.img_logo}/>
        <h3 className={myStyles.author_name}>{authorName}</h3>
      </div>
      <Main/>
    </div>
  );
}

export default App;
