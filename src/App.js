import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'dw1e3df', name: 'David', age: '24' },
      { id: '5hgb9ny', name: 'Edu', age: '21' },
      { id: '6438j7e', name: 'Marina', age: '23' },
    ],
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    console.log('I\'ve been clicked');
    this.setState({
      persons: [
        { id: 'dw1e3df', name: newName, age: '24' },
        { id: '5hgb9ny', name: 'Edu', age: '21' },
        { id: '6438j7e', name: 'Marina', age: '23' },
      ]
    });
  }

  nameChangedHandler = (event, personIndex) => {
    const persons = [...this.state.persons];
    const person = persons[personIndex];
    person.name = event.target.value;

    this.setState({ persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    // Everything inside the render method gets executed
    //  every time React re-renders this component
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person
              click={() => this.deletePersonHandler(i)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, i)}>
            </Person>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black',
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler} >Toggle Persons
        </button>
          {persons}
        </div>
    );
  }
}

export default App;
