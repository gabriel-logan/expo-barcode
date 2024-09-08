import { StyleSheet, Text, View } from 'react-native';

import * as ExpoBarcode from 'expo-barcode';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoBarcode.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
