import './App.css';
import svg from './asset/coming-soon.539770ed.svg'

function App() {
    return (
        <div className="container">

            <div className="img-container text-center">
                <h1 className="mt-5">
                    🚀
                </h1>
                <h1>
                    به زودی همراه شماییم
                </h1>
                <p className="mt-1">
                    ما در حال ساخت یک پلتفرم برای دونیت کردن پروژه های شما هستیم، لطفا منتظر باشید.
                </p>
                <img className="mt-1"
                     src={svg}/>
            </div>
        </div>
    );
}

export default App;
