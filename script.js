var Clacks = Math.ceil(9*Math.random());
var Score = Clacks*Math.random()*5;
var ExecuteAmount = document.getElementById('Amount');
var ExecuteRating = document.getElementById('Rating');

function StarColor(StarNumber, percent)
{
    var Kerelman = 'Star' + StarNumber;
    percent = Math.min(percent, 100);
    document.getElementById(Kerelman).style.width = percent+'%';
}

//StarColor(2.40);

function ColorTheStars(Rating)
{
    for(var i=1; i<6; i++;)
    {
        StarColor(i, Rating*100);
        Rating --;
    }
}

ExecuteAmount.innerHTML = Clacks;
ExecuteRating.innerHTML = Math.ceil(10*Score/Clacks)/10;
ColorTheStars(Math.ceil(10*Score/Clacks)/10);