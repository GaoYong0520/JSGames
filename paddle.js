var Paddle = function () {
    var image = imageFromPath('img/paddle.png')
    var o = {
        image: image,
        x: 125,
        y: 280,
        speed: 15,
    }

    var paddle = o

    o.move = function(x){
        if(x<0){
            x=0
        }
        if(x+o.image.width>400){
            x = 400- o.image.width
        }

        o.x = x
    }
    o.moveLeft = function () {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function () {
        o.move(paddle.x + paddle.speed)
    }

    //相撞判断
    o.collide = function (ball) {
        if (ball.y + ball.image.height > o.y) {
            if (ball.x > o.x && ball.x < o.x + o.image.width) {
                log("相撞")
                return true
            }
        }
        return false
    }


    //掉落
    o.drop = function (ball) {
        if (ball.y > 260) {
            if (ball.x < o.x || ball.x > o.x + o.image.width) {
                //log("球掉了")
                //log("ball x:" + ball.x)
                //log("paddle x:" + paddle.x)
                return true
            }
            return false

        }

        return false
    }

    return o
}