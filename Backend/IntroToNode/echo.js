echo("New String", 5);
echo("Food Stuff", 10);
echo("Echo!!!", 10);
echo("Tater Tots", 3);

function echo(str, num) {
    for(var i = 0; i < num; i++) {
        console.log(str);
    }
}