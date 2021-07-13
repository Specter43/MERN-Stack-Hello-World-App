// A simple React component
import React from 'react';
import ReactDOM from 'react-dom';
import PlainTextExample from './slate-example';

const App = () => {
    return (
        <div>
            <p>Hello World!</p>
            <PlainTextExample/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('app'));
