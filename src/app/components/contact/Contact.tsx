"use client";

import React, { useRef, useState } from "react";
import Bounded from "../hoc/Bounded";
import emailjs from "@emailjs/browser";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useComponentLoaded } from "@/app/hooks/useComponentLoaded";

const Contact = () => {
  const containerRef = useRef(null);
  useComponentLoaded("Contact");
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_jxhmh4d",
        "template_caihr9u",
        {
          from_name: form.name,
          to_name: "Aniss",
          from_email: form.email,
          to_email: "contact@aniss.dev",
          message: form.message,
        },
        "YIXItSZiR1SmbXUEx",
      );
      setLoading(false);
      alert(
        "Merci pour votre message, je vous répondrai dans les plus brefs délais.",
      );
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setLoading(false);
      alert("Une erreur est survenue, veuillez réessayer.");
      console.error(err);
    }
  };

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      },
    );
  });

  return (
    <Bounded id="contact" ref={containerRef}>
      <div className="relative flex h-fit flex-col items-center justify-center p-12">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 hidden h-full min-h-[900px] w-full sm:block"
        />
        <div className="contact-container">
          <h3 className="head-text">Contactez-moi</h3>
          <p className="mt-3 text-lg text-white-600">
            Si vous désirez en savoir plus sur moi et discuter d&apos;une
            éventuelle collaboration, n&apos;hésitez pas à me contacter, je vous
            répondrai dans les plus brefs délais.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Nom complet</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., John Doe"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Adresse email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Votre message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Ecrivez votre message..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </Bounded>
  );
};

export default Contact;
