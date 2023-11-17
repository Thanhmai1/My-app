import logo from './logo.svg';
import './App.css';
function withStyles (Component){
    return (props) =>{
        const style = {
            color: "red",
            fontSizeL: "1em",
            ...props.style,
        }
        return <Component{...props} style={style}/>;
    }
}
const Text =({style ={}}) => (
    <p style= {{...style,fronFamily: "Inter"}}>Hello World!</p>
)
const StyledText =withStyles(Text);
function Welcome(){
    return (
        <section>
            <h1>Hello world😘</h1>
        </section>
    );
}
function App(){
    return (
        <div className='App'>
            <Welcome name ='Mai'/>
            <Text/>
            <StyledText/>
        </div>
    )
}
function MyApp(){
    return (
        <div className='App'>
            <Welcome/>
            <Welcome/> 
             <Welcome/>
        </div>
    )
}
export default App