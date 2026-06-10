"use client";

import { useState, forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Send, MessageSquare, AlertCircle, CheckCircle2 } from "lucide-react";

// Schema definition
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

// Input component with forwardRef
const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 outline-none transition-all duration-250 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-slate-950 ${className}`}
      {...props}
    />
  )
);
Input.displayName = "Input";

// Textarea component with forwardRef
const Textarea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className = "", ...props }, ref) => (
    <textarea
      ref={ref}
      className={`w-full px-4 py-3 rounded-xl bg-slate-950/60 border border-slate-800 text-white placeholder-slate-500 outline-none min-h-[140px] resize-vertical transition-all duration-250 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-slate-950 ${className}`}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

const Button = ({ 
  children, 
  disabled, 
  type = "button",
  onClick 
}: { 
  children: React.ReactNode; 
  disabled?: boolean; 
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => (
  <button
    disabled={disabled}
    type={type}
    onClick={onClick}
    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-500/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] flex items-center justify-center gap-2"
  >
    {children}
  </button>
);

interface ContactFormProps {
  selectedPlan?: string;
}

export default function Laban2techContactForm({ selectedPlan }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  // Pre-fill form when a plan is selected
  useEffect(() => {
    if (selectedPlan) {
      form.setValue(
        "message",
        `Hi! I would like to request a quote or get started with the "${selectedPlan}" package. Please reach out to me with more details.`
      );
      // Optional: scroll down to form smoothly when plan clicked
      const element = document.getElementById("contact-section");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [selectedPlan, form]);

  const onSubmit = async (values: FormData) => {
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || 'Failed to send message');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
      });
      
      form.reset();
    } catch (error: unknown) {
      const errMsg = error instanceof Error ? error.message : String(error);
      setSubmitStatus({
        type: 'error',
        message: errMsg || 'Sorry, something went wrong. Please check your internet connection or email us directly at matlalaj67@gmail.com'
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)();
  };

  return (
    <section id="contact-section" className="relative bg-slate-950 py-24 border-t border-slate-900">
      {/* Decorative gradient blur in background */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-600/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-violet-600/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-16">
          
          {/* Left side - Text & contact details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider mb-6">
                <MessageSquare size={14} /> Get in Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Let&apos;s Build Something <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-violet-400">
                  Great Together
                </span>
              </h2>
              <p className="text-slate-400 text-lg max-w-lg mb-8 leading-relaxed">
                Ready to take your business online or build a custom solution?
                Reach out today for a consultation or quote. Our team at Laban2tech is ready to turn your ideas into high-performance digital products.
              </p>
            </div>

            <div className="space-y-6 border-t border-slate-900 pt-8 mt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Us</p>
                  <a href="mailto:matlalaj67@gmail.com" className="text-white hover:text-indigo-400 text-base transition-colors">
                    matlalaj67@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</p>
                  <p className="text-white text-base">
                    Middelburg, Mpumalanga, South Africa
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Glassmorphic form card */}
          <div className="w-full lg:w-1/2">
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-2xl shadow-xl max-w-lg mx-auto lg:mr-0">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                {/* First Name & Last Name Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-2 text-xs font-semibold uppercase tracking-wider">
                      First Name <span className="text-indigo-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      {...form.register("firstName")}
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {form.formState.errors.firstName.message}
                      </p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-slate-400 mb-2 text-xs font-semibold uppercase tracking-wider">
                      Last Name <span className="text-indigo-500">*</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      {...form.register("lastName")}
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                        <AlertCircle size={12} /> {form.formState.errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-400 mb-2 text-xs font-semibold uppercase tracking-wider">
                    Email Address <span className="text-indigo-500">*</span>
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-slate-400 mb-2 text-xs font-semibold uppercase tracking-wider">
                    Your Message <span className="text-indigo-500">*</span>
                  </label>
                  <Textarea
                    placeholder="Tell us about your project or what features you'd like to implement..."
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl border flex items-start gap-3 text-sm ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border-green-500/25 text-green-400' 
                      : 'bg-red-500/10 border-red-500/25 text-red-400'
                  }`}>
                    {submitStatus.type === 'success' ? (
                      <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
                    )}
                    <div>
                      {submitStatus.message}
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="button"
                  onClick={handleSubmit}
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    'Sending Message...'
                  ) : (
                    <>
                      <Send size={16} /> Send Inquiry
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}