let B = 0
let G = 0
let R = 0
let C = 0
let CMD2 = 128
let CMD162 = 32768
pins.i2cWriteNumber(
41,
CMD2 + 18,
NumberFormat.Int8LE,
false
)
serial.writeValue("ID", pins.i2cReadNumber(41, NumberFormat.Int8BE, false))
pins.i2cWriteNumber(
41,
CMD162 + 448,
NumberFormat.Int16BE,
false
)
serial.writeValue("ATTIME", pins.i2cReadNumber(41, NumberFormat.Int8BE, false))
pins.i2cWriteNumber(
41,
CMD162 + 3843,
NumberFormat.Int16BE,
false
)
serial.writeValue("GAIN", pins.i2cReadNumber(41, NumberFormat.Int8BE, false))
pins.i2cWriteNumber(
41,
CMD162 + 3,
NumberFormat.Int16BE,
false
)
serial.writeValue("ENABLE", pins.i2cReadNumber(41, NumberFormat.Int8BE, false))
basic.pause(100)
basic.forever(function () {
    pins.i2cWriteNumber(
    41,
    160 + 20,
    NumberFormat.Int8LE,
    false
    )
    C = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
    pins.i2cWriteNumber(
    41,
    160 + 22,
    NumberFormat.Int8LE,
    false
    )
    R = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
    pins.i2cWriteNumber(
    41,
    160 + 24,
    NumberFormat.Int8LE,
    false
    )
    G = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
    pins.i2cWriteNumber(
    41,
    160 + 26,
    NumberFormat.Int8LE,
    false
    )
    B = pins.i2cReadNumber(41, NumberFormat.UInt16LE, false)
    if (R > 1500) {
        R = 0
    }
    if (G > 2000) {
        G = 0
    }
    if (B > 3000) {
        B = 0
    }
    serial.writeValue("c", C)
    serial.writeValue("r", R)
    serial.writeValue("g", G)
    serial.writeValue("b", B)
    serial.writeLine("")
    basic.pause(500)
})
