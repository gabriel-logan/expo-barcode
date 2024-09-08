import { BarcodeView, QRCodeView } from "expo-barcode";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [value, setValue] = useState("");
  const [barcodeValue, setBarcodeValue] = useState("");
  const [toggleGenCode, setToggleGenCode] = useState("QR");

  return (
    <View style={styles.container}>
      <Text>Result: </Text>
      {barcodeValue &&
        (toggleGenCode === "QR" ? (
          <QRCodeView value={barcodeValue} width={350} height={350} />
        ) : (
          <BarcodeView value={barcodeValue} width={300} height={100} />
        ))}
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder="Type Here"
      />
      <Button title="Generate QR Code" onPress={() => setBarcodeValue(value)} />
      <Button
        title="Toggle QR/Barcode"
        onPress={() =>
          setToggleGenCode(toggleGenCode === "QR" ? "Barcode" : "QR")
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
