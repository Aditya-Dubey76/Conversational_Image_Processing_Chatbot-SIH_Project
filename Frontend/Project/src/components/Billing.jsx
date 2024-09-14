// Import necessary components and assets
import { chatbotInstructions } from "../constants";
import styles, { layout } from "../style";
import img from "../assets/img.png"; // Adjust the path as needed
import Button from "./Button"; // Ensure Button is imported

const InstructionCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== chatbotInstructions.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="instruction icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="product" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        How to Use Our Chatbot <br className="sm:block hidden" />
      </h2>
      
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Steps are given in the right menu. Follow these steps to get your desired results.
      </p>
      
      <img src={img} alt="How to use" className="w-[350px] h-auto mt-4" />

      {/* <Button styles={`mt-10`} /> */}
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {chatbotInstructions.map((instruction, index) => (
        <InstructionCard key={instruction.id} {...instruction} index={index} />
      ))}
    </div>
  </section>
);

export default Business;