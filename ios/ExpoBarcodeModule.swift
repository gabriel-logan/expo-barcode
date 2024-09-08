import ExpoModulesCore

public class ExpoBarcodeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoBarcode")

    Function("generateQRCode") { (data: String) -> String in
      return "data:image/png;base64,QR_CODE"
    }

    Function("generateBarCode") { (data: String) -> String in
      return "data:image/png;base64,BAR_CODE"
    }
  }
}
