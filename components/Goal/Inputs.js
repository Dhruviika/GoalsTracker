import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  ImageBackground,
  Image,
} from "react-native";

function Inputs(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground
        source={require("../../assets/images/bg2.jpg")}
        style={{ flex: 1, opacity: 0.9 }}>
        <View style={styles.inputContainer}>
          <Image
            style={{ flex: 1, width: "40%", flexDirection: "row" }}
            source={require("../../assets/images/bg4.png")}
          />
          <View
            style={{
              flex: 2,
              alignContent: "center",
              justifyContent: "center",
            }}>
            <TextInput
              style={styles.textInput}
              placeholder="Your course goal!"
              onChangeText={goalInputHandler}
              value={enteredGoalText}
            />

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  color="#cccccc"
                  onPress={addGoalHandler}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Cancel"
                  color="#cccccc"
                  onPress={props.onCancel}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
}

export default Inputs;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#cccccc",
    width: 300,
    padding: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginHorizontal: 30,
    borderRadius: 50,
  },
});
