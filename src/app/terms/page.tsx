import SceneTrigger from "@/components/3d/SceneTrigger";

export const metadata = {
  title: "Terms & Conditions | Adaptive Engineering",
  description: "Terms and conditions of service for Adaptive Engineering.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 relative">
      <SceneTrigger variant="wave" color="#0da08a" speed={0.2} />
      
      <div className="max-w-4xl mx-auto relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50">
        <h1 className="text-4xl md:text-5xl font-black text-white font-heading tracking-tight mb-8">
          Terms & Conditions
        </h1>
        
        <div className="prose prose-invert prose-slate max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3>1. Acceptance of Terms</h3>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
            In addition, when using this website's particular services, you shall be subject to any posted guidelines or rules applicable to such services.
          </p>

          <h3>2. Intellectual Property Rights</h3>
          <p>
            The website and its original content, features, and functionality are owned by Adaptive Engineering Pvt. Ltd. and are protected by international copyright, 
            trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>

          <h3>3. User License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on Adaptive Engineering's website for personal, 
            non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>

          <h3>4. Disclaimer</h3>
          <p>
            The materials on Adaptive Engineering's website are provided on an 'as is' basis. Adaptive Engineering makes no warranties, expressed or implied, 
            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, 
            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h3>5. Limitations</h3>
          <p>
            In no event shall Adaptive Engineering or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
            or due to business interruption) arising out of the use or inability to use the materials on Adaptive Engineering's website.
          </p>
        </div>
      </div>
    </main>
  );
}
