package expo.modules.barcode

import android.content.Context
import android.content.SharedPreferences
import androidx.core.os.bundleOf
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.types.Enumerable

import com.google.zxing.BarcodeFormat
import com.google.zxing.MultiFormatWriter
import com.google.zxing.common.BitMatrix

import android.graphics.Bitmap
import android.graphics.Color

class ExpoBarcodeModule : Module() {
  override fun definition() = ModuleDefinition {
    Name("ExpoBarcode")

    Events("onChangeTheme")

    Function("setTheme") { theme: String ->
      getPreferences().edit().putString("theme", theme).commit()
      this@ExpoBarcodeModule.sendEvent("onChangeTheme", bundleOf("theme" to theme))
    }

    Function("getTheme") {
      return@Function getPreferences().getString("theme", "system")
    }

    Function("generateBarcode") { value: String, width: Int, height: Int ->
      try {
        val bitMatrix: BitMatrix = MultiFormatWriter().encode(value, BarcodeFormat.CODE_128, width, height)
        val bitmap = bitMatrixToBitmap(bitMatrix)
  
        val base64Bitmap = bitmapToBase64(bitmap)

        return@Function base64Bitmap
      } catch (e: Exception) {
        return@Function null
      }
    }

    Function("generateQRCode") { value: String, width: Int, height: Int ->
      try {
        val bitMatrix: BitMatrix = MultiFormatWriter().encode(value, BarcodeFormat.QR_CODE, width, height)
        val bitmap = bitMatrixToBitmap(bitMatrix)
  
        val base64Bitmap = bitmapToBase64(bitmap)

        return@Function base64Bitmap
      } catch (e: Exception) {
        return@Function null
      }
    }
  }

  private val context
  get() = requireNotNull(appContext.reactContext)

  private fun getPreferences(): SharedPreferences {
    return context.getSharedPreferences(context.packageName + ".barcode", Context.MODE_PRIVATE)
  }

  private fun bitMatrixToBitmap(bitMatrix: BitMatrix): Bitmap {
    val width = bitMatrix.width
    val height = bitMatrix.height
    val bitmap = Bitmap.createBitmap(width, height, Bitmap.Config.ARGB_8888)
    for (x in 0 until width) {
      for (y in 0 until height) {
        bitmap.setPixel(x, y, if (bitMatrix[x, y]) Color.BLACK else Color.WHITE)
      }
    }
    return bitmap
  }

  private fun bitmapToBase64(bitmap: Bitmap): String {
    val byteArrayOutputStream = java.io.ByteArrayOutputStream()
    bitmap.compress(Bitmap.CompressFormat.PNG, 100, byteArrayOutputStream)
    val byteArray = byteArrayOutputStream.toByteArray()
    return android.util.Base64.encodeToString(byteArray, android.util.Base64.DEFAULT)
  }
}

enum class Theme(val value: String) : Enumerable {
  LIGHT("light"),
  DARK("dark"),
  SYSTEM("system")
}