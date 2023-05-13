var player = {
    x: new Decimal(0),
    y: new Decimal(1)
};

setInterval(function(z){
    document.getElementById("xtext").innerHTML = player.x.toString(1);

    player.x = player.x.plus(player.y.div(10))
}, 100)