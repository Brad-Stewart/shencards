import { Store, MapPin, Phone, Mail, Facebook, MessageSquare, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand & Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Store className="h-8 w-8 text-blue-400" />
              <h3 className="text-2xl font-bold">Shenanigan's CardStop</h3>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Your premier destination for Magic: The Gathering since 2015. 
              From singles to tournaments, we're here to serve the planeswalker community.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="h-4 w-4 text-blue-400" />
                123 Magic Avenue, Gaming District, GA 30309
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="h-4 w-4 text-blue-400" />
                (555) 123-MAGIC
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                info@shenanigans-cardstop.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="/shop" className="hover:text-white transition-colors">Shop</a></li>
              <li><a href="/events" className="hover:text-white transition-colors">Events</a></li>
              <li><a href="/community" className="hover:text-white transition-colors">Community</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
            </ul>
          </div>

          {/* Store Hours & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Store Hours</h4>
            <div className="text-sm text-slate-300 space-y-1 mb-6">
              <p>Mon - Thu: 12PM - 9PM</p>
              <p>Friday: 12PM - 11PM</p>
              <p>Saturday: 10AM - 11PM</p>
              <p>Sunday: 12PM - 8PM</p>
            </div>
            
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/shenanigans-cardstop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                aria-label="Facebook page"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://discord.gg/shenanigans-cardstop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Discord server"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com/shenanigans_cardstop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
                aria-label="Instagram page"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} Shenanigan's CardStop. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-400 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>WPN Store #12345</span>
          </div>
        </div>
      </div>
    </footer>
  );
}