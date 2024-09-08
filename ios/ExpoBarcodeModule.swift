import ExpoModulesCore

public class ExpoBarcodeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoBarcode")

    Function("getTheme") { () -> String in
      "system"
    }
  }
}
