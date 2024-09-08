import { useEffect, useState } from "react";
import { Image } from "react-native";
import ExpoBarcodeModule from "./ExpoBarcodeModule";

interface CodeViewProps {
  value: string;
  width: number;
  height: number;
}

interface QRCodeViewProps extends CodeViewProps {}

interface BarcodeViewProps extends CodeViewProps {}

export async function generateBarcode(
  value: string,
  width: number,
  height: number,
): Promise<string> {
  const returnValue = await ExpoBarcodeModule.generateBarcode(
    value,
    width,
    height,
  );

  const finalReturn = `data:image/png;base64,${returnValue}`;

  return finalReturn;
}

export async function generateQRCode(
  value: string,
  width: number,
  height: number,
): Promise<string> {
  const returnValue = await ExpoBarcodeModule.generateQRCode(
    value,
    width,
    height,
  );

  const finalReturn = `data:image/png;base64,${returnValue}`;

  return finalReturn;
}

export function BarcodeView({ value, width, height }: BarcodeViewProps) {
  const [barcode, setBarcode] = useState<string | undefined>("");

  if (value === "") {
    throw new Error("Value cannot be empty");
  }

  if (width <= 0 || typeof width !== "number") {
    throw new Error("Width must be a positive number");
  }

  if (height <= 0 || typeof height !== "number") {
    throw new Error("Height must be a positive number");
  }

  useEffect(() => {
    async function waitFor() {
      const barcodeGeneradet = await generateBarcode(value, width, height);

      setBarcode(barcodeGeneradet);
    }

    waitFor();

    return () => {
      setBarcode("");
    };
  }, [height, value, width]);

  return (
    <>
      {barcode && (
        <Image
          testID="barcode"
          source={{ uri: barcode }}
          style={{
            width,
            height,
          }}
        />
      )}
    </>
  );
}

export function QRCodeView({ value, width, height }: QRCodeViewProps) {
  const [barcode, setBarcode] = useState<string | undefined>("");

  if (value === "") {
    throw new Error("Value cannot be empty");
  }

  if (width <= 0 || typeof width !== "number") {
    throw new Error("Width must be a positive number");
  }

  if (height <= 0 || typeof height !== "number") {
    throw new Error("Height must be a positive number");
  }

  useEffect(() => {
    async function waitFor() {
      const qrCodeGeneradet = await generateQRCode(value, width, height);

      setBarcode(qrCodeGeneradet);
    }

    waitFor();

    return () => {
      setBarcode("");
    };
  }, [height, value, width]);

  return (
    <>
      {barcode && (
        <Image
          testID="qr-code"
          source={{ uri: barcode }}
          style={{
            width,
            height,
          }}
        />
      )}
    </>
  );
}