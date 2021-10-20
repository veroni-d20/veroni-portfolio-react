import Bg from "../asstes/images/giphy.gif";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div
        className="d-flex flex-column flex-md-row w-100 align-items-center justify-content-around"
        style={{ height: "100vh" }}
      >
        <div>
          <h1>
            I'm Veroni
            <span
              className="typed"
              data-typed-items="Developer, Designer, Dreamer"
            ></span>
          </h1>
        </div>
        <motion.img
          drag
          dragConstraints={{
            top: -8,
            left: -30,
            right: 20,
            bottom: 15,
          }}
          className="bgimg"
          src={Bg}
          alt=""
        />
      </div>
    </>
  );
}
