import HeadingSection from "@/components/minor components/HeadingSection";

export default function Contact() {

    return (
        <main>
            <HeadingSection cssClass="contact_page-heading">
                <h1 className="contact_page-title">Contact</h1>
                <p className="contact_page-statement">Contact To Work Together</p>
            </HeadingSection>

            {/* Form Div */}
            <div className="contact_form_div">
                {/* Name */}
                <form className="contact_form">
                    <div className="form_groups">
                        <label htmlFor="name" className="form_group_label"></label>
                        <input className="form-group_input" type="text" name="name" id="name" placeholder="Your Name" required />
                    </div>
                    {/* Email */}
                    <div className="form_groups">
                        <label htmlFor="email" className="form_group_label"></label>
                        <input className="form-group_input" type="email" name="email" id="email" placeholder="Your Email" required />
                    </div>
                    {/* Phone */}
                    <div className="form_groups">
                        <label htmlFor="phone" className="form_group_label"></label>
                        <input className="form-group_input" type="tel" name="phone" id="phone" placeholder="Your Phone" required />
                    </div>

                    {/* Company */}
                    <div className="form_groups">
                        <label htmlFor="company" className="form_group_label"></label>
                        <input className="form-group_input" type="text" name="company" id="company" placeholder="You Company (Optional)" />
                    </div>

                    {/* City */}
                    <div className="form_groups">
                        <label htmlFor="city" className="form_group_label"></label>
                        <input className="form-group_input" type="text" name="city" id="city" placeholder="Your City area (Optional)" />
                    </div>

                    {/* Message */}
                    <div className="form_groups">
                        <label htmlFor="message" className="form_group_label"></label>
                        <input className="form-group_input" type="textarea" name="message" id="message" placeholder="Your Message" required />
                    </div>

                    {/* Send*/}
                    <div className="form_groups">
                        <label htmlFor="send" className="form_group_label"></label>
                        <input className="form-group_input link" type="submit" name="send" id="send" value='Send' />
                    </div>
                </form>
            </div>


        </main>
    )
}