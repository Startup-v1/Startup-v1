import { useState } from "react";
import "./feedbackButton.scss";
import { ButtonSvg } from "./buttonSvg";
import emailjs from "@emailjs/browser";
import { LoadingSpinner } from "@SharedComponents/loadingSpinner";

type Form = {
  email: string;
  feedback: string;
};

export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({} as Form);
  const [isLoading, setIsLoading] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = () => {
    sendFeedBack();
    setIsLoading(true);
    // Fake loading for UI/UX
    setTimeout(() => {
      closeModal();
      setForm({} as Form);
      setIsLoading(false); // Hide loading spinner
    }, 1500);
  };

  const sendFeedBack = () => {
    const templateParams = {
      // configured on emailjs template
      email: form.email,
      feedback: form.feedback,
    };

    // This is configured in emailjs with techvantageconsulting.team@gmail.com
    emailjs
      .send(
        "contact_service",
        "template_pgrfv94",
        templateParams,
        "pN2jajpXuKbF1WLG4"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="feedback-btn-container">
      <button className="btn btn-square feedback-btn" onClick={openModal}>
        <ButtonSvg />
      </button>
      {isOpen && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box">
            {isLoading && (
              <div className="spinner-container">
                <LoadingSpinner />
              </div>
            )}
            <h3 className="font-bold text-lg">
              We would love to know your thoughts.
            </h3>
            <p className="py-4">
              Feel free to share any suggestions, bugs, or ideas for new
              features. We'll carefully consider them.
            </p>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </label>
            <textarea
              placeholder="Feedback!"
              className="textarea textarea-bordered textarea-md w-full min-h-32 max-h-32 text-[16px]"
              value={form.feedback}
              onChange={(e) => setForm({ ...form, feedback: e.target.value })}
            ></textarea>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </button>
            <button
              disabled={isLoading}
              className="btn btn-accent mt-3 flex justify-center w-full"
              onClick={onSubmit}
            >
              Submit
            </button>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button onClick={closeModal}>close</button>
          </form>
        </dialog>
      )}
    </div>
  );
}
