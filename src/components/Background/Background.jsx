import React, { useRef, useEffect } from "react";
import "./Background.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Background = props => {
    const { height, width } = useWindowDimensions();
    const canvasRef = useRef(null)
    
    const draw = ( ctx, size, h, w ) => {

        const trans_x = (x,y) =>
            x + 0.125 * (Math.cos(4*x) + Math.sin(4*y) - 1);

        const trans_y = (x,y) =>
            y + 0.125 * (Math.cos(4*x) + Math.sin(4*y) - 1);

        const time = (new Date()).getTime() % 20000 / 20000;
        ctx.clearRect(0, 0, size, size);

        ctx.strokeStyle = "#CCC";
        ctx.lineWidth = 4;
        ctx.lineJoin = "round";
        const sides = 9;
        const layers = 8;

        for(let i = 0; i <= layers; i++) {

            Array.from(Array(sides).keys())
            .forEach(index => {

                let aIndex = 2 * index;

                let r = i + 1 - time;
                let a = aIndex * 2 * 3.14159265 / sides;
                const x_0 = r * Math.cos(a);
                const y_0 = r * Math.sin(a);
                ctx.moveTo( w / 2 + size/10 * trans_x(x_0,y_0), h / 2 + size/10 * trans_y(x_0,y_0));

                ctx.fillStyle = `rgba(204,204,204,${(r - 0.5)/layers})`;
                ctx.beginPath();

                r = i - time;
                r = r > 0 ? r : 0;
                a = aIndex * 2 * 3.14159265 / sides;
                let x = r * Math.cos(a);
                let y = r * Math.sin(a);
                ctx.lineTo( w / 2 + size/10 * trans_x(x,y), h / 2 + size/10 * trans_y(x,y));

                aIndex += 1;

                r = i + 1 - time;
                a = aIndex * 2 * 3.14159265 / sides;
                x = r * Math.cos(a);
                y = r * Math.sin(a);
                ctx.lineTo( w / 2 + size/10 * trans_x(x,y), h / 2 + size/10 * trans_y(x,y));
                
                r = i - time;
                r = r > 0 ? r : 0;
                a = aIndex * 2 * 3.14159265 / sides;
                ctx.lineTo( w / 2 + size/10 * trans_x(x_0,y_0), h / 2 + size/10 * trans_y(x_0,y_0));

                ctx.fill();
            });
        }
    }
    
    useEffect(() => {
        
        const canvas = canvasRef.current
        const context = canvas.getContext("2d")
        
        const size = (height > width ? height : width);
        canvas.width = size;
        canvas.height = size;
        canvas.style.width = size + "px";
        canvas.style.height = size + "px";

        const interval = setInterval(() => {
            draw(context, size, height, width );
        }, 50);

        return () => clearInterval(interval);
    }, []);
  
    return (
        <div className="background-wrapper">
            <div className="background">
                <canvas ref={canvasRef} {...props}/>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    );
}

export default Background