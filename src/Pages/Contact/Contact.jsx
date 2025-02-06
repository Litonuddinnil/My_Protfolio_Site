import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
 
  const handleSubmitContact = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");

    try {
     const data = await emailjs.sendForm(
    
        import.meta.env.VITE_SERVICE_ID,  
       
        import.meta.env.VITE_TEMPLETE_ID,
        form.current,
        {
         
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      ); 
      if(data.text ==="OK"){ 
        Swal.fire({
            title: "Successfully Send Message To The Email!",
            icon: "success",
            draggable: true
          });
          setMessage("✅ Message sent successfully!");
        }
     
      form.current.reset();
       navigate("/") 
    } catch (error) {
      setMessage("❌ Failed to send message. Please try again.");
      console.log(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Let's Connect
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Fill out the form below to get in touch. I'll respond as soon as
          possible.
        </p>

        <form ref={form} onSubmit={handleSubmitContact} className="space-y-5">
          <div className="form-control">
            <label className="label text-lg font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              className="input input-bordered w-full rounded-lg p-3"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              className="input input-bordered w-full rounded-lg p-3"
              required
            />
          </div>

          <div className="form-control">
            <label className="label text-lg font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here"
              className="textarea textarea-bordered w-full rounded-lg p-3"
              rows="5"
              required
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-neutral w-full text-white py-3 text-lg rounded-lg hover:bg-gray-800 transition duration-300"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {message && (
          <p className="text-center mt-4 font-semibold text-gray-700">{message}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
