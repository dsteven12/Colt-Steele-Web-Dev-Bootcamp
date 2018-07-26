echo("New String", 5);
echo("Food Stuff", 10);
echo("Echo!!!", 10); //should print "Echo!!!" 10x
echo("Tater Tots", 3); //should print "Tater Tots" 3x

function echo(str, num) {
    for(var i = 0; i < num; i++) {
        console.log(str);
    }
}