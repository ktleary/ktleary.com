import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

const DraggableModal = ({ children, onClose }) => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const bind = useDrag(({ down, movement: [_, my], velocity: [vx, vy] }) => {
    const closeThreshold = 100; // Modify as needed
    if (!down && (my > closeThreshold || vy > 1)) {
      onClose(); // Close the modal
    } else {
      set({ y: down ? my : 0 }); // Animate back to original position if not crossed threshold
    }
  });

  return (
    <animated.div {...bind()} style={{ y }}>
      {children}
    </animated.div>
  );
};


export default DraggableModal;
