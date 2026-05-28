import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, MapPin } from "lucide-react";
import { SectionHeading } from "./About";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setSending(true);

    try {
      await emailjs.sendForm(
        "service_5tzlimr",
        "template_8h00n24",
        formRef.current!,
        "p94YWmj04zJwsLxWs"
      );

      toast.success("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to send message.");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-64 bg-cyan/10 blur-3xl -z-10" />

      <div className="mx-auto max-w-5xl px-4">
        <SectionHeading
          tag="Contact"
          title="Let's build something great."
          desc="Have an opportunity, idea, or just want to say hi? Drop a message."
        />

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl glass p-6 flex flex-col gap-5"
          >
            <div>
              <h3 className="font-semibold text-xl">Get in touch</h3>

              <p className="text-sm text-muted-foreground mt-1">
                I usually reply within 24 hours.
              </p>
            </div>

            <a
              href="mailto:mulualemmekonin0@gmail.com"
              className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bg text-primary-foreground">
                <Mail className="h-4 w-4" />
              </span>

              <div>
                <div className="text-xs text-muted-foreground">
                  Email
                </div>

                <div className="text-sm">
                  mulualemmekonin0@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://github.com/mumekonin"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bg text-primary-foreground">
                <Github className="h-4 w-4" />
              </span>

              <div>
                <div className="text-xs text-muted-foreground">
                  GitHub
                </div>

                <div className="text-sm">@mumekonin</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/mulualem-mekonin-0b399a345"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-white/5 p-3 hover:bg-white/10 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg gradient-bg text-primary-foreground">
                <Linkedin className="h-4 w-4" />
              </span>

              <div>
                <div className="text-xs text-muted-foreground">
                  LinkedIn
                </div>

                <div className="text-sm">
                  in/mulualem-mekonin
                </div>
              </div>
            </a>

            <div className="flex items-center gap-3 text-sm text-muted-foreground mt-auto">
              <MapPin className="h-4 w-4" />
              Jimma, Ethiopia
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl glass-strong p-6 gradient-border space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      name: e.target.value,
                    })
                  }
                  placeholder="Jane Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>

              <Field label="Email">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      email: e.target.value,
                    })
                  }
                  placeholder="jane@company.com"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
              </Field>
            </div>

            <Field label="Message">
              <textarea
                name="message"
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
                rows={6}
                placeholder="Tell me about your project or opportunity…"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </Field>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center justify-center gap-2 w-full rounded-xl gradient-bg px-5 py-3 text-sm font-semibold text-primary-foreground glow hover:opacity-95 transition disabled:opacity-60"
            >
              {sending ? (
                "Sending..."
              ) : (
                <>
                  Send message
                  <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-wider text-muted-foreground mb-1.5 font-mono">
        {label}
      </span>

      {children}
    </label>
  );
}