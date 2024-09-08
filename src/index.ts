import { EventEmitter, Subscription } from "expo-modules-core";

import ExpoBarcodeModule from "./ExpoBarcodeModule";

const emitter = new EventEmitter(ExpoBarcodeModule);

export type Theme = "light" | "dark" | "system";

export type ThemeChangeEvent = {
  theme: Theme;
};

export function addThemeListener(
  listener: (event: ThemeChangeEvent) => void,
): Subscription {
  return emitter.addListener<ThemeChangeEvent>("onChangeTheme", listener);
}

export function getTheme(): Theme {
  return ExpoBarcodeModule.getTheme();
}

export function setTheme(theme: Theme): void {
  return ExpoBarcodeModule.setTheme(theme);
}
