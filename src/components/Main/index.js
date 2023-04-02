import './style.css'

function Main(props) {
    return(
        <main>
            <h2>Main</h2>
            {props.children}
        </main>
    )
};

export default Main;