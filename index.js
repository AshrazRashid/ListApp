import React, { useEffect } from "react";
import { AppRegistry, StyleSheet, Text, View, FlatList } from "react-native";
import getcountries from "react-native-get-countries";
import { CountryItem, Container } from "./component";

const HelloWorld = () => {
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    getcountries()
      .then((res) => setCountries(res))
      .catch((err) => console.log("err", err));
  }, [countries]);

  const renderItem = ({ item }) => (
    <CountryItem item={item} onItemPress={() => console.log()} />
  );

  return (
    <Container>
      <FlatList
        keyExtractor={(item, index) => item + index}
        initialNumToRender={10}
        contentContainerStyle={{
          justifyContent: "center",
        }}
        style={styles.container}
        data={countries}
        renderItem={renderItem}
      />
    </Container>
  );
};
var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

AppRegistry.registerComponent("MyReactNativeApp", () => HelloWorld);
