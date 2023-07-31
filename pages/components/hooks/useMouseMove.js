import { useEffect, useState } from "react";

function useMouseMove() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isMouseClicked, setIsMouseClicked] = useState(false);
    const [startingMousePosition, setStartingMousePosition] = useState({ x: 0, y: 0 });
  
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseDown = (event) => {
        setStartingMousePosition({ x: event.clientX, y: event.clientY });
        setIsMouseClicked(true);
    };

    const handleMouseUp = () => {
        setIsMouseClicked(false);
        setStartingMousePosition({ x: 0, y: 0 });
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      setMousePosition({ x: touch.clientX, y: touch.clientY });
    };
  
    const handleTouchStart = (event) => {
      const touch = event.touches[0];
      setStartingMousePosition({ x: touch.clientX, y: touch.clientY });
      setIsMouseClicked(true);
    };
  
    const handleTouchEnd = () => {
      setIsMouseClicked(false);
      setStartingMousePosition({ x: 0, y: 0 });
    };
  
    useEffect(() => {
      // Add the event listener to track mouse movements
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mousedown", handleMouseDown);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchend", handleTouchEnd);
    
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mousedown", handleMouseDown);
        window.removeEventListener("mouseup", handleMouseUp);
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchstart", handleTouchStart);
        window.removeEventListener("touchend", handleTouchEnd);
      };
    }, []);
  
    return {isMouseClicked, startingMousePosition, mousePosition};
  }
  
  export default useMouseMove;