import { motion, MotionConfig } from "framer-motion";

const sizes = {
  xs: [24, 12, 6, 1],
  sm: [34, 17, 8.5, 2],
  md: [44, 22, 11, 2],
  lg: [56, 28, 14, 3],
};

const HamburgerButton = ({
  open,
  setOpen,
  size = "md",
  rounded = false,
  background = "#e2e8f0",
  color = "#334155",
}) => {
  const szs = sizes[size];

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        style={{
          position: "relative",
          borderRadius: rounded ? `${szs[0] / 2}px` : "",
          background,
          height: `${szs[0]}px`,
          width: `${szs[0]}px`,
        }}
        onClick={() => setOpen((prev) => !prev)}
        initial={false}
        animate={open ? "open" : "closed"}
      >
        <motion.span
          style={{
            position: "absolute",
            background: color,
            width: `${szs[1]}px`,
            height: `${szs[3]}px`,
            left: "50%",
            top: "35%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              top: ["35%", "50%", "50%"],
              rotate: ["0deg", "0deg", "45deg"],
            },
            closed: {
              top: ["50%", "50%", "35%"],
              rotate: ["45deg", "0deg", "0deg"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            position: "absolute",
            background: color,
            width: `${szs[1]}px`,
            height: `${szs[3]}px`,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
          }}
          variants={{
            open: {
              rotate: ["0deg", "0deg", "-45deg"],
            },
            closed: {
              rotate: ["-45deg", "0deg", "0deg"],
            },
          }}
        ></motion.span>
        <motion.span
          style={{
            position: "absolute",
            background: color,
            width: `${szs[2]}px`,
            height: `${szs[3]}px`,
            right: "50%",
            bottom: "35%",
            x: "100%",
            y: "50%",
          }}
          variants={{
            open: {
              bottom: ["35%", "50%", "50%"],
              opacity: [1, 1, 0],
            },
            closed: {
              bottom: ["50%", "50%", "35%"],
              opacity: [0, 0, 1],
            },
          }}
        ></motion.span>
      </motion.button>
    </MotionConfig>
  );
};

export default HamburgerButton;
