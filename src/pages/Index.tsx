import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ShoppingBag, Users, Trophy, MapPin, Clock, Star, ArrowRight } from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Shenanigan's CardStop - Premier Magic: The Gathering Store";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        "Your premier destination for Magic: The Gathering cards, tournaments, and community events. Shop singles, sealed products, and join our gaming community."
      );
    }
  }, []);

  const featuredProducts = [
    {
      name: "Murders at Karlov Manor Collector Booster",
      price: 24.99,
      image: "/placeholder.svg",
      badge: "New Release"
    },
    {
      name: "The One Ring",
      price: 85.99,
      image: "/placeholder.svg",
      badge: "Hot Item"
    },
    {
      name: "Rhystic Study",
      price: 24.99,
      image: "/placeholder.svg",
      badge: "Commander Staple"
    },
    {
      name: "Force of Will",
      price: 89.99,
      image: "/placeholder.svg",
      badge: "Legacy Power"
    },
    {
      name: "Deadly Disguise - Commander Deck",
      price: 42.99,
      image: "/placeholder.svg",
      badge: "Best Seller"
    },
    {
      name: "Sheoldred, the Apocalypse",
      price: 52.99,
      image: "/placeholder.svg",
      badge: "Standard All-Star"
    }
  ];

  const upcomingEvents = [
    {
      title: "Friday Night Magic - Draft",
      date: "Jan 26",
      time: "7:00 PM",
      players: "18/24",
      format: "Draft"
    },
    {
      title: "Commander Tournament",
      date: "Jan 28",
      time: "2:00 PM",
      players: "12/16",
      format: "Commander"
    },
    {
      title: "Murders at Karlov Manor Prerelease",
      date: "Feb 03",
      time: "12:00 PM",
      players: "28/32",
      format: "Sealed"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-blue-400">Shenanigan's CardStop</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Your premier destination for Magic: The Gathering. From the latest singles to epic tournaments, 
              we've been serving planeswalkers since 2015 with passion and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3">
                <Calendar className="h-5 w-5 mr-2" />
                Join Next Event
              </Button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">9+</div>
                <div className="text-slate-300">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">50k+</div>
                <div className="text-slate-300">Cards in Stock</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-slate-300">Regular Players</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">4.8</div>
                <div className="text-slate-300">Google Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Featured Products</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Check out our latest and most popular Magic: The Gathering products
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {featuredProducts.map((product, index) => (
                <Card key={index} className="bg-slate-800 border-slate-700">
                  <CardHeader className="pb-2">
                    <div className="aspect-square bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg";
                        }}
                      />
                    </div>
                    <Badge className="w-fit mb-2 bg-blue-600 text-white">{product.badge}</Badge>
                    <CardTitle className="text-white text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-400">${product.price}</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                View All Products
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Join our community for exciting tournaments and events
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-white text-lg mb-2">{event.title}</CardTitle>
                        <div className="flex items-center gap-4 text-slate-300 text-sm">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-purple-600 text-white">{event.format}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="text-slate-300">
                        <Users className="h-4 w-4 inline mr-1" />
                        {event.players}
                      </div>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        Register
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                View All Events
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Store Info */}
        <section className="py-16 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Visit Our Store</h2>
                <p className="text-slate-300 text-lg mb-8">
                  Located in the heart of the gaming district, Shenanigan's CardStop offers a welcoming 
                  environment for players of all skill levels. Come browse our extensive collection, 
                  play some games, and meet fellow Magic enthusiasts.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-slate-300">123 Magic Avenue, Gaming District, GA 30309</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-400 mt-1" />
                    <div>
                      <p className="text-white font-semibold">Store Hours</p>
                      <p className="text-slate-300">Mon-Thu: 12PM-9PM | Fri: 12PM-11PM | Sat: 10AM-11PM | Sun: 12PM-8PM</p>
                    </div>
                  </div>
                </div>
                
                <Button className="bg-blue-600 hover:bg-blue-700" size="lg">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
              
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-8 text-center">
                  <Trophy className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Tournament Ready</h3>
                  <p className="text-slate-300 mb-6">
                    We're an authorized WPN store with certified judges on staff. 
                    All events follow official tournament rules and procedures.
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    <span className="text-white font-semibold">Wizards Play Network Premier</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
