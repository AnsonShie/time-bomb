let count = 0
let target = 0
input.onButtonPressed(Button.A, function () {
    count = 0
    target = 8
    basic.showNumber(4)
    if (count >= target) {
        basic.showIcon(IconNames.Heart)
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        basic.pause(1000)
        basic.showNumber(3)
        if (count >= target) {
            basic.showIcon(IconNames.Heart)
            music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        } else {
            basic.pause(1000)
            basic.showNumber(2)
            if (count >= target) {
                basic.showIcon(IconNames.Heart)
                music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
            } else {
                basic.pause(1000)
                basic.showNumber(1)
                if (count >= target) {
                    basic.showIcon(IconNames.Heart)
                    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
                } else {
                    basic.pause(1000)
                    basic.showNumber(0)
                    if (count >= target) {
                        basic.showIcon(IconNames.Heart)
                        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
                    } else {
                        basic.showIcon(IconNames.No)
                        music.startMelody(music.builtInMelody(Melodies.Punchline), MelodyOptions.Once)
                    }
                }
            }
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    count += 1
})
