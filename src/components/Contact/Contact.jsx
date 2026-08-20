import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  viewportConfig,
} from "../../utils/animations";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import axios from "axios";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "spal57304@gmail.com",
    href: "mailto:spal57304@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9720535155",
    href: "tel:+919720535155",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lucknow, Uttar Pradesh, India",
    href: null,
  },
];

const InputField = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  error,
  placeholder,
  rows,
}) => (
  <div>
    <label className="text-white/60 text-xs font-mono uppercase tracking-wider mb-2 block">
      {label}
    </label>
    {rows ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none resize-none transition-all duration-300 focus:border-gold/50"
        style={{
          border: error
            ? "1px solid rgba(255,80,80,0.5)"
            : "1px solid rgba(212,175,55,0.1)",
        }}
      />
    ) : (
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full glass rounded-xl px-4 py-3 text-white text-sm placeholder-white/20 outline-none transition-all duration-300 focus:border-gold/50"
        style={{
          border: error
            ? "1px solid rgba(255,80,80,0.5)"
            : "1px solid rgba(212,175,55,0.1)",
        }}
      />
    )}
    {error && <p className="text-red-400/70 text-xs mt-1">{error}</p>}
  </div>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const api_url = import.meta.env.VITE_API_URL;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Invalid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name])
      setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setServerError("");

    try {
      const response = await axios.post(
        `${api_url}/api/user/send-message`,
        form,
      );

      if (response.data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setErrors({});
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setServerError(
        error.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-10 bg-dark overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(212,175,55,0.04) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-20"
        >
          <p className="section-subheading">Let's Connect</p>
          <h2 className="section-heading">
            Get In <span className="gold-text">Touch</span>
          </h2>
          <div
            className="w-16 h-[2px] mx-auto mt-4"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
          <p className="text-white/40 mt-4 max-w-md mx-auto text-sm">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              Let's build something
              <br />
              <span className="gold-text">amazing together</span>
            </h3>

            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.div
                key={label}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.2)",
                  }}
                >
                  <Icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-white/40 text-xs font-mono uppercase tracking-wider">
                    {label}
                  </p>
                  {href ? (
                    
                    <a  href={href}
                      className="text-white hover:text-gold transition-colors text-sm font-medium"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-white text-sm font-medium">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Status */}
            <div
              className="glass rounded-xl p-4 mt-8"
              style={{ border: "1px solid rgba(212,175,55,0.15)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-white text-sm font-medium">
                    Currently Available
                  </p>
                  <p className="text-white/40 text-xs">
                    Open to full-time & freelance
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center"
                  style={{
                    border: "1px solid rgba(212,175,55,0.2)",
                    minHeight: "400px",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ background: "rgba(212,175,55,0.15)" }}
                  >
                    <CheckCircle2 className="text-gold" size={32} />
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-white/50 mb-6">
                    Thanks for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline text-sm py-2.5 px-6"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-8 space-y-5"
                  style={{ border: "1px solid rgba(212,175,55,0.1)" }}
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Sudheer Pal"
                    />
                    <InputField
                      label="Email Address"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="you@example.com"
                    />
                  </div>
                  <InputField
                    label="Subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    error={errors.subject}
                    placeholder="Project Discussion"
                  />
                  <InputField
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    error={errors.message}
                    placeholder="Tell me about your project..."
                    rows={5}
                  />

                  {serverError && (
                    <p className="text-red-400/70 text-xs">{serverError}</p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="relative z-10 flex items-center gap-2">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                        />
                        Sending...
                      </span>
                    ) : (
                      <span className="relative z-10 flex items-center gap-2">
                        <Send size={16} />
                        Send Message
                      </span>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;