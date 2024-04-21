input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    welcome()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("A B C5 B A B C5 B ", 500), music.PlaybackMode.UntilDone)
    welcome()
})
function welcome () {
    basic.clearScreen()
    basic.showString("Welcome to Digitech!")
    basic.clearScreen()
}
