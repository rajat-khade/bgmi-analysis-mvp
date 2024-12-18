import { useEffect, useRef } from "react";

const PlayerMovementMap = ({ imageSrc, data, sourceDimensions }) => {
  const canvasRef = useRef(null);
  const erangleMapAdjustment = {
    x:-100, y:-250
  }

  useEffect(() => {
    if (canvasRef.current && data) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Clear previous drawings
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const image2 = new Image();
      image2.src = "/bmps2024/d1-m1-erangle.png";
      image2.onload = () => {
        const sourceWidth = image2.width;
        const sourceHeight = image2.height;
        console.log(sourceWidth, 'SW & ' ,sourceHeight, 'SH');
        
      }

      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const targetWidth = image.width;
        const targetHeight = image.height;

        // Set canvas dimensions to match the target image
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Draw the target image
        ctx.drawImage(image, 0, 0);

        // Map positions with scaling
        data.forEach((frame) => {
          frame.positions.forEach(({ x, y }) => {
            // Scale positions
            const scaledX = x * (targetWidth / sourceDimensions.width);
            const scaledY = y * (targetHeight / sourceDimensions.height);

            // Draw scaled positions
            ctx.fillStyle = "rgba(0, 255, 255, 0.7)"; // Semi-transparent red
            const radius = 10; // Radius for circles
            ctx.beginPath();
            ctx.arc(scaledX + erangleMapAdjustment.x, scaledY + erangleMapAdjustment.y, radius, 0, Math.PI * 2);
            ctx.fill();
          });
        });
      };
    }
  }, [data, imageSrc, sourceDimensions]);

  return <canvas ref={canvasRef} style={{ border: "1px solid black" }} />;
};

export default PlayerMovementMap;
