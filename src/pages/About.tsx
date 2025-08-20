import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone, Mail, Star, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const staff = [
    {
      name: "Mike Chen",
      role: "Store Owner & Tournament Organizer",
      experience: "15+ years playing MTG",
      favorite: "Control decks & Limited formats",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      role: "Assistant Manager & Judge",
      experience: "Level 1 Judge, 10 years MTG",
      favorite: "Commander & Modern",
      image: "/placeholder.svg"
    },
    {
      name: "Alex Rivera",
      role: "Inventory Specialist",
      experience: "8 years competitive play",
      favorite: "Standard & Pioneer",
      image: "/placeholder.svg"
    }
  ];

  const policies = [
    {
      title: "Returns & Exchanges",
      content: "Unopened sealed products can be returned within 7 days with receipt. Singles must be in the same condition as sold."
    },
    {
      title: "Trade-In Policy",
      content: "We accept MTG cards for trade-in credit. Rates based on current market value and card condition. Bonus 10% for store credit vs cash."
    },
    {
      title: "Tournament Rules",
      content: "All events follow official Wizards of the Coast rules. Deck registration required 15 minutes before start time."
    },
    {
      title: "Store Credit",
      content: "Store credit never expires and can be used for any purchase including event entry fees. Credit earned through tournaments and trade-ins."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">About Shenanigan's CardStop</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Your premier destination for Magic: The Gathering in the heart of the city. 
            We've been serving the MTG community since 2015 with passion, expertise, and the best selection of cards.
          </p>
        </div>

        {/* Store Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Store Details */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-2">
                <MapPin className="h-6 w-6 text-blue-400" />
                Store Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-slate-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Address</p>
                  <p className="text-slate-300">123 Magic Avenue<br />Gaming District, GA 30309</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-slate-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Store Hours</p>
                  <div className="text-slate-300 space-y-1">
                    <p>Monday - Thursday: 12:00 PM - 9:00 PM</p>
                    <p>Friday: 12:00 PM - 11:00 PM (FNM)</p>
                    <p>Saturday: 10:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-slate-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Contact</p>
                  <p className="text-slate-300">(555) 123-MAGIC</p>
                  <p className="text-slate-300">info@shenanigans-cardstop.com</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Store Stats */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-400" />
                Store Highlights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">9</div>
                  <div className="text-slate-300 text-sm">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">500+</div>
                  <div className="text-slate-300 text-sm">Regular Players</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">50k+</div>
                  <div className="text-slate-300 text-sm">Cards in Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">4.8</div>
                  <div className="text-slate-300 text-sm">Google Rating</div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-600 text-white">Authorized Retailer</Badge>
                  <span className="text-slate-300 text-sm">Official WPN Store</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-blue-600 text-white">Tournament Sanctioned</Badge>
                  <span className="text-slate-300 text-sm">All formats supported</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-purple-600 text-white">Expert Staff</Badge>
                  <span className="text-slate-300 text-sm">Certified judges on site</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-300 text-lg text-center leading-relaxed">
              At Shenanigan's CardStop, we believe Magic: The Gathering is more than just a card game—it's a community, 
              a passion, and a way to bring people together. Our mission is to provide an inclusive, welcoming environment 
              where players of all skill levels can enjoy the game they love, discover new strategies, and forge lasting friendships. 
              Whether you're a seasoned planeswalker or just starting your journey, we're here to support your MTG adventure.
            </p>
          </CardContent>
        </Card>

        {/* Staff Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {staff.map((member, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-slate-300 text-sm mb-2">{member.experience}</p>
                  <p className="text-slate-400 text-sm">
                    <span className="font-semibold">Favorite:</span> {member.favorite}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Store Policies */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-8">Store Policies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {policies.map((policy, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300">
                    {policy.content}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-blue-800 to-purple-800 border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Community?</h3>
              <p className="text-slate-200 mb-6">
                Stop by today to browse our selection, meet fellow players, or ask about our upcoming events!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/events" className="inline-block">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    View Events
                  </button>
                </a>
                <a href="/shop" className="inline-block">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                    Browse Inventory
                  </button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;