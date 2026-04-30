import { QuickLinkButton } from "@/components/QuickLinkButton";
import { Phone, MessageCircle, Globe, Mail } from "lucide-react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-md space-y-8">
        {/* Profile Header */}
        <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 drop-shadow-sm">
              Abhishek Singh
            </h1>
            <p className="text-base text-slate-600 mt-1 font-medium">
              Founder <span className="text-slate-300 mx-1">|</span> MediKarya
            </p>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 mt-8 animate-fade-in delay-200">
          <QuickLinkButton 
            href="tel:+919711638511" 
            title="Call Me" 
            subtitle="+91 9711638511"
            icon={<Phone className="w-6 h-6" />} 
          />
          <QuickLinkButton 
            href="https://wa.me/919711638511" 
            title="WhatsApp" 
            subtitle="Message +91 9711638511"
            icon={<MessageCircle className="w-6 h-6" />} 
          />
          <QuickLinkButton 
            href="mailto:abhishek@medikarya.in" 
            title="Email Me" 
            subtitle="abhishek@medikarya.in"
            icon={<Mail className="w-6 h-6" />} 
          />
          <QuickLinkButton 
            href="https://www.linkedin.com/in/abhishek-singh-977605354/" 
            title="LinkedIn" 
            subtitle="Connect professionally"
            icon={<LinkedinIcon className="w-6 h-6" />} 
          />
          <QuickLinkButton 
            href="https://medikarya.in" 
            title="MediKarya" 
            subtitle="Visit our official website"
            icon={<Globe className="w-6 h-6" />} 
          />
        </div>

        {/* Footer */}
        <footer className="pt-8 text-center text-sm text-slate-400 animate-fade-in delay-400">
          <p>© {new Date().getFullYear()} Abhishek Singh. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
