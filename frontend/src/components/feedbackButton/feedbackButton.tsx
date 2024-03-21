import { useState } from "react";
import "./feedbackButton.scss";

export function FeedbackButton() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button className="btn btn-square feedback-btn" onClick={openModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            fill="none"
            stroke="#020202"
            strokeMiterlimit="10"
            strokeWidth="1.91px"
            d="M18.68,8.16V15.8a2.86,2.86,0,0,1-2.86,2.86H13.91v2.86L8.18,18.66H4.36A2.86,2.86,0,0,1,1.5,15.8V8.16A2.86,2.86,0,0,1,4.36,5.3H15.82A2.86,2.86,0,0,1,18.68,8.16Z
          "
          />
          <path
            fill="none"
            stroke="#020202"
            strokeMiterlimit="10"
            strokeWidth="1.91px"
            d="M18.68,14.84h1A2.86,2.86,0,0,0,22.5,12V4.34a2.86,2.86,0,0,0-2.86-2.86H8.18A2.86,2.86,0,0,0,5.32,4.34v1"
          />
          <line
            fill="none"
            stroke="#020202"
            strokeMiterlimit="10"
            strokeWidth="1.91px"
            x1="5.32"
            y1="11.98"
            x2="7.23"
            y2="11.98"
          />
          <line
            fill="none"
            stroke="#020202"
            strokeMiterlimit="10"
            strokeWidth="1.91px"
            x1="9.14"
            y1="11.98"
            x2="11.05"
            y2="11.98"
          />
          <line
            fill="none"
            stroke="#020202"
            strokeMiterlimit="10"
            strokeWidth="1.91px"
            x1="12.95"
            y1="11.98"
            x2="14.86"
            y2="11.98"
          />
        </svg>
      </button>
      {isOpen && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Write your feedback</p>
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
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <textarea
              placeholder="Feedback!"
              className="textarea textarea-bordered textarea-lg w-full min-h-32 max-h-32"
            ></textarea>
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
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
