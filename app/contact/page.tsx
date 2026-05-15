import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Dishant",
  description: "Get in touch with Dishant for projects or collaborations.",
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex flex-col gap-2 group cursor-pointer w-fit">
      <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400">
        {label}
      </p>
      <a 
        href={href} 
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="flex items-center gap-3 text-[16px] text-[#111] font-inter decoration-transparent"
      >
        <span className="relative">
          {value}
          <span className="absolute left-0 bottom-[-2px] w-full h-[1px] bg-black origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
        </span>
        <span className="opacity-0 -translate-x-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
          →
        </span>
      </a>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main style={{ backgroundColor: "#F4F4F4", minHeight: "100vh" }}>
      
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] pt-[clamp(120px,15vh,200px)] pb-[clamp(80px,10vh,140px)]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[640px_360px] gap-[80px] lg:gap-[120px]">
          
          {/* Left Column */}
          <div className="flex flex-col gap-[80px] lg:gap-[160px]">
            <div>
              <h1 className="font-playfair text-[clamp(50px,8vw,80px)] leading-[0.9] tracking-[-0.04em] text-black mb-12 uppercase">
                CONTACT
              </h1>
              
              <div className="max-w-[520px] flex flex-col gap-6 text-[18px] text-[#444] leading-[1.6] font-inter">
                <p>
                  I&apos;m currently available for freelance work, collabs, and interesting ideas.
                </p>
                <p>
                  Send me a message and I&apos;ll reply within a day.
                </p>
              </div>
              <div className="mt-10">
                <a
                  href="/Dishant_resume1 (1).pdf"
                  download
                  className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.14em] uppercase text-[#111] border-b border-black pb-1 hover:opacity-70 transition-opacity"
                >
                  Download Resume →
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <ContactForm />

            {/* Currently Open To */}
            <div>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-gray-400 mb-6">
                CURRENTLY OPEN TO
              </p>
              <ul className="flex flex-col gap-3 text-[16px] text-[#444] font-inter">
                <li>• building experimental web products</li>
                <li>• developer tools</li>
                <li>• interesting collaborations</li>
              </ul>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-8 lg:pt-[130px]">
            <ContactLink 
              label="EMAIL" 
              value="savadiadishan@gmail.com" 
              href="mailto:savadiadishan@gmail.com" 
            />
            <ContactLink 
              label="GITHUB" 
              value="github.com/dishant11max" 
              href="https://github.com/dishant11max" 
            />
            <ContactLink 
              label="LINKEDIN" 
              value="linkedin.com/in/dishant-savadia" 
              href="https://www.linkedin.com/in/dishant-savadia-b38b0a289/" 
            />
            <ContactLink 
              label="TWITTER" 
              value="x.com/dishant10510925" 
              href="https://x.com/dishant10510925" 
            />
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
