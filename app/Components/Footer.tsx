import Link from "next/dist/client/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 justify-between">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-1">Germane Synergy</h2>
          <p className="mb-2">Innovative solutions. Sustainable future.</p>
          <p><i className="fa-solid fa-location-dot"></i> Headquartered in Nigeria, with representatives </p>
          <p className="mb-2">in India, the US, and Singapore.</p>
          <p>© 2014. Germane Synergy Limited.</p>
          <p>All Rights Reserved.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="mb-1"><i className="fa-solid fa-phone"></i>&nbsp; [+234] 80 86050191</p>
          <p className="mb-1"><a href="mailto:info@germanesynergy.com"><i className="fa-solid fa-envelope"></i>&nbsp; info@germanesynergy.com</a></p>
          <p className="mb-1"><a href="http://www.linkedin.com/company/germane-synergy-nig-limited"><i className="fa-brands fa-linkedin"></i>&nbsp; Linkedin</a></p>
          <p className="mb-1"><a href="http://www.facebook.com/company/germane-synergy-nig-limited"><i className="fa-brands fa-facebook"></i>&nbsp; Facebook</a></p>
        </div>
      </div>
    </footer>
  );
}