import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Star, Users, MessageCircle, TrendingUp, Crown } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Community = () => {
  const [selectedFormat, setSelectedFormat] = useState("all");

  const leaderboard = [
    {
      rank: 1,
      name: "Alex Thunder",
      points: 2850,
      format: "Standard",
      winRate: "78%",
      tournaments: 24,
      lastActive: "2 days ago"
    },
    {
      rank: 2,
      name: "Sarah Storm",
      points: 2720,
      format: "Commander",
      winRate: "65%",
      tournaments: 31,
      lastActive: "1 day ago"
    },
    {
      rank: 3,
      name: "Mike Lightning",
      points: 2650,
      format: "Draft",
      winRate: "82%",
      tournaments: 18,
      lastActive: "3 hours ago"
    },
    {
      rank: 4,
      name: "Emma Spark",
      points: 2540,
      format: "Modern",
      winRate: "71%",
      tournaments: 22,
      lastActive: "5 hours ago"
    },
    {
      rank: 5,
      name: "David Blaze",
      points: 2380,
      format: "Pioneer",
      winRate: "69%",
      tournaments: 19,
      lastActive: "1 week ago"
    }
  ];

  const recentResults = [
    {
      event: "Friday Night Magic - Standard",
      date: "January 19, 2024",
      winner: "Alex Thunder",
      deck: "Mono Red Aggro",
      participants: 16,
      format: "Standard"
    },
    {
      event: "Commander Tournament",
      date: "January 14, 2024",
      winner: "Sarah Storm",
      deck: "Atraxa Superfriends",
      participants: 12,
      format: "Commander"
    },
    {
      event: "Draft Night",
      date: "January 12, 2024",
      winner: "Mike Lightning",
      deck: "UW Fliers",
      participants: 8,
      format: "Draft"
    }
  ];

  const discussions = [
    {
      title: "Best Commander Deck for Beginners?",
      author: "NewPlayer123",
      replies: 23,
      lastReply: "2 hours ago",
      category: "Commander",
      isHot: true
    },
    {
      title: "Standard Meta After Latest Bans",
      author: "MetaGamer",
      replies: 45,
      lastReply: "4 hours ago",
      category: "Standard",
      isHot: true
    },
    {
      title: "Draft Strategies for Current Set",
      author: "DraftMaster",
      replies: 18,
      lastReply: "1 day ago",
      category: "Limited",
      isHot: false
    },
    {
      title: "Looking for Playgroup - Casual Commander",
      author: "FriendlyMage",
      replies: 12,
      lastReply: "2 days ago",
      category: "Community",
      isHot: false
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Trophy className="h-5 w-5 text-gray-300" />;
      case 3:
        return <Trophy className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-slate-400 font-bold">#{rank}</span>;
    }
  };

  const getFormatColor = (format: string) => {
    switch (format.toLowerCase()) {
      case "standard": return "bg-red-600";
      case "commander": return "bg-green-600";
      case "draft": return "bg-purple-600";
      case "modern": return "bg-blue-600";
      case "pioneer": return "bg-orange-600";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">Community Hub</h1>
          <p className="text-slate-300">Connect with fellow planeswalkers, track your progress, and stay up to date with the latest results.</p>
        </div>

        <Tabs defaultValue="leaderboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
            <TabsTrigger value="leaderboard" className="data-[state=active]:bg-slate-700">
              <Trophy className="h-4 w-4 mr-2" />
              Leaderboard
            </TabsTrigger>
            <TabsTrigger value="results" className="data-[state=active]:bg-slate-700">
              <Star className="h-4 w-4 mr-2" />
              Recent Results
            </TabsTrigger>
            <TabsTrigger value="discussion" className="data-[state=active]:bg-slate-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              Discussions
            </TabsTrigger>
          </TabsList>

          <TabsContent value="leaderboard" className="space-y-6">
            {/* Format Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                size="sm"
                onClick={() => setSelectedFormat("all")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                All Formats
              </Button>
              {["Standard", "Commander", "Draft", "Modern", "Pioneer"].map((format) => (
                <Button
                  key={format}
                  size="sm"
                  onClick={() => setSelectedFormat(format)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {format}
                </Button>
              ))}
            </div>

            {/* Leaderboard */}
            <div className="space-y-4">
              {leaderboard.map((player) => (
                <Card key={player.rank} className="bg-slate-800 border-slate-700">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 min-w-[60px]">
                          {getRankIcon(player.rank)}
                          {player.rank > 3 && <span className="text-slate-400 font-bold">#{player.rank}</span>}
                        </div>
                        
                        <Avatar className="h-10 w-10">
                          <AvatarFallback className="bg-slate-700 text-white">
                            {player.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        
                        <div>
                          <h3 className="text-white font-semibold">{player.name}</h3>
                          <div className="flex items-center gap-2">
                            <Badge className={`${getFormatColor(player.format)} text-white text-xs`}>
                              {player.format}
                            </Badge>
                            <span className="text-slate-400 text-sm">{player.lastActive}</span>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-400">{player.points}</div>
                        <div className="text-slate-400 text-sm">points</div>
                      </div>

                      <div className="text-right">
                        <div className="text-lg font-semibold text-green-400">{player.winRate}</div>
                        <div className="text-slate-400 text-sm">{player.tournaments} tournaments</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            {recentResults.map((result, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-lg">{result.event}</CardTitle>
                      <CardDescription className="text-slate-300">{result.date}</CardDescription>
                    </div>
                    <Badge className={`${getFormatColor(result.format)} text-white`}>
                      {result.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-slate-700 text-white">
                          {result.winner.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-semibold flex items-center gap-2">
                          <Crown className="h-4 w-4 text-yellow-400" />
                          {result.winner}
                        </div>
                        <div className="text-slate-400 text-sm">{result.deck}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-slate-300">
                        <Users className="h-4 w-4 inline mr-1" />
                        {result.participants} players
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">View Complete Tournament History</h3>
                <p className="text-slate-300 mb-4">
                  Browse detailed results from all our past events, including deck lists and match results.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Full Results Archive
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussion" className="space-y-6">
            {discussions.map((discussion, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{discussion.title}</h3>
                        {discussion.isHot && (
                          <Badge className="bg-red-600 text-white text-xs">HOT</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-slate-400 text-sm">
                        <span>by {discussion.author}</span>
                        <Badge variant="outline" className="border-slate-600 text-slate-300">
                          {discussion.category}
                        </Badge>
                        <span>{discussion.replies} replies</span>
                        <span>Last reply {discussion.lastReply}</span>
                      </div>
                    </div>
                    <MessageCircle className="h-5 w-5 text-slate-400" />
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-semibold mb-2">Join the Conversation</h3>
                <p className="text-slate-300 mb-4">
                  Share strategies, ask questions, and connect with fellow Magic players.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Start New Discussion
                  </Button>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Topics
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Social Links */}
        <Card className="bg-slate-800 border-slate-700 mt-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-white text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-slate-300 mb-6">
              Follow us on social media for the latest updates, spoilers, and community highlights!
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Facebook
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Discord
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Instagram
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Twitter/X
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Community;