import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <View style={styles.titleView}>
        <Text style={styles.titleText}>Counter - {this.props.value}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleView: {
    marginTop: 20,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
});

const mapStateToProps = function (state) {
  console.log(state);
  console.log(state.counter.value);
  return {value: state.counter.value};
};

export default connect(mapStateToProps)(Counter);
