import React from 'react';
import styleClasses from './App.css';
import Person from '../components/Persons/Person/Person';
import ValidationComponent from '../components/ValidationComponent/ValidationComponent';
import CharComponent from '../components/CharComponent/CharComponent';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfsh', name: 'Max', age: 28 },
      { id: 'dfghe', name: 'Manu', age: 29 },
      { id: 'asdfwe', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    textLength: 0,
    text: ''
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[App.js] getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.text];
    chars.splice(charIndex, 1);
    this.setState(
      {
        text: chars.join(''),
        textLength: chars.length
      }
    );
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  };

  enteredText = (event) => {
    const newTextLength = event.target.value.length;
    this.setState(
      {
        textLength: newTextLength,
        text: event.target.value
      }
    );
  }

  render () {

    console.log('[App.js] render');

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    let chars = null;

    if (this.state.textLength > 0) {
      chars = (
        <div>
          {[...this.state.text].map((char, index) => {
            return (
              <CharComponent
                click={() => this.deleteCharHandler(index)}
                char={char}
              />
            )
          })}
        </div>
      );

    }

    return (
      <div className={styleClasses.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;


// state = {
//   persons: [
//     { name: 'Max', age: 28 },
//     { name: 'Manu', age: 29 },
//     { name: 'Stephanie', age: 26 }
//   ],
//   otherState: 'some other value'
// }

// switchNameHandler = () => {
//   //console.log('Was clicked');
//   // DONT DO THIS: this.state.persons[0].name = 'Maximillian';
//   this.setState( { 
//     persons: [
//       { name: 'Maximilian', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ]
//   } )
// }

/* <Person 
name={this.state.persons[0].name} 
age={this.state.persons[0].age}/>
<Person 
name={this.state.persons[1].name} 
age={this.state.persons[1].age}
click={this.switchNameHandler.bind(this, 'Max!')}
changed={this.nameChangedHandler}/>
<Person 
name={this.state.persons[2].name} 
age={this.state.persons[2].age}/> */