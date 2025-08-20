import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Trophy, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("january");

  const events = [
    {
      id: 1,
      title: "Friday Night Magic - Draft",
      date: "2024-01-26",
      time: "7:00 PM",
      format: "Draft",
      description: "Weekly draft tournament with booster prizes. Bring $15 for entry.",
      capacity: 24,
      registered: 18,
      prizePool: "Booster packs",
      isRecurring: true,
      status: "upcoming"
    },
    {
      id: 2,
      title: "Murders at Karlov Manor Prerelease",
      date: "2024-02-03",
      time: "12:00 PM",
      format: "Sealed",
      description: "Experience the new set before official release! Prerelease kit included.",
      capacity: 32,
      registered: 28,
      prizePool: "$200 store credit",
      isRecurring: false,
      status: "upcoming"
    },
    {
      id: 3,
      title: "Commander Tournament",
      date: "2024-01-28",
      time: "2:00 PM",
      format: "Commander",
      description: "Competitive multiplayer Commander event. Power level 7-8 recommended.",
      capacity: 16,
      registered: 12,
      prizePool: "$150 store credit",
      isRecurring: false,
      status: "upcoming"
    },
    {
      id: 4,
      title: "Standard Showdown",
      date: "2024-01-24",
      time: "6:30 PM",
      format: "Standard",
      description: "Competitive Standard format tournament with Swiss rounds.",
      capacity: 20,
      registered: 20,
      prizePool: "Booster packs + promo",
      isRecurring: false,
      status: "completed"
    },
    {
      id: 5,
      title: "Casual Commander Night",
      date: "2024-01-30",
      time: "6:00 PM",
      format: "Commander",
      description: "Relaxed multiplayer games. Perfect for new players. Power level 4-6.",
      capacity: 20,
      registered: 8,
      prizePool: "Participation promos",
      isRecurring: true,
      status: "upcoming"
    }
  ];

  const getFormatColor = (format: string) => {
    switch (format.toLowerCase()) {
      case "draft": return "bg-purple-600";
      case "sealed": return "bg-blue-600";
      case "commander": return "bg-green-600";
      case "standard": return "bg-red-600";
      case "modern": return "bg-yellow-600";
      default: return "bg-gray-600";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming": return "text-green-400";
      case "completed": return "text-gray-400";
      case "cancelled": return "text-red-400";
      default: return "text-gray-400";
    }
  };

  const upcomingEvents = events.filter(event => event.status === "upcoming");
  const completedEvents = events.filter(event => event.status === "completed");

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Events & Tournaments</h1>
          <p className="text-slate-300">Join our Magic: The Gathering community events and competitive tournaments.</p>
        </div>

        {/* Event Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4 text-center">
              <Calendar className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Friday Night Magic</h3>
              <p className="text-slate-400 text-sm">Weekly drafts</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4 text-center">
              <Trophy className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Tournaments</h3>
              <p className="text-slate-400 text-sm">Competitive play</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Casual Play</h3>
              <p className="text-slate-400 text-sm">Friendly games</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-4 text-center">
              <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <h3 className="text-white font-semibold">Prereleases</h3>
              <p className="text-slate-400 text-sm">New set events</p>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Events */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Upcoming Events</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{event.title}</CardTitle>
                      <div className="flex items-center gap-4 text-slate-300 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(event.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {event.time}
                        </div>
                      </div>
                    </div>
                    <Badge className={`${getFormatColor(event.format)} text-white`}>
                      {event.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">
                    {event.description}
                  </CardDescription>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-slate-400">Capacity:</span>
                      <div className="text-white">
                        {event.registered}/{event.capacity} players
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-600 h-2 rounded-full" 
                          style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-slate-400">Prize Pool:</span>
                      <div className="text-white">{event.prizePool}</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={event.registered >= event.capacity}
                    >
                      {event.registered >= event.capacity ? "Event Full" : "Register Now"}
                    </Button>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Event Calendar */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Event Calendar</h2>
          <Card className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="text-center text-slate-300">
                <Calendar className="h-16 w-16 mx-auto mb-4 text-slate-400" />
                <p>Interactive calendar view coming soon!</p>
                <p className="text-sm text-slate-400 mt-2">
                  For now, check our upcoming events above or follow us on social media for updates.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Results */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">Recent Results</h2>
          <div className="space-y-4">
            {completedEvents.map((event) => (
              <Card key={event.id} className="bg-slate-800 border-slate-700">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold">{event.title}</h3>
                      <div className="flex items-center gap-4 text-slate-300 text-sm">
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        <Badge className={`${getFormatColor(event.format)} text-white text-xs`}>
                          {event.format}
                        </Badge>
                        <span className={getStatusColor(event.status)}>Completed</span>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      View Results
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Events;