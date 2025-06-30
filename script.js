var points=[];
var player=[0,0];
START();
function START()
{
    for(var i=0;i<10000;i++)
    {
        points[points.length]=[Math.floor(Math.random()*1000),Math.floor(Math.random()*1000),Math.floor(Math.random()*1000)+100]
    }
    REFRESH();
    setInterval(function(){REFRESH();},10)
}
function REFRESH()
{
    player[0]+=1;
    player[1]+=1;
    var text="";
    for(var i=0;i<points.length;i++)
    {
        var sx=(points[i][0]-player[0])/points[i][2]*6000;
        if(sx>=-20&&sx<=620)
        {
            var sy=(points[i][1]-player[1])/points[i][2]*4000;
            if(sy>=-20&&sy<=420)
            {
                var size=2000/points[i][2];
                text+="<circle style='fill:white;' r='"+size+"' cx='"+sx+"' cy='"+sy+"'></circle>";
            }
        }
    }
    document.getElementById("svg").innerHTML=text;
}