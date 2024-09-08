import ExpoBarcodeModule from "../ExpoBarcodeModule";

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
