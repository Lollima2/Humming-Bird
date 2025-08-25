input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
})
hummingbird.startHummingbird()
loops.everyInterval(1000, function on_every_interval() {
    hummingbird.setLED(ThreePort.One, 100)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.One, 0)
    basic.pause(1000)
})
loops.everyInterval(500, function on_every_interval2() {
    hummingbird.setLED(ThreePort.Three, 100)
    basic.pause(1000)
    hummingbird.setLED(ThreePort.Three, 0)
    basic.pause(1000)
})
loops.everyInterval(500, function on_every_interval3() {
    hummingbird.setPositionServo(FourPort.Three, 90)
    hummingbird.setPositionServo(FourPort.Two, 180)
})
basic.forever(function on_forever() {
    hummingbird.setTriLED(TwoPort.Two, 255, 192, 160)
    basic.pause(1000)
    if (hummingbird.getSensor(SensorType.Distance, ThreePort.Three) < 15) {
        hummingbird.setRotationServo(FourPort.One, 0)
        hummingbird.setRotationServo(FourPort.Four, 0)
        basic.pause(1000)
        hummingbird.setRotationServo(FourPort.One, 100)
        hummingbird.setRotationServo(FourPort.Four, 0)
    } else {
        hummingbird.setRotationServo(FourPort.One, 90)
        hummingbird.setRotationServo(FourPort.Four, -100)
        hummingbird.setPositionServo(FourPort.Three, 180)
        hummingbird.setPositionServo(FourPort.Two, 90)
    }
    
})
loops.everyInterval(800, function on_every_interval4() {
    hummingbird.setLED(ThreePort.Two, 100)
    basic.pause(900)
    hummingbird.setLED(ThreePort.Two, 0)
    basic.pause(900)
})
