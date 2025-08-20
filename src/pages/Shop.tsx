import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSet, setSelectedSet] = useState("all");

  // Expanded product data with realistic MTG inventory
  const products = [
    // Popular Singles
    {
      id: 1,
      name: "Lightning Bolt",
      set: "Masters 25",
      price: 2.99,
      condition: "Near Mint",
      rarity: "Common",
      image: "/placeholder.svg",
      category: "singles",
      description: "Deal 3 damage to any target."
    },
    {
      id: 2,
      name: "Counterspell",
      set: "Masters 25", 
      price: 1.99,
      condition: "Near Mint",
      rarity: "Common",
      image: "/placeholder.svg",
      category: "singles",
      description: "Counter target spell."
    },
    {
      id: 3,
      name: "Sol Ring",
      set: "Commander Masters",
      price: 1.49,
      condition: "Near Mint", 
      rarity: "Uncommon",
      image: "/placeholder.svg",
      category: "singles",
      description: "Add two colorless mana."
    },
    {
      id: 4,
      name: "Rhystic Study",
      set: "Commander Masters",
      price: 24.99,
      condition: "Near Mint",
      rarity: "Common",
      image: "/placeholder.svg", 
      category: "singles",
      description: "Whenever an opponent casts a spell, you may draw a card."
    },
    {
      id: 5,
      name: "Force of Will",
      set: "Eternal Masters",
      price: 89.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles", 
      description: "You may pay 1 life and exile a blue card rather than pay this spell's mana cost."
    },
    {
      id: 6,
      name: "Teferi, Time Raveler",
      set: "War of the Spark",
      price: 12.99,
      condition: "Near Mint",
      rarity: "Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Each opponent can cast spells only any time they could cast a sorcery."
    },
    {
      id: 7,
      name: "Mox Diamond",
      set: "Stronghold",
      price: 450.00,
      condition: "Lightly Played",
      rarity: "Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "If Mox Diamond would enter the battlefield, you may discard a land card instead."
    },
    {
      id: 8,
      name: "Snapcaster Mage",
      set: "Ultimate Masters",
      price: 18.99,
      condition: "Near Mint",
      rarity: "Rare", 
      image: "/placeholder.svg",
      category: "singles",
      description: "Flash. When Snapcaster Mage enters the battlefield, target instant or sorcery card in your graveyard gains flashback."
    },
    {
      id: 9,
      name: "Craterhoof Behemoth",
      set: "Jumpstart 2022",
      price: 32.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Haste. When Craterhoof Behemoth enters the battlefield, creatures you control gain trample and get +X/+X until end of turn."
    },
    {
      id: 10,
      name: "Mana Crypt",
      set: "Eternal Masters",
      price: 189.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "At the beginning of your upkeep, flip a coin. If you lose the flip, Mana Crypt deals 3 damage to you."
    },

    // Current Set Boosters
    {
      id: 11,
      name: "Murders at Karlov Manor Draft Booster",
      set: "Murders at Karlov Manor",
      price: 4.49,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters",
      description: "Contains 15 cards including 1 rare or mythic rare."
    },
    {
      id: 12,
      name: "Murders at Karlov Manor Set Booster",
      set: "Murders at Karlov Manor", 
      price: 5.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters",
      description: "Optimized for exciting pack opening experience."
    },
    {
      id: 13,
      name: "Murders at Karlov Manor Collector Booster",
      set: "Murders at Karlov Manor",
      price: 24.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters", 
      description: "Premium booster with special treatments and showcase cards."
    },
    {
      id: 14,
      name: "The Lost Caverns of Ixalan Draft Booster",
      set: "The Lost Caverns of Ixalan",
      price: 4.25,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters",
      description: "Explore underground civilizations and discover new treasures."
    },
    {
      id: 15,
      name: "Wilds of Eldraine Set Booster",
      set: "Wilds of Eldraine",
      price: 5.49,
      condition: "Sealed", 
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters",
      description: "Return to the fairy tale plane of Eldraine."
    },

    // Commander Precons
    {
      id: 16,
      name: "Deadly Disguise - Commander Deck",
      set: "Murders at Karlov Manor",
      price: 42.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "precons",
      description: "Black/Blue face-down creatures and disguise mechanics."
    },
    {
      id: 17,
      name: "Revenant Recon - Commander Deck", 
      set: "Murders at Karlov Manor",
      price: 42.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "precons",
      description: "White/Black investigate and clue token synergies."
    },
    {
      id: 18,
      name: "Draconic Dissent - Commander Deck",
      set: "Commander Legends: Battle for Baldur's Gate",
      price: 38.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "precons",
      description: "Red/Green dragon tribal with goad mechanics."
    },
    {
      id: 19,
      name: "Explorers of the Deep - Commander Deck",
      set: "The Lost Caverns of Ixalan",
      price: 41.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "precons",
      description: "Blue/Green explore and merfolk tribal deck."
    },
    {
      id: 20,
      name: "Fae Dominion - Commander Deck",
      set: "Wilds of Eldraine",
      price: 40.99,
      condition: "Sealed",
      rarity: "N/A", 
      image: "/placeholder.svg",
      category: "precons",
      description: "Blue/Black faerie tribal with flash and instant speed tricks."
    },

    // Accessories  
    {
      id: 21,
      name: "Dragon Shield Card Sleeves - Matte Black",
      set: "Accessories",
      price: 12.99,
      condition: "New",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Premium 100-count standard size card sleeves."
    },
    {
      id: 22,
      name: "Ultimate Guard Boulder Deck Case",
      set: "Accessories",
      price: 8.99,
      condition: "New", 
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Holds up to 80 sleeved cards securely."
    },
    {
      id: 23,
      name: "Ultra Pro Playmat - Magic Logo",
      set: "Accessories",
      price: 19.99,
      condition: "New",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Official Magic: The Gathering playmat with stitched edges."
    },
    {
      id: 24,
      name: "KMC Perfect Fit Sleeves",
      set: "Accessories", 
      price: 4.99,
      condition: "New",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "accessories",
      description: "Inner sleeves for double-sleeving protection."
    },

    // More High-Value Singles
    {
      id: 25,
      name: "Gaea's Cradle",
      set: "Urza's Saga",
      price: 1250.00,
      condition: "Near Mint",
      rarity: "Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Add G for each creature you control."
    },
    {
      id: 26,
      name: "The One Ring",
      set: "The Lord of the Rings",
      price: 85.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles", 
      description: "Indestructible. When The One Ring enters the battlefield, if you cast it, you gain protection from everything until your next turn."
    },
    {
      id: 27,
      name: "Sheoldred, the Apocalypse",
      set: "Dominaria United",
      price: 52.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Deathtouch. Whenever you draw a card, you gain 2 life. Whenever an opponent draws a card, they lose 2 life."
    },
    {
      id: 28,
      name: "Ragavan, Nimble Pilferer",
      set: "Modern Horizons 2",
      price: 67.99,
      condition: "Near Mint",
      rarity: "Mythic Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Whenever Ragavan deals combat damage to a player, create a Treasure token and exile the top card of that player's library."
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSet = selectedSet === "all" || product.set === selectedSet;
    return matchesSearch && matchesCategory && matchesSet;
  });

  const getRarityColor = (rarity: string) => {
    switch (rarity.toLowerCase()) {
      case "mythic rare": return "bg-orange-500";
      case "rare": return "bg-yellow-500";
      case "uncommon": return "bg-gray-400";
      case "common": return "bg-gray-600";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Magic: The Gathering Inventory</h1>
          <p className="text-slate-300">Browse our extensive collection of MTG singles, boosters, and preconstructed decks.</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-slate-800 rounded-lg">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search cards..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-slate-700 border-slate-600 text-white"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="singles">Singles</SelectItem>
              <SelectItem value="boosters">Booster Packs</SelectItem>
              <SelectItem value="precons">Preconstructed Decks</SelectItem>
              <SelectItem value="accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedSet} onValueChange={setSelectedSet}>
            <SelectTrigger className="w-full md:w-48 bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Set" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sets</SelectItem>
              <SelectItem value="Masters 25">Masters 25</SelectItem>
              <SelectItem value="Commander Masters">Commander Masters</SelectItem>
              <SelectItem value="Murders at Karlov Manor">Murders at Karlov Manor</SelectItem>
              <SelectItem value="The Lost Caverns of Ixalan">The Lost Caverns of Ixalan</SelectItem>
              <SelectItem value="Wilds of Eldraine">Wilds of Eldraine</SelectItem>
              <SelectItem value="The Lord of the Rings">The Lord of the Rings</SelectItem>
              <SelectItem value="Dominaria United">Dominaria United</SelectItem>
              <SelectItem value="Modern Horizons 2">Modern Horizons 2</SelectItem>
              <SelectItem value="Eternal Masters">Eternal Masters</SelectItem>
              <SelectItem value="War of the Spark">War of the Spark</SelectItem>
              <SelectItem value="Urza's Saga">Urza's Saga</SelectItem>
              <SelectItem value="Stronghold">Stronghold</SelectItem>
              <SelectItem value="Ultimate Masters">Ultimate Masters</SelectItem>
              <SelectItem value="Jumpstart 2022">Jumpstart 2022</SelectItem>
              <SelectItem value="Commander Legends: Battle for Baldur's Gate">Commander Legends</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
            </SelectContent>
          </Select>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Filter className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
              <CardHeader className="pb-2">
                <div className="aspect-square bg-slate-700 rounded-lg mb-2 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <CardTitle className="text-white text-lg line-clamp-2">{product.name}</CardTitle>
                <CardDescription className="text-slate-300">{product.set}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-3">
                  {product.rarity !== "N/A" && (
                    <Badge className={`text-white ${getRarityColor(product.rarity)}`}>
                      {product.rarity}
                    </Badge>
                  )}
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {product.condition}
                  </Badge>
                </div>
                
                <p className="text-slate-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-400">
                    ${product.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;