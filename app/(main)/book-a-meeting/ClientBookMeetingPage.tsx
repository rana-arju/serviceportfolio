'use client';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { BookingService } from '@/services/booking.service';
import { AnimatedBackground } from '@/components/ui/AnimatedBackground';
import { CalendarRange, CheckCircle2, RefreshCw, Calendar, FileText } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/components/layout/ThemeProvider';

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

export function ClientBookMeetingPage() {
  const [activeTab, setActiveTab] = useState<'cal' | 'form'>('cal');
  const [meetingDuration, setMeetingDuration] = useState<'15' | '30'>('30');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIframeLoaded(false);
  }, [meetingDuration]);

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
            Book a slot directly on our calendar or submit a manual request with details.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="flex w-full max-w-md sm:inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200/50 dark:border-slate-800/50 shadow-inner">
            <button
              onClick={() => setActiveTab('cal')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${activeTab === 'cal'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-muted-foreground hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Instant Calendar</span>
            </button>
            <button
              onClick={() => setActiveTab('form')}
              className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${activeTab === 'form'
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm'
                : 'text-muted-foreground hover:text-slate-900 dark:hover:text-white'
                }`}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Submit Request</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        {activeTab === 'cal' ? (
          <div className="p-3 sm:p-6 rounded-2xl border border-border bg-card shadow-xl overflow-hidden min-h-[700px] relative space-y-4">
            {/* Duration Selector */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-border pb-4">
              <span className="text-xs sm:text-sm font-semibold text-muted-foreground">Select Call Duration:</span>
              <div className="grid grid-cols-2 sm:flex gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setMeetingDuration('15')}
                  className={`px-3 py-2 rounded-lg text-xs sm:text-xs font-bold transition-all duration-200 cursor-pointer text-center justify-center whitespace-nowrap ${meetingDuration === '15'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-foreground'
                    }`}
                >
                  15 Min <span className="hidden sm:inline">Discovery</span> Call
                </button>
                <button
                  onClick={() => setMeetingDuration('30')}
                  className={`px-3 py-2 rounded-lg text-xs sm:text-xs font-bold transition-all duration-200 cursor-pointer text-center justify-center whitespace-nowrap ${meetingDuration === '30'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md'
                    : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-foreground'
                    }`}
                >
                  30 Min <span className="hidden sm:inline">Strategy</span> Call
                </button>
              </div>
            </div>
            {/* Cal.com Embed Container */}
            <div className="relative w-full min-h-[650px] rounded-xl overflow-hidden">
              {/* Skeleton Loader */}
              {!iframeLoaded && (
                <div className="absolute inset-0 z-10 bg-card border border-border rounded-xl flex flex-col sm:flex-row p-8 gap-12 animate-pulse">
                   {/* Left sidebar skeleton */}
                   <div className="w-full sm:w-1/3 space-y-6">
                     <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-slate-800" />
                     <div className="space-y-3">
                       <div className="w-32 h-4 rounded bg-slate-200 dark:bg-slate-800" />
                       <div className="w-48 h-8 rounded bg-slate-200 dark:bg-slate-800" />
                     </div>
                     <div className="space-y-3 pt-4">
                       <div className="w-24 h-4 rounded bg-slate-200 dark:bg-slate-800" />
                       <div className="w-32 h-4 rounded bg-slate-200 dark:bg-slate-800" />
                     </div>
                   </div>
                   {/* Right calendar skeleton */}
                   <div className="flex-1 space-y-8">
                     <div className="flex justify-between items-center">
                       <div className="w-40 h-8 rounded bg-slate-200 dark:bg-slate-800" />
                       <div className="flex gap-2">
                         <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                         <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800" />
                       </div>
                     </div>
                     <div className="grid grid-cols-7 gap-4 sm:gap-6">
                       {Array.from({length: 35}).map((_, i) => (
                         <div key={i} className="aspect-square rounded-full bg-slate-100 dark:bg-slate-800/50" />
                       ))}
                     </div>
                   </div>
                </div>
              )}
              
              <iframe
                src={`https://cal.com/replytentra/${meetingDuration}min?embed=true&theme=${theme}`}
                style={{ width: '100%', height: '100%', minHeight: '650px', border: '0' }}
                className={`w-full h-full bg-transparent transition-opacity duration-500 relative z-20 ${iframeLoaded ? 'opacity-100' : 'opacity-0'}`}
                allowFullScreen
                onLoad={() => setIframeLoaded(true)}
                title={`Cal.com Booking ${meetingDuration}min`}
              />
            </div>
          </div>
        ) : (
          /* Success Modal or Form */
          showSuccess ? (
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
                    className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-border'
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
                    className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-border'
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
                  className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-border'
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
                    className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${errors.date ? 'border-red-500 focus:ring-red-500' : 'border-border'
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
                    className={`w-full px-4 py-2.5 rounded-lg border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm ${errors.time ? 'border-red-500 focus:ring-red-500' : 'border-border'
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
          )
        )}
      </div>
    </div>
  );
}
