'use strict';

var React = require('react');
var ReactNative = require('react-native');
var SearchPage = require('./SearchPage');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 28,
    textAlign: 'center',
    margin: 75
  },
  container: {
    flex: 1
  }
});

class anwbgning extends React.Component {
  render() {
    return (
      <ReactNative.NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'A New Begining',
          component: SearchPage,
        }}/>
    );
  }
}


ReactNative.AppRegistry.registerComponent('anwbgning', function() { return anwbgning });