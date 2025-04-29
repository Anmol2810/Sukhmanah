"use client"
import Accordian, { AccordianItem }  from "@/components/accordion"
export const Faq = () => {
    return (
        <section className="py-20 px-10" id="FaqS">

            <h1 className="text-center text-3xl md:text-left md:text-5xl py-2 p-4 font-bold tracking-tighter mt-5">FAQs</h1>
            <div className="">
                <Accordian className="" value={undefined} onChange={undefined}>
                    <AccordianItem value="1" trigger="What services do you offer?" className="border-b-[1px] border-black">
                    At Sukhmanah, we provide a range of mental health services, including therapy, counseling, and wellness workshops. Our approach integrates traditional wisdom with modern practices to ensure comprehensive care. Each service is designed to support your mental and emotional well-being.
                    </AccordianItem>
                    <AccordianItem value="2" trigger="How can I book?" className="border-b-[1px] border-black">
                    Booking an appointment is easy! Simply visit our 'Contact' page and fill out the form. Alternatively, you can call us directly to schedule your session.
                    </AccordianItem>
                    <AccordianItem value="3" trigger="What is your approach?" className="border-b-[1px] border-black">
                    Our approach combines ancient wisdom with contemporary mental health practices. We believe in treating the whole person—mind, body, and spirit. This holistic method promotes lasting well-being and personal growth.
                    </AccordianItem>
                    <AccordianItem value="4" trigger="Do you offer workshops?" className="border-b-[1px] border-black">
                    Yes, we offer various workshops focused on mental health, mindfulness, and personal development. These workshops are designed to provide practical tools and insights for enhancing your well-being. Check our 'Services' section for upcoming events.
                    </AccordianItem>
                    <AccordianItem value="5" trigger="Is therapy confidential?" className="border-b-[1px] border-black">
                    Absolutely, confidentiality is a cornerstone of our practice. We adhere to strict ethical guidelines to protect your privacy. You can feel safe discussing your concerns with us.
                    </AccordianItem>
                </Accordian>
            </div>

        </section>
    );
}