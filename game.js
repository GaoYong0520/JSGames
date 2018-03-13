var Game = function (fps) {
    var g = {
        actions: {}, //key-value
        keydowns: {},
    }
    var canvas = document.querySelector("#id-canvas")
    var context = canvas.getContext('2d')
    g.canvas = canvas
    g.context = context

    //draw
    g.drawImage = function (img) {
        g.context.drawImage(img.image, img.x, img.y)
    }

    //events

    //keydown
    window.addEventListener('keydown', function (event) {
        g.keydowns[event.key] = true
    })
    //keyup
    window.addEventListener('keyup', function (event) {
        g.keydowns[event.key] = false;
    })

    //register events
    g.registerAction = function (key, callback) {
        g.actions[key] = callback
    }


    //Clear
    g.clear = function (paddle, ball) {
        paddle.x = 125
        paddle.y = 280
        ball.x = 190
        ball.y = 260
        //g.context.clearRect(0, 0, g.canvas.width, g.canvas.height)
        this.draw()
        ball.fired = false;
    }


    window.fps = 30
    var runLoop = function () {
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (g.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                g.actions[key]()
            }
        }
        // update
        g.update()
        // clear
        context.clearRect(0, 0, canvas.width, canvas.height)
        // draw
        g.draw()


        setTimeout(function () {
            runLoop()
        }, 1000 / window.fps)
    }

    setTimeout(function () {
        runLoop()
    }, 1000 / window.fps)


    // setInterval(function () {
    //     // events
    //     var actions = Object.keys(g.actions)
    //     for (var i = 0; i < actions.length; i++) {
    //         var key = actions[i]
    //         if (g.keydowns[key]) {
    //             // 如果按键被按下, 调用注册的 action
    //             g.actions[key]()
    //         }
    //     }
    //     // update
    //     g.update()
    //     // clear
    //     context.clearRect(0, 0, canvas.width, canvas.height)
    //     // draw
    //     g.draw()
    // }, 1000 / fps)

    return g
}