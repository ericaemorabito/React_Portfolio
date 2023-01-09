import './index.css'

function Contact() {
  return (
    <div className="contact-page">
      <h2>Get in Touch</h2>
      <p>
        I am currently looking for new opportunities in the Austin area.
        My inbox is always open.
      </p>
      <p>
        Feel free to reach out to me.
        I look forwarded to connecting.
      </p>
      <a href="mailto:ericaemorabito@gmail.com"><button id="email-btn">Email</button></a>
    </div>

    // <div className="contact-page">
    //   <form className="contact-form">
    //     <label for="email">Email:</label>
    //     <input type="text" name="email"></input><br></br>
    //     <label for="message">Message:</label>
    //     <input type="text" name="message"></input>
    //   </form>
    // </div>
  )
}

export default Contact;