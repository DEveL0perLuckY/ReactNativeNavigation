import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              title: "Home screen",
              headerStyle: { backgroundColor: "orange" },
            }}
            component={Home}
          />
          <Stack.Screen
            name="About"
            options={{ title: "About us screen" }}
            component={About}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export const Home = (props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home screen</Text>
      <Button
        onPress={() => {
          props.navigation.navigate("About");
        }}
        title="About us"
      />
    </View>
  );
};

export const About = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>About us </Text>
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        title="go back..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d6efd",

    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 23,
  },
});
