import React from "react";
import Work from "../../assets/work2.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center">
        About <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={Work} alt="work done" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
            I am a Computer Science graduate with over 4 years of experience in Quality Assurance. 
            I specialize in ensuring the delivery of reliable, high-performing, and user-centered web applications. 
            My expertise spans manual and automated testing, including functional, regression, integration, and API testing. 
            I am committed to maintaining high quality standards through structured testing processes, attention to detail, and continuous improvement.
            My goal is to deliver stable and seamless digital solutions that enhance user experience and business value.{" "}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
