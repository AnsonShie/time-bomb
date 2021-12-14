count = 0
target = 0

def on_button_pressed_a():
    global count, target
    count = 0
    target = 20
    basic.pause(100)
    basic.show_number(4)
    if count >= target:
        basic.show_icon(IconNames.HEART)
        music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
    else:
        basic.pause(100)
        basic.show_number(3)
        if count >= target:
            basic.show_icon(IconNames.HEART)
            music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
        else:
            basic.pause(100)
            basic.show_number(2)
            if count >= target:
                basic.show_icon(IconNames.HEART)
                music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
            else:
                basic.pause(100)
                basic.show_number(1)
                if count >= target:
                    basic.show_icon(IconNames.HEART)
                    music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
                else:
                    basic.pause(100)
                    basic.show_number(0)
                    basic.show_icon(IconNames.NO)
                    music.start_melody(music.built_in_melody(Melodies.PUNCHLINE),
                        MelodyOptions.ONCE)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_shake():
    global count
    count += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
