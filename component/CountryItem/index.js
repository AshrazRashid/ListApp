import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

class CountryItem extends React.PureComponent {
  render() {
    const {name, iso_code} = this.props.item;
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.countryText}>{name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemStyle: {
    margin: 5,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderRadius: 5,
  },

  countryText: {
    padding: 5,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CountryItem;
