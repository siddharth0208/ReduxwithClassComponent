import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {decrement} from '../Redux/reducers';

class Deincrement extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.props.decrement();
          }}
          style={styles.buttonView}>
          <Text style={styles.buttonText}>Deincrement</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonView: {
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: 'red',
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
  decrement: decrement,
};
export default connect(null, mapDispatchToProps)(Deincrement);
