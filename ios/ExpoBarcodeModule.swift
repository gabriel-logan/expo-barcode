import ExpoModulesCore

public class ExpoBarcodeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoBarcode")

    Events("onChangeTheme")

    Function("setTheme") { (theme: String) -> Void in
      UserDefaults.standard.set(theme, forKey:"theme")
      sendEvent("onChangeTheme", [
        "theme": theme
      ])
    }

    Function("getTheme") { () -> String in
      UserDefaults.standard.string(forKey: "theme") ?? "system"
    }

    Function("generateQRCode") { (data: String) -> String in
      return "data:image/png;base64,QR_CODE"
    }

    Function("generateBarCode") { (data: String) -> String in
      return "data:image/png;base64,BAR_CODE"
    }
  }

  enum Theme: String, Enumerable {
    case light
    case dark
    case system
  }
}
