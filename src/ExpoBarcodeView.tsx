import { requireNativeViewManager } from "expo-modules-core";
import * as React from "react";

import { ExpoBarcodeViewProps } from "./ExpoBarcode.types";

const NativeView: React.ComponentType<ExpoBarcodeViewProps> =
  requireNativeViewManager("ExpoBarcode");

export default function ExpoBarcodeView(props: ExpoBarcodeViewProps) {
  return <NativeView {...props} />;
}
