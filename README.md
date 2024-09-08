# expo-barcode

Library to generate barcodes and qr codes natively using Kotlin and Swift, integrated with expo.

## Supported Frameworks

- React Native - ❌ - [RN Version](https://github.com/gabriel-logan/mobile-native-barcode-generator)
- Expo - ✅

## Supported Architectures

- Android - ✅
- Ios - ❌
- Windows - ❌
- Mac - ❌
- Linux - ❌

### Add the package to your npm dependencies

```sh
npm install expo-barcode
```

```sh
yarn add expo-barcode
```

### Configure for iOS

Run `npx pod-install` after installing the npm package.


### Configure for Android

## Usage

### Available methods

```js
import {
	BarcodeView,
	QRCodeView,
	generateBarcode,
	generateQRCode,
} from "expo-barcode";
```

### Using the components

#### Simple example

```js
import { QRCodeView } from "expo-barcode";

export default function App() {
	return (
		<View style={styles.container}>
			<QRCodeView value={"Hello World!"} width={250} height={250} />
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
```

```js
import { BarcodeView, QRCodeView } from "expo-barcode";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

export default function App() {
	const [value, setValue] = useState("");
	const [barcodeValue, setBarcodeValue] = useState("");
	const [toggleGenCode, setToggleGenCode] = useState("QR");

	return (
		<View style={styles.container}>
			<Text>Result: </Text>
			{barcodeValue &&
				(toggleGenCode === "QR" ? (
					<QRCodeView value={barcodeValue} width={250} height={250} />
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
```

### Using generating functions

```js
import { generateBarcode, generateQRCode } from "expo-barcode";

async function waitForIt() {
    const qrCodeGenerated = await generateQRCode("Hello", 200, 200);

    console.log(qrCodeGenerated);

    const barCodeGenerated = await generateBarcode("Hello", 300, 200);

    console.log(barCodeGenerated);
}

waitForIt();
```

## Contributors

- Gabriel Logan - Creator

## License

MIT

# API documentation

- [Documentation for the main branch](https://github.com/expo/expo/blob/main/docs/pages/versions/unversioned/sdk/barcode.md)
- [Documentation for the latest stable release](https://docs.expo.dev/versions/latest/sdk/barcode/)

# Installation in managed Expo projects

For [managed](https://docs.expo.dev/archive/managed-vs-bare/) Expo projects, please follow the installation instructions in the [API documentation for the latest stable release](#api-documentation). If you follow the link and there is no documentation available then this library is not yet usable within managed projects &mdash; it is likely to be included in an upcoming Expo SDK release.

# Installation in bare React Native projects

For bare React Native projects, you must ensure that you have [installed and configured the `expo` package](https://docs.expo.dev/bare/installing-expo-modules/) before continuing.

# Contributing

Contributions are very welcome! Please refer to guidelines described in the [contributing guide]( https://github.com/expo/expo#contributing).
