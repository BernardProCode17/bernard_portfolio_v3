import Connection from "@/components/minor components/Connection";

export default function Contact() {

    return (
        <div className="contact_page-body">

            {/* Form Div */}
            <div className="contact_form_div">
                <form className="contact_form">

                    {/* Name */}
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
                        <textarea name="message" id="message" required className="form-group_input input_message" placeholder="Message"></textarea>
                    </div>

                    {/* Send*/}
                    <div className="form_groups">
                        <label htmlFor="send" className="form_group_label"></label>
                        <input className="form-group_input sendButton" type="submit" name="send" id="send" value='Send' />
                    </div>

                </form>
            </div>

            {/* connection */}
            <Connection />
        </div>
    )
}