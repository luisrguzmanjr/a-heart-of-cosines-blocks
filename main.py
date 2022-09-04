def DrawHeart(step):
    x = 0
    y = 0 
    heart.fill(0)
    for x in range(-1*Math.PI/2,Math.PI/2,step):
        y = Math.sqrt(Math.cos(x))*Math.cos(200*x) + Math.sqrt(abs(x)) - 0.7*(4 - x*x)**0.01
        ix = x*width/3.5+80
        iy = y*height/3.5 + 80
        # draw red pixel point on the heart image
        heart.set_pixel(ix, iy, 2)
    heart.flip_y()

def on_event_pressed():
    global step
    if (step <= 0.01):
        step = step + 0.00005
    DrawHeart(step)
    pass

def on_event2_pressed():
    global step
    if (step >= 0.0001):
        step = step - 0.00005
    DrawHeart(step)
    pass
# set heart width and height
width = 160
height = 140
heart: Image = None
heart = image.create(width, height)
step = 0.001
# add image to sprite to render to screen
showHeart: Sprite = None
showHeart = sprites.create(heart, SpriteKind.player)

# draw heart
DrawHeart(step)
controller.A.on_event(ControllerButtonEvent.REPEATED, on_event_pressed)
controller.B.on_event(ControllerButtonEvent.REPEATED, on_event2_pressed)
