"use client";

import { useState, forwardRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Schema definition
const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

// Input component with forwardRef
const Input = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className = "", ...props }, ref) => (
    <input
      ref={ref}
      className={`w-full px-4 py-3 rounded-md text-blue-900 outline-none focus:ring-2 focus:ring-pink-500 ${className}`}
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
      className={`w-full px-4 py-3 rounded-md text-blue-900 outline-none min-h-[120px] resize-vertical focus:ring-2 focus:ring-pink-500 ${className}`}
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
    className="w-full py-3 rounded-md bg-pink-600 text-white font-bold hover:bg-pink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {children}
  </button>
);

export default function Laban2techContactForm() {
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

  const onSubmit = async (values: FormData) => {
    setSubmitStatus({ type: null, message: '' });
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon!'
      });
      
      form.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later or email us directly at matlalaj67@gmail.com'
      });
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    form.handleSubmit(onSubmit)();
  };

  return (
    <section className="bg-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="w-full lg:w-1/2 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Us</h2>
            <p className="text-blue-100 text-lg max-w-md mb-6">
              Ready to start your digital journey? Get in touch with us today and 
              discover how Laban2tech can help you unlock your potential in the 
              digital world.
            </p>
            <div className="space-y-3 text-blue-100">
              <p>📧 Email: matlalaj67@gmail.com</p>
              <p>📍 Location: Middelburg, Mpumalanga</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2">
            <div className="space-y-6 max-w-md mx-auto">
              {/* First Name & Last Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    First Name <span className="text-pink-400">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="John"
                    {...form.register("firstName")}
                  />
                  {form.formState.errors.firstName && (
                    <p className="text-pink-300 text-sm mt-1">
                      {form.formState.errors.firstName.message}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-white mb-2 text-sm font-medium">
                    Last Name <span className="text-pink-400">*</span>
                  </label>
                  <Input
                    type="text"
                    placeholder="Doe"
                    {...form.register("lastName")}
                  />
                  {form.formState.errors.lastName && (
                    <p className="text-pink-300 text-sm mt-1">
                      {form.formState.errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white mb-2 text-sm font-medium">
                  Email <span className="text-pink-400">*</span>
                </label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  {...form.register("email")}
                />
                {form.formState.errors.email && (
                  <p className="text-pink-300 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-white mb-2 text-sm font-medium">
                  Message <span className="text-pink-400">*</span>
                </label>
                <Textarea
                  placeholder="Tell us about your interest in our programs..."
                  {...form.register("message")}
                />
                {form.formState.errors.message && (
                  <p className="text-pink-300 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div className={`p-4 rounded-md ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <Button 
                type="button"
                onClick={handleSubmit}
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}