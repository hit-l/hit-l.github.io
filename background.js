var c=document.getElementById("c");
        var ctx= c.getContext("2d");
        c.height=window.innerHeight;
        c.width=window.innerWidth/1.3;
        var chinese="010110";
        chinese=chinese.split("");
        var font_size=10;
        var columns=c.width/font_size;
        var drops=[];
        for(var i=0;i<columns;i++)
        drops[i]=1;
        function draw(){
        ctx.fillStyle="rgba(29,29,29,0.05)";
        ctx.fillRect(0,0,c.width,c.height);
        ctx.fillStyle="#FFF";
        ctx.font=font_size+"px arial";
        for(var i=0;i<drops.length;i++){
        var text=chinese[Math.floor
        (Math.random()*chinese.length)];
        ctx.fillText(text,i*font_size,drops[i]*font_size);
        if(drops[i]*font_size>c.height&&Math.random()>0.975)
        drops[i]=0;
        drops[i]++;
        }
        }
        setInterval(draw,50);