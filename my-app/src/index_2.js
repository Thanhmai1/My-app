import logo from './logo.svg';
import './App.css';
class Welcome extends React.Component{
    render(){
        return() {
            return <h1>Hello World 💐💐</h1>
        }
    }
}
class App extends React.Component{
    render(){
        return <Welcome/>;
    }
}
export default function MyApp(){
    return (
        <div className='App'>
            <Welcome/>
            <Welcome/>
            <Welcome/>
        </div>
    )
}
