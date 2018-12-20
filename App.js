import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'World!',
    }
  }

  onClick = () => {
    this.setState({
      name: 'John!',
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello {this.state.name}</Text>
        <Button onPress={() => {this.onClick()}} title='Click me'> </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
