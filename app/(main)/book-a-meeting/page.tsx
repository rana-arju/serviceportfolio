'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { BookingService } from '@/services/booking.service';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CalendarRange, CheckCircle2, RefreshCw } from 'lucide-react';
import Link from 'next/link';

const bookingSchema = zod.object({
  name: zod.string().min(2, 'Name must be at least 2 characters'),
  email: zod.string().email('Please enter a valid email address'),
  company: zod.string().optional(),
  phone: zod.string().optional(),
  service: zod.string().min(1, 'Please select the primary service area'),
  date: zod.string().min(1, 'Please choose a preferred meeting date'),
  time: zod.string().min(1, 'Please select your preferred meeting time slot'),
  details: zod.string().optional(),
});

type BookingFormData = zod.infer<typeof bookingSchema>;

export default function BookMeetingPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      service: '',
      time: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    try {
      await BookingService.createBooking(data);
      setShowSuccess(true);
      reset();
    } catch (e) {
      console.error(e);
      alert('Simulation error scheduling meeting.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative py-16 sm:py-24 bg-background overflow-hidden min-h-screen">
      <AnimatedBackground />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20">
            Book Meeting
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Schedule a Strategy Call
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Pick a date and choose options to review workflows. Ready to integrate with Cal.com or Google Calendar APIs.
          </p>
        </div>

        {/* Success Modal */}
        {showSuccess ? (
          <div className="p-8 sm:p-12 rounded-2xl border border-border bg-card shadow-2xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Your Meeting Request Is Confirmed</h2>
              <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                We have received your calendar reservation request. A calendar invitation confirmation including video link will be sent to your email.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        ) : (
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
              {/* Company */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="company" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Acme Systems"
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                  {...register('company')}
                />
              </div>

              {/* Phone */}
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

            {/* Service Interested In */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="service" className="text-xs font-bold text-foreground uppercase tracking-wider">
                Service Interested In <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                  errors.service ? 'border-red-500 focus:ring-red-500' : 'border-border'
                }`}
                {...register('service')}
              >
                <option value="">Select option</option>
                <option value="n8n / Zapier">n8n / Zapier Automation Pipelines</option>
                <option value="GoHighLevel CRM">GoHighLevel CRM Setup & workflows</option>
                <option value="AI Solutions">AI Voice & Chat Agents</option>
                <option value="Custom Dev">Custom Web / SaaS Platform</option>
              </select>
              {errors.service && <span className="text-xs text-red-500 font-semibold">{errors.service.message}</span>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Preferred Date */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="date" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                    errors.date ? 'border-red-500 focus:ring-red-500' : 'border-border'
                  }`}
                  {...register('date')}
                />
                {errors.date && <span className="text-xs text-red-500 font-semibold">{errors.date.message}</span>}
              </div>

              {/* Preferred Time */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="time" className="text-xs font-bold text-foreground uppercase tracking-wider">
                  Preferred Time Slot <span className="text-red-500">*</span>
                </label>
                <select
                  id="time"
                  className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${
                    errors.time ? 'border-red-500 focus:ring-red-500' : 'border-border'
                  }`}
                  {...register('time')}
                >
                  <option value="">Select a time slot</option>
                  <option value="09:00 AM">09:00 AM - 10:00 AM (EST)</option>
                  <option value="11:00 AM">11:00 AM - 12:00 PM (EST)</option>
                  <option value="02:00 PM">02:00 PM - 03:00 PM (EST)</option>
                  <option value="04:00 PM">04:00 PM - 05:00 PM (EST)</option>
                </select>
                {errors.time && <span className="text-xs text-red-500 font-semibold">{errors.time.message}</span>}
              </div>
            </div>

            {/* Additional Project Details */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="details" className="text-xs font-bold text-foreground uppercase tracking-wider">
                Project Details
              </label>
              <textarea
                id="details"
                rows={4}
                placeholder="Optional: Mention current operational challenges or systems needing integration..."
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm"
                {...register('details')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" /> Reserving Appointment Slot...
                </>
              ) : (
                <>
                  <CalendarRange className="w-4 h-4" /> Book Strategy Session
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
