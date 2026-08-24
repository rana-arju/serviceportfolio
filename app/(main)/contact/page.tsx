'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { ContactService } from '@/services/contact.service';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import Link from 'next/link';

// Zod Schema Validation
const contactSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  company: zod.string().optional(),
  phone: zod.string().optional(),
  interest: zod.string().min(1, 'Please select your primary interest'),
  budget: zod.string().min(1, 'Please select a project budget range'),
  details: zod.string().min(10, 'Details must be at least 10 characters long to help us understand your project'),
});

type ContactFormData = zod.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      interest: '',
      budget: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await ContactService.submitMessage(data);
      setShowSuccess(true);
      reset();
    } catch (e) {
      console.error(e);
      alert('Simulation error submitting form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            Contact Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Let&apos;s Build the Systems
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Share details on operations friction, CRM databases, or custom SaaS goals. Our engineers will reply within 24 hours.
          </p>
        </div>

        {/* Success Modal Container */}
        {showSuccess ? (
          <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Thanks for Reaching Out!</h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                Your project message has been received successfully. We will review your requirements and follow up with a technical roadmap outline.
              </p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Back to Home
              </Link>
              <button
                onClick={() => setShowSuccess(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg border border-border bg-card text-foreground font-bold text-sm hover:bg-muted transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          /* Contact Form Layout */
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-xl space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border'
                  }`}
                  {...register('name')}
                />
                {errors.name && <span className="text-xs text-red-500 font-semibold">{errors.name.message}</span>}
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'
                  }`}
                  {...register('email')}
                />
                {errors.email && <span className="text-xs text-red-500 font-semibold">{errors.email.message}</span>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Company Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Corp"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  {...register('company')}
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  {...register('phone')}
                />
              </div>
            </div>

            {/* What Are You Interested In */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="interest" className="text-xs font-bold text-foreground uppercase tracking-wider">
                What Are You Interested In? <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                  errors.interest ? 'border-red-500 focus:ring-red-500' : 'border-border'
                }`}
                {...register('interest')}
              >
                <option value="">Select an option</option>
                <option value="AI Automation">AI Workflow Automation & agents</option>
                <option value="n8n / Zapier">n8n / Zapier integrations</option>
                <option value="GoHighLevel CRM">GoHighLevel Setup & custom pipelines</option>
                <option value="Custom Development">Custom SaaS / Web Application</option>
                <option value="Other">Multiple capabilities / general enquiry</option>
              </select>
              {errors.interest && <span className="text-xs text-red-500 font-semibold">{errors.interest.message}</span>}
            </div>

            {/* Project Budget */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="budget" className="text-xs font-bold text-foreground uppercase tracking-wider">
                Project Budget <span className="text-red-500">*</span>
              </label>
              <select
                id="budget"
                className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                  errors.budget ? 'border-red-500 focus:ring-red-500' : 'border-border'
                }`}
                {...register('budget')}
              >
                <option value="">Select budget range</option>
                <option value="< $3k">&lt; $3,000</option>
                <option value="$3k - $7k">$3,000 - $7,000</option>
                <option value="$7k - $15k">$7,000 - $15,000</option>
                <option value="$15k+">$15,000 +</option>
              </select>
              {errors.budget && <span className="text-xs text-red-500 font-semibold">{errors.budget.message}</span>}
            </div>

            {/* Tell Us About Your Project */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="details" className="text-xs font-bold text-foreground uppercase tracking-wider">
                Tell Us About Your Project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="details"
                rows={5}
                placeholder="Briefly describe operational friction, systems needing integration, and target outcomes..."
                className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                  errors.details ? 'border-red-500 focus:ring-red-500' : 'border-border'
                }`}
                {...register('details')}
              />
              {errors.details && <span className="text-xs text-red-500 font-semibold">{errors.details.message}</span>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Simulating Submission...
                </>
              ) : (
                'Submit Project Roadmap Request'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
