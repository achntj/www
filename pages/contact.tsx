import Container from "../components/Container";
import { useState } from "react";
import absoluteUrl from "next-absolute-url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  // Input states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sec, setSec] = useState("");
  const [disable, setDisable] = useState(false);

  // Form submit handler
  const submitForm = async (e) => {
    setDisable(true);
    e.preventDefault();
    if (sec.toLowerCase() === "white") {
      const id = toast.loading("Please wait...");
      const res = await fetch(`${origin}/api/submit-form`, {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      if (res.status === 201) {
        toast.dismiss(id);
        toast("🎉 I'll get in touch soon!", { type: "success" });
        setName("");
        setEmail("");
        setMessage("");
        setSec("");
        setDisable(false);
      } else {
        toast("Please recheck your inputs!", { type: "error" });
      }
    } else {
      toast("That should have been easy 🤔", { type: "error" });
      setDisable(false);
    }
  };

  return (
    <Container title="Contact" description="Reach Out!">
      <div className="dark:text-neutral-200">
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
        />
        <form autoComplete="off" className="" onSubmit={submitForm}>
          <h1 className="text-3xl xs:text-4xl font-bold">Send Me an Email</h1>
          <a
            href="mailto:achntj@gmail.com"
            className="flex items-baseline group space-x-4 !text-black 
            dark:!text-white italic text-xl sm:text-2xl !underline 
            underline-offset-4"
          >
            <span>achntj@gmail.com</span>
            <span>
              <ArrowUpRightIcon
                className="h-4 w-4 group-hover:-translate-y-2 
              group-hover:translate-x-2 transition duration-100 ease-in-out"
              />
            </span>
          </a>
          <h3 className="my-2">OR</h3>
          <h1 className="text-xl xs:text-2xl font-bold">Send a message!</h1>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Achintya Jha"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            name="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="security">Zebras are black and ?</label>
          <input
            type="text"
            name="security"
            placeholder="Your answer..."
            value={sec}
            onChange={(e) => setSec(e.target.value)}
            required
            className="w-full outline-none bg-transparent"
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            cols={50}
            rows={5}
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full outline-none h-auto resize-none bg-transparent"
          ></textarea>
          <button
            className="bg-neutral-200 font-title dark:bg-neutral-700 
            text-neutral-900 dark:text-neutral-100 p-2 rounded-lg font-bold"
            type="submit"
            disabled={disable}
          >
            Send
          </button>
        </form>
      </div>
    </Container>
  );
}

Contact.getInitialProps = async (context) => {
  const { req } = context;
  // Hostname is needed on both front and back so we should
  // post it to the frontend by returning it from getInitialProps
  const origin = absoluteUrl(req).origin;
  return {
    origin,
  };
};
