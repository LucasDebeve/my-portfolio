import PropTypes from 'prop-types';
import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

function ClickableImage({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1},
  };

  const animeVariants = {
    hidden: { scale: 0, opacity: 0},
    visible: { scale: 1, opacity: 1},
  };

  const openImage = () => {
    setIsOpen(true);
    document.body.classList.add('overflow-y-hidden');
  }

  const closeImage = () => {
    setIsOpen(false);
    document.body.classList.remove('overflow-y-hidden');
  }

  return (
    <>
      <img src={src} alt={alt} className={`w-full h-32 object-cover md:h-full md:w-1/4 ${isOpen && "ring-2 ring-blue-500 ring-offset-2 ring-"}`} onClick={openImage}/>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeImage}
            variants={containerVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="hidden"
          >
            <motion.img
              src={src}
              alt={alt}
              className="max-w-full max-h-full object-contain"
              variants={animeVariants}
              initial="hidden"
              animate={"visible"}
              exit={"hidden"}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}

ClickableImage.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default ClickableImage;