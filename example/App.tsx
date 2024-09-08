import * as Settings from "expo-barcode";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme: {Settings.getTheme()}</Text>
    </View>
  );
}
