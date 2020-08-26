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

        const time = (new Date()).getTime();
        ctx.clearRect(0, 0, size, size);

        ctx.strokeStyle = "#CCC";
        ctx.lineWidth = 4;
        ctx.lineJoin = "round";

        for(let i = 0; i <= 8; i++) {
            
            ctx.moveTo(size, size);
            ctx.beginPath();
            
            const r = (i + 1 - (time % 20000)/20000);

            Array.from(Array(Math.floor(i > 0 ? r * 100 + 2 : 101 )).keys())
            .forEach(idx => {
                const t = 2*idx * 0.0314159265 / (r ? r : 1);
                const x = r * Math.cos(t);
                const y = r * Math.sin(t);

                ctx.lineTo( w / 2 + size/10 * trans_x(x,y), h / 2 + size/10 * trans_y(x,y));
            });
            
            ctx.stroke();
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

        //Our draw come here
        const interval = setInterval(() => {
            draw(context, size, height, width );
        }, 20);

        return () => clearInterval(interval);
    }, [draw, height, width]);
  
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