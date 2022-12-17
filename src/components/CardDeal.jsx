import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Finding a better credit card deal can be done in a few simple steps. 
      First, make a list of your credit card needs and preferences, such as the 
      type of rewards you want, the annual fee you are willing to pay, and any specific
      features you are looking for. Next, do some research to find credit card offers that meet 
      your needs and compare the terms and conditions of each offer. Consider factors such as the
      annual percentage rate (APR), fees, and any introductory offers or bonuses. Finally, read reviews
      and compare the experiences of other customers before making a decision. 
      By following these steps, you can find a credit card that better meets your needs and offers the best value.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;