import * as Settings from "expo-barcode";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function App() {
  const [theme, setTheme] = useState<string>(Settings.getTheme());

  useEffect(() => {
    const subscription = Settings.addThemeListener(({ theme: newTheme }) => {
      setTheme(newTheme);
    });

    return () => subscription.remove();
  }, [setTheme]);

  // Toggle between dark and light theme
  const nextTheme = theme === "dark" ? "light" : "dark";

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Theme: {Settings.getTheme()}</Text>
      <Button
        title={`Set theme to ${nextTheme}`}
        onPress={() => Settings.setTheme(nextTheme)}
      />
    </View>
  );
}
