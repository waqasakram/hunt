function colder () {
    basic.showLeds(`
        . . # # #
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . # # #
        . . . # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # #
        . . . # .
        `)
}
input.onButtonPressed(Button.A, function () {
    radio.sendString("Colder")
    colder()
})
function warmer () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        . . . . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
}
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Colder") {
        colder()
    } else if (receivedString == "Warmer") {
        warmer()
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Warmer")
    warmer()
})
radio.setGroup(1)
