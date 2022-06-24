import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Valorant Trunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
