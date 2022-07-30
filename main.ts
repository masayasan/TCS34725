function 色判定 () {
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
    if (1500 < C && C < 2800 && (500 < R && R < 1200) && (300 < G && G < 700 && (400 < B && B < 1000))) {
        色判定結果 = "R"
    }
    if (2000 < C && C < 3500 && (300 < R && R < 600) && (1000 < G && G < 1500 && (1000 < B && B < 1600))) {
        色判定結果 = "G"
    }
    if (3000 < C && C < 4200 && (300 < R && R < 500) && (1000 < G && G < 1200 && (2000 < B && B < 2600))) {
        色判定結果 = "B"
    }
    if (3500 < C && C < 18000 && (1400 < R && R < 4000) && (1500 < G && G < 6300 && (1200 < B && B < 7500))) {
        色判定結果 = "W"
    }
    if (1000 < C && C < 1800 && (250 < R && R < 400) && (400 < G && G < 500 && (400 < B && B < 600))) {
        色判定結果 = "Bk"
    }
}
function RGB値 () {
    serial.writeValue("c", C)
    serial.writeValue("r", R)
    serial.writeValue("g", G)
    serial.writeValue("b", B)
    serial.writeLine("")
}
let 色判定結果 = ""
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
basic.pause(3)
basic.forever(function () {
    色判定()
    serial.writeString("color:")
    serial.writeString(色判定結果)
    serial.writeLine("")
    色判定結果 = ""
    basic.pause(500)
})
