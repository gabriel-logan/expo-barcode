import ExpoBarcodeModule from "../ExpoBarcodeModule";

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
