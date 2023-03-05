import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">SMIT</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a 20-year-old student with a passion for web development. I
            love cracking codes and creating innovative web applications that
            push the boundaries of what's possible. Whether it's building sleek
            and responsive interfaces or diving deep into the back-end
            architecture, I'm always up for a challenges.
            <br className="sm:block hidden" />
            <span className="text-[#915eff]">
              committed to putting in the effort to achieve my goals !!
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
