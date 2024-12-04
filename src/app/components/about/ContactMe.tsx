"use client";

import React, { useState } from "react";

/**
 * ContactMe component provides a simple interface for users to copy the contact email address.
 * It displays an image, a prompt to contact, and a clickable area to copy the email address.
 * When the email is copied, a visual feedback is provided by changing the icon.
 */
const ContactMe = () => {
  // State to track if the email has been copied to the clipboard
  const [hasCopied, setHasCopied] = useState(false);

  /**
   * Copies the contact email to the clipboard and provides visual feedback.
   * Sets the hasCopied state to true for 2 seconds to indicate the copy action.
   */
  const handleCopy = () => {
    navigator.clipboard.writeText("contact@aniss.dev");
    setHasCopied(true);

    // Reset the hasCopied state after 2 seconds
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <>
      {/* Display an image related to contacting */}
      <img
        src="/assets/images/grid4.webp"
        alt="Me contacter"
        className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
      />
      <div className="space-y-2">
        {/* Text prompting the user to contact */}
        <p className="grid-subtext text-center">Contactez moi</p>
        {/* Clickable area to copy the email address */}
        <div className="copy-container" onClick={handleCopy}>
          {/* //TODO: Use next image */}
          <img
            src={hasCopied ? "assets/tick.svg" : "/assets/copy.svg"}
            alt="copy"
          />
          <p className="text-gray_gradient font-medium text-white md:text-xl lg:text-2xl">
            contact@aniss.dev
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
