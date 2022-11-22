import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {increment} from '../Redux/reducers';
import {connect} from 'react-redux';
class Increment extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.increment();
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Increment</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'blue',
    borderRadius: 15,
    width: '40%',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 5,
  },
});

const mapDispatchToProps = {
  increment: increment,
};
export default connect(null, mapDispatchToProps)(Increment);
