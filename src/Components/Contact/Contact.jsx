import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "96a57e81-4b6e-4126-848a-2b07f292cd26");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nesciunt porro corporis cupiditate dolores quia obcaecati amet. Nostrum qui maiores quidem consequatur sit enim laboriosam? Laboriosam dolorum voluptate porro quas.</p>
            <ul>
                <li><img src={mail_icon} alt="" /><a href="mailto:Contact@GreatStack.dev">Contact@GreatStack.dev</a></li>
                <li><img src={phone_icon} alt="" /> <a href="tel:+7988664562">+1 123-456-7890</a></li>
                <li><img src={location_icon} alt="" />Massachusetts Ave, Cambridge<br/>MA 02145, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact