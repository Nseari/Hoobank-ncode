import { apple, bill, google } from '../assets';
import styles, {layout } from '../style';

const Billing = () => (
      // sectionReserve makes the text in this section go ontop the image in mobile view 
   <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img  src = {bill} alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"/>

        {/* starting of pink and wite gradient for paypal card image */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white--gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient"  />
          {/* ending of pink and wite gradient for paypal card image */}

      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" /> billing & invoicing</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the ability to customize and automate invoices, you can save time and 
        streamline your billing process. We offer integrations with popular payment gateways, 
        making it easy for your clients  to pay you electronically.
        </p> 

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img src={apple} alt="apple_store"
            className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>    
              <img src={google} alt="google"
            className="w-[128px] h-[42px] object-contain cursor-pointer"/>  

            </div>
      </div>

   </section>
  )


export default Billing
