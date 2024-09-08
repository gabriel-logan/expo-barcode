import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to ExpoBarcode.web.ts
// and on native platforms to ExpoBarcode.ts
import { ChangeEventPayload, ExpoBarcodeViewProps } from "./ExpoBarcode.types";
import ExpoBarcodeModule from "./ExpoBarcodeModule";
import ExpoBarcodeView from "./ExpoBarcodeView";

// Get the native constant value.
export const PI = ExpoBarcodeModule.PI;

export function hello(): string {
  return ExpoBarcodeModule.hello();
}

export async function setValueAsync(value: string) {
  return await ExpoBarcodeModule.setValueAsync(value);
}

const emitter = new EventEmitter(
  ExpoBarcodeModule ?? NativeModulesProxy.ExpoBarcode,
);

export function addChangeListener(
  listener: (event: ChangeEventPayload) => void,
): Subscription {
  return emitter.addListener<ChangeEventPayload>("onChange", listener);
}

export { ExpoBarcodeView, ExpoBarcodeViewProps, ChangeEventPayload };
