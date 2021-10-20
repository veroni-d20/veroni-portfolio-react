import React from "react";
import { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";

function Card(props) {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
  const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
    clamp: false,
  });

  function handleDragEnd(event, info) {
    if (info.offset.x < -100) {
      props.setExitX(-250);
      props.setIndex(props.index + 1);
    }
    if (info.offset.x > 100) {
      props.setExitX(250);
      props.setIndex(props.index + 1);
    }
  }

  return (
    <motion.div
      style={{
        width: 150,
        height: 150,
        position: "absolute",
        top: 0,
        x: x,
        rotate: rotate,
        cursor: "grab",
      }}
      whileTap={{ cursor: "grabbing" }}
      drag={props.drag}
      dragConstraints={{
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
      onDragEnd={handleDragEnd}
      initial={props.initial}
      animate={props.animate}
      transition={props.transition}
      exit={{
        x: props.exitX,
        opacity: 0,
        scale: 0.5,
        transition: { duration: 0.2 },
      }}
    >
      <motion.div
        style={{
          width: 150,
          height: 150,
          backgroundColor: "#fff",
          borderRadius: 30,
          scale: scale,
        }}
      />
    </motion.div>
  );
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [exitX, setExitX] = useState("100%");
  return (
    <>
      <h2 className="text-center my-4">Projects</h2>
      <div className="row m-4 d-flex justify-content-around">
        <motion.div
          initial={{ rotateY: 180 }}
          animate={{ rotateY: 0 }}
          transition={{ duration: 3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Project Caliditas</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Project Cortex</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Patient tracking System</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="row m-4 d-flex justify-content-around">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Chettiar Chamber of Commerce</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">Smart Parking System</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="card col-4 m-2"
          style={{ width: "18rem" }}
        >
          <div className="card-body">
            <h5 className="card-title">VNote</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        style={{
          width: 150,
          height: 150,
          position: "relative",
        }}
      >
        <AnimatePresence initial={false}>
          <Card
            key={index + 1}
            initial={{ scale: 0, y: 105, opacity: 0 }}
            animate={{ scale: 0.75, y: 30, opacity: 0.5 }}
            transition={{
              scale: { duration: 0.2 },
              opacity: { duration: 0.4 },
            }}
          />
          <Card
            key={index}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
              opacity: { duration: 0.2 },
            }}
            exitX={exitX}
            setExitX={setExitX}
            index={index}
            setIndex={setIndex}
            drag="x"
          />
        </AnimatePresence>
      </motion.div> */}
    </>
  );
}
