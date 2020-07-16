input.onButtonPressed(Button.A, function () {
    if (led2 > 0) {
        led.unplot(led2, 0)
        led2 += -1
        led.plot(led2, 0)
    }
})
input.onButtonPressed(Button.B, function () {
    if (led2 < 4) {
        led.unplot(led2, 0)
        led2 += 1
        led.plot(led2, 0)
    }
})
let led2 = 0
led2 = 0
led.plot(led2, 0)
basic.forever(function () {
    while (led2 < 4 || led2 > 0) {
        while (led2 < 4) {
            basic.pause(500)
            led.unplot(led2, 0)
            led2 += 1
            led.plot(led2, 0)
            basic.pause(500)
        }
        while (led2 > 0) {
            basic.pause(500)
            led.unplot(led2, 0)
            led2 += -1
            led.plot(led2, 0)
            basic.pause(500)
        }
    }
})
