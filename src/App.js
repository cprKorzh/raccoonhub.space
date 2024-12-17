import classes from './App.module.css'
import MainLogo from "./shared/components/Mainlogo/MainLogo";

function App() {
  return (
    <div className={classes.container}>
        <div className={classes.content}>
            <MainLogo />
            <div className={classes.logoTitle}>Вы попали на сайт <a href="https://raccoonhub.space">raccoonhub.space</a>.</div>
        </div>
    </div>
  );
}

export default App;