let Z = 0
input.onGesture(Gesture.Shake, function () {
    basic.pause(1000)
    Z = randint(0, 5)
    if (Z == 0) {
        basic.showNumber(1)
        basic.pause(300)
        basic.clearScreen()
    }
    if (Z == 1) {
        basic.showNumber(2)
        basic.pause(300)
        basic.clearScreen()
    }
    if (Z == 2) {
        basic.showNumber(3)
        basic.pause(300)
        basic.clearScreen()
    }
    if (Z == 3) {
        basic.showNumber(4)
        basic.pause(300)
        basic.clearScreen()
    }
    if (Z == 4) {
        basic.showNumber(5)
        basic.pause(300)
        basic.clearScreen()
    }
    if (Z == 5) {
        basic.showNumber(6)
        basic.pause(300)
        basic.clearScreen()
    }
})
