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

  // Sample product data - this would come from TCGPlayer API
  const products = [
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
      name: "Black Lotus",
      set: "Alpha",
      price: 15000.00,
      condition: "Played",
      rarity: "Rare",
      image: "/placeholder.svg",
      category: "singles",
      description: "Add three mana of any one color."
    },
    {
      id: 3,
      name: "The Lord of the Rings Draft Booster",
      set: "The Lord of the Rings",
      price: 4.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "boosters",
      description: "Contains 15 cards including 1 rare or mythic rare."
    },
    {
      id: 4,
      name: "Commander Deck - Draconic Dissent",
      set: "Commander Legends: Battle for Baldur's Gate",
      price: 39.99,
      condition: "Sealed",
      rarity: "N/A",
      image: "/placeholder.svg",
      category: "precons",
      description: "Ready-to-play 100-card Commander deck."
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
              <SelectItem value="Alpha">Alpha</SelectItem>
              <SelectItem value="Masters 25">Masters 25</SelectItem>
              <SelectItem value="The Lord of the Rings">The Lord of the Rings</SelectItem>
              <SelectItem value="Commander Legends: Battle for Baldur's Gate">Commander Legends</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-700">
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