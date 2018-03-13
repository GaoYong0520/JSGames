var Block = function (xx,yy) {
    var image = imageFromPath("img/block.png")
    var o = {
        image: image,
        x: xx,
        y: yy,
        w: 50,
        h: 20,
        alive: true,
        lives:5
    }

    o.kill = function () {
        o.alive = false
    }

    // o.collide = function (b) {
    //     //log("collide")
    //     var result = o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    //     //log(result)
    //     return result
    // }

    //判断block与ball相撞
    o.collide = function (b) {
        // log('block', o.alive, b)
        //log("碰上了？" + (rectIntersects(o, b) || rectIntersects(b, o)))
        return o.alive && (rectIntersects(o, b) || rectIntersects(b, o))
    }



    return o
}
