/**
 * for (x = -1 * Math.PI / 2; x < Math.PI / 2; x += step) {
 * 
 * y = Math.sqrt(Math.cos(x)) * Math.cos(200 * x) + Math.sqrt(Math.abs(x)) - 0.7 * (4 - x * x) ** 0.01
 * 
 * ix = x * width / 3.5 + 80
 * 
 * iy = y * height / 3.5 + 80
 * 
 * //  draw red pixel point on the heart image
 * 
 * heart.setPixel(ix, iy, 2)
 * 
 * }
 */
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (step >= 0.0001) {
        step = step - 0.00005
    }
    DrawHeart(step)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (step <= 0.01) {
        step = step + 0.00005
    }
    DrawHeart(step)
})
controller.B.onEvent(ControllerButtonEvent.Repeated, function () {
    if (step >= 0.0001) {
        step = step - 0.00005
    }
    DrawHeart(step)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (step <= 0.01) {
        step = step + 0.00005
    }
    DrawHeart(step)
})
function DrawHeart (step: number) {
    heart.fill(0)
    x = -1.57079632679
    while (x < 1.57079632679) {
        y = Math.sqrt(Math.cos(x)) * Math.cos(200 * x) + Math.sqrt(Math.abs(x)) - 0.7 * (4 - x * x) ** 0.01
        ix = x * width / 3.5 + 80
        iy = y * height / 3.5 + 80
        heart.setPixel(ix, iy, 2)
        x += step
    }
    heart.flipY()
}
let step = 0
let heart: Image = null
let height = 0
let width = 0
let iy = 0
let ix = 0
let y = 0
let x = 0
x = 0
y = 0
ix = 0
iy = 0
// set heart width and height
width = 160
height = 140
heart = image.create(width, height)
step = 0.001
let showHeart = sprites.create(heart, SpriteKind.Player)
game.splash("Press A to increase step size")
game.splash("Press B to decrease step size")
// draw heart
DrawHeart(step)
