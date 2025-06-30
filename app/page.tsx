import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const categories = ["Backend", "Frontend", "Publication", "Site perso"];

const initialSites = {
  Backend: ["API Auth", "Base de données"],
  Frontend: ["Interface Admin", "Page d'accueil"],
  Publication: ["Blog", "Docs"],
  "Site perso": ["Portfolio", "CV"]
};

export default function SiteManager() {
  const [sites, setSites] = useState(initialSites);
  const [newSite, setNewSite] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const addSite = () => {
    if (!newSite) return;
    setSites(prev => ({
      ...prev,
      [category]: [...prev[category], newSite]
    }));
    setNewSite("");
  };

  const deleteSite = (cat, siteName) => {
    setSites(prev => ({
      ...prev,
      [cat]: prev[cat].filter(site => site !== siteName)
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Gestionnaire de Sites</h1>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Nom du site"
          value={newSite}
          onChange={e => setNewSite(e.target.value)}
          className="text-black"
        />
        <select
          className="text-black px-2 py-1 rounded"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
        <Button onClick={addSite}>Ajouter</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map(cat => (
          <div key={cat}>
            <h2 className="text-xl font-semibold mb-2 border-b border-white">{cat}</h2>
            <div className="flex flex-col gap-2">
              {sites[cat].map(site => (
                <Card
                  key={site}
                  className="bg-white text-black p-4 rounded-xl shadow-md flex justify-between items-center"
                >
                  <span>{site}</span>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => deleteSite(cat, site)}
                  >
                    Supprimer
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
