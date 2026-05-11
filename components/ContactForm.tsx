"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/mwpbwkpj", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.15)",
    padding: "12px 0",
    fontSize: "16px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 300,
    color: "#111",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 500,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#888",
    display: "block",
    marginBottom: "6px",
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "560px" }}>
      <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: "#888", marginBottom: "0" }}>
        Send a Message
      </p>

      <div>
        <label htmlFor="contact-name" style={labelStyle}>Name</label>
        <input
          id="contact-name"
          type="text"
          name="name"
          required
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderBottomColor = "#000"; }}
          onBlur={(e) => { e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.15)"; }}
        />
      </div>

      <div>
        <label htmlFor="contact-email" style={labelStyle}>Email</label>
        <input
          id="contact-email"
          type="email"
          name="email"
          required
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          onFocus={(e) => { e.currentTarget.style.borderBottomColor = "#000"; }}
          onBlur={(e) => { e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.15)"; }}
        />
      </div>

      <div>
        <label htmlFor="contact-message" style={labelStyle}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What's on your mind?"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, resize: "none" }}
          onFocus={(e) => { e.currentTarget.style.borderBottomColor = "#000"; }}
          onBlur={(e) => { e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.15)"; }}
        />
      </div>

      {status === "sent" ? (
        <p style={{ fontSize: "13px", color: "#555", fontFamily: "'Inter', sans-serif" }}>
          Message sent. I&apos;ll reply within a day.
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            border: "none",
            borderBottom: "1px solid #000",
            paddingBottom: "4px",
            backgroundColor: "transparent",
            color: "#000",
            cursor: status === "sending" ? "default" : "pointer",
            opacity: status === "sending" ? 0.5 : 1,
            transition: "opacity 0.3s ease",
            width: "fit-content",
          }}
        >
          {status === "sending" ? "Sending..." : "Send Message →"}
        </button>
      )}

      {status === "error" && (
        <p style={{ fontSize: "13px", color: "#c00", fontFamily: "'Inter', sans-serif" }}>
          Something went wrong. Email me directly at savadiadishan@gmail.com
        </p>
      )}
    </form>
  );
}
