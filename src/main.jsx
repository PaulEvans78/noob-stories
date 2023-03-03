import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


const Styledmain = styled.main`
    /* background-image: linear-gradient(#27dff7, #242424); */
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    grid-area: main;
    padding-right: 2.5em;
    font-family: 'Roboto', sans-serif;
    color: whitesmoke;
    font-size: 1.25rem;
`;

// 

const Main = () => {
    return (
        <Styledmain>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>        
        </Styledmain>
    );
}

export default Main;