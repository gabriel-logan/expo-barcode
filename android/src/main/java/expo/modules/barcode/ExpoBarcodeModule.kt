package expo.modules.barcode

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class ExpoBarcodeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoBarcode")

    Function("getTheme") {
      return@Function "system"
    }
  }
}
