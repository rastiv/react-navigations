import { motion, MotionConfig } from "framer-motion";

const sizes = {
  xs: [24, 12, 6, 1],
  sm: [32, 16, 8, 1],
  md: [44, 22, 11, 2],
  lg: [56, 28, 14, 3],
};

const HamburgerButton = ({ open, setOpen, size = "md" }) => {
  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        className={`relative size-[${sizes[size][0]}px] bg-red-200`}
        onClick={() => setOpen((prev) => !prev)}
        initial={false}
        animate={open ? "open" : "closed"}
      >
        <motion.span
          className={`absolute h-[${sizes[size][3]}px] w-[${sizes[size][1]}px] bg-slate-500`}
          style={{
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
          className={`absolute h-[${sizes[size][3]}px] w-[${sizes[size][1]}px] bg-slate-500`}
          style={{
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
          className={`absolute h-[${sizes[size][3]}px] w-[${sizes[size][2]}px] bg-slate-500`}
          style={{
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
