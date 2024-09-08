import * as React from "react";

import { ExpoBarcodeViewProps } from "./ExpoBarcode.types";

export default function ExpoBarcodeView(props: ExpoBarcodeViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
