import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

// This is a "Class Component"
class App extends Component {

    constructor(){
        super();

        this.state = {
            monsters: []
        };
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users }));
    }

    render(){
        return (
            <div className="App">
            <CardList name = 'Yihua'>
                <h1>Yihua</h1>
            </CardList>
                {
                    this.state.monsters.map(monster => <h1>{ monster.name }</h1>)
                }
            </div>
        );
    }
}

export default App;
