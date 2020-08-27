import React, { useRef, useEffect } from "react";
import "./Background.css";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Background = props => {
    const { height, width } = useWindowDimensions();
    const canvasRef = useRef(null)
    
    const draw = ( ctx, size, h, w ) => {
        ctx.clearRect(0, 0, size, size);
        
        // Transformed coordinate space
        const trans_x = (x,y) =>
            x + 0.1 * (Math.cos(5*x) + Math.sin(5*y));
        
        const trans_y = (x,y) =>
            y + 0.1 * (Math.cos(5*x) + Math.sin(5*y));
        

        const time = (new Date()).getTime() % 20000 / 20000;

        const layers = 8;
        const symmetry = 9;

        for( let i = 0; i < layers; i++ ) {

            for( let j = 0; j < symmetry; j++ ) {

                // polar coordinate of first vertex
                let r = i + 1 - time;
                r = r > 0 ? r : 0;
                let a = j * 2 * Math.PI / symmetry;

                // cartesian of first vertex
                const x_0 = r * Math.cos(a);
                const y_0 = r * Math.sin(a);

                // VERTEX 0
                // transform, scale, and center
                ctx.moveTo(
                    w / 2 + size/10 * trans_x(x_0,y_0),
                    h / 2 + size/10 * trans_y(x_0,y_0)
                );

                // color based on vertex A's position
                ctx.fillStyle = `rgba(
                    ${190},
                    ${220*(0.5 + Math.sin( 3*a + Math.PI*r )/2)},
                    ${190},
                    ${(r - 0.5)/layers})`;
                
                ctx.beginPath();
                
                // in 1 (bottom out at 0)
                r = --r > 0 ? r : 0;
                
                // cartesian of next vertex
                let x = r * Math.cos(a);
                let y = r * Math.sin(a);

                // VERTEX 1
                // transform, scale, and center
                ctx.lineTo(
                    w / 2 + size/10 * trans_x(x,y),
                    h / 2 + size/10 * trans_y(x,y)
                );
                
                // initial radius, CW 1
                r = i + 1 - time;
                a = (j - 1) * 2 * Math.PI / symmetry;
                
                // cartesian
                x = r * Math.cos(a);
                y = r * Math.sin(a);

                // VERTEX 2
                // transform, scale, and center
                ctx.lineTo(
                    w / 2 + size/10 * trans_x(x,y),
                    h / 2 + size/10 * trans_y(x,y)
                );

                // VERTEX 0 (return to start)
                // transform, scale, and center
                ctx.lineTo(
                    w / 2 + size/10 * trans_x(x_0,y_0),
                    h / 2 + size/10 * trans_y(x_0,y_0)
                );
                
                ctx.fill();
            }
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