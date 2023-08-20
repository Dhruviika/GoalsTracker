import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Button,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
import Items from "./components/Goal/Items";
import Inputs from "./components/Goal/Inputs";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <ImageBackground
        source={require("./assets/images/bg2.jpg")}
        style={styles.bgimage}>
        <View style={styles.appContainer}>
          <View style={styles.box1}>
            <Text style={{ color: "white", fontSize: 50 }}>
              Today's Schedule
            </Text>
          </View>

          <Inputs
            visible={modalIsVisible}
            onAddGoal={addGoalHandler}
            onCancel={endAddGoalHandler}
          />
          <View style={styles.goalsContainer}>
            <FlatList
              data={courseGoals}
              renderItem={(itemData) => {
                return (
                  <Items
                    text={itemData.item.text}
                    id={itemData.item.id}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item, index) => {
                return item.id;
              }}
              alwaysBounceVertical={false}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}>
            <Pressable onPress={startAddGoalHandler}>
              <Icon name="plus" size={30} color="white" />
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    opacity: 0.85,
  },
  appContainer: {
    flex: 1,
  },

  box1: {
    flex: 2,
    marginTop: 60,
    padding: 10,
  },
  goalsContainer: {
    flex: 6,
    flexDirection: "column",
    alignItems: "center",
  },
});
