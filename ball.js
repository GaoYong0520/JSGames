var Ball = function () {
    var img = imageFromPath('img/ball.png')
    var o = {
        image: img,
        x: 190,
        y: 260,
        speedX: 10,
        speedY: -10,
        fired: false,
        score:0,
    }

    o.fire = function () {
        o.fired = true
    }

    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x > 400) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y > 280) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }

    o.rebound = function () {
        o.speedY = -o.speedY
    }



    return o
}

// var rectIntersects = function (a, b) {
//     //log("a" + ":" + a.x + ";" + a.y)
//     var xIn = b.x > a.x && b.x < a.x + a.image.width
//     var yIn = b.y > a.y && b.y < a.y + a.image.height
//     //log("横轴区间：" + xIn)
//     //log("纵轴区间: " + yIn)
//     if (xIn && yIn)
//         return true
//     return false

// }