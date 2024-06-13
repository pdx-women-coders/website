import Button from "../components/Button";

const Contact =()=>{
    return (
          <div className="Contact">
            <h1>Get in touch</h1>
            <p>We'd love to hear from you! Whether you have questions about our events, want to get involved, or just want to say hello, feel free to reach out to us.</p>
            
            <Button onClick={(e) => {
                window.location.href = 'mailto:pdxwomencoders@gmail.com';
                e.preventDefault();
              }} text="Email us" />
          </div>
    )
}
export default Contact;