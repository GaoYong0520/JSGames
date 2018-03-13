var __main = function () {


    var debug = function(){
        var inputSpeed = document.getElementById("id-input-change")
        log(inputSpeed)
        inputSpeed.addEventListener('input', function (event) {
            var input = event.target

            window.fps = Number(input.value)
            if(window.fps == 0)
                window.fps == 1
        })
    }

    debug();

    var game = Game()

    var paddle = Paddle()
    var ball = Ball()


    var blocks = []


    game.registerAction('a', function () {
        paddle.moveLeft()
    })

    game.registerAction('d', function () {
        paddle.moveRight()
    })
    game.registerAction('f', function () {
        ball.fire()
    })

    var paused = false
    window.addEventListener('keydown', function (event) {
        var key = event.key
        //log(key)
        if (key == 'p') {
            paused = !paused
        }else if('12345'.includes(key)){
            var le = Number(key)
            blocks =  loadLevel(le)
            log(blocks)

        }
    })



    game.update = function () {

        if (paused) return;
        ball.move()

        if (paddle.collide(ball)) {
            ball.speedY *= -1
        }

        //判断ball与block相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                log("ball 和 block相撞")
                block.kill()
                ball.rebound()//反弹
                ball.score+=100
            }
        }



        //掉出挡板，死亡
        if (paddle.drop(ball)) {
            log("Lose")
            //game.clear(paddle, ball)

        }
    }

    game.draw = function () {
        //draw
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            if (blocks[i].alive) {
                game.drawImage(blocks[i])
            }
        }

        var txt = ball.score.toString()
        game.context.fillText(txt,10,290)
    }
}


