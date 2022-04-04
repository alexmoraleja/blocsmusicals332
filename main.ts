input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Whole))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(698, music.beat(BeatFraction.Half))
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . # # #
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . . # .
        . . . . #
        `)
    basic.showLeds(`
        # # # . .
        . # . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # . . . .
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
