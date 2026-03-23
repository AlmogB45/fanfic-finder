import React, { useState } from 'react';
import { Search, BookOpen, UserPlus, Tag, List, ExternalLink } from 'lucide-react';
import { FANDOMS, GENERAL_TROPES, GENRES } from './data';

function App() {
  const [selectedFandomId, setSelectedFandomId] = useState('');
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [selectedTropes, setSelectedTropes] = useState([]); // Array of Trope Objects
  const [selectedGeneralTropes, setSelectedGeneralTropes] = useState([]); // Array of Trope Objects
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const activeFandom = FANDOMS.find(f => f.id === selectedFandomId);

  const toggleSelection = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter(i => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  const toggleTropeSelection = (tropeObj, list, setList) => {
    const exists = list.find(t => t.name === tropeObj.name);
    if (exists) {
      setList(list.filter(t => t.name !== tropeObj.name));
    } else {
      setList([...list, tropeObj]);
    }
  };

  const handleFandomChange = (e) => {
    setSelectedFandomId(e.target.value);
    setSelectedCharacters([]);
    setSelectedTropes([]);
    setSelectedGeneralTropes([]);
    setSelectedGenres([]);
  };

  const generateAO3Link = () => {
    if (!activeFandom) return '#';
    
    const params = new URLSearchParams();
    params.append('utf8', '✓');
    
    // Query (Title/Desc text)
    if (searchQuery) {
      params.append('work_search[query]', searchQuery);
    } else {
      params.append('work_search[query]', '');
    }

    params.append('work_search[fandom_names]', activeFandom.ao3Name || activeFandom.name);
    
    if (selectedCharacters.length > 0) {
      params.append('work_search[character_names]', selectedCharacters.join(','));
    }
    
    // Combine general genres and trope arrays into AO3 specific tags
    let tags = [...selectedGenres];
    
    selectedTropes.forEach(t => {
      tags = tags.concat(t.tags);
    });
    
    selectedGeneralTropes.forEach(t => {
      tags = tags.concat(t.tags);
    });

    if (tags.length > 0) {
      params.append('work_search[freeform_names]', tags.join(','));
    }
    
    return `https://archiveofourown.org/works/search?${params.toString()}`;
  };

  const generateFFNLink = () => {
    if (!activeFandom) return '#';
    
    const tropeNames = selectedTropes.map(t => t.name);
    const genTropeNames = selectedGeneralTropes.map(t => t.name);

    const terms = [
      activeFandom.name, 
      ...selectedCharacters, 
      ...tropeNames, 
      ...genTropeNames, 
      ...selectedGenres, 
      searchQuery
    ].filter(Boolean).join(' ');

    const params = new URLSearchParams();
    params.append('ready', '1');
    params.append('keywords', terms);
    params.append('type', 'story');
    
    return `https://www.fanfiction.net/search/?${params.toString()}`;
  };

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center p-4 bg-indigo-600/20 text-indigo-400 rounded-full mb-4 shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            <BookOpen size={48} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
            FanFic Finder
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Select your fandom, pick your favorite characters and tropes, and let us build the perfect search query for AO3 and FanFiction.net.
          </p>
        </div>

        {/* Fandom Selection */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl">
          <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
            <List size={18} className="text-indigo-400" />
            1. Choose Your Fandom
          </label>
          <select 
            className="w-full bg-slate-900 border border-slate-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all appearance-none"
            value={selectedFandomId}
            onChange={handleFandomChange}
          >
            <option value="">-- Select a Fandom --</option>
            {FANDOMS.map(f => (
              <option key={f.id} value={f.id}>{f.name}</option>
            ))}
          </select>
        </div>

        {activeFandom && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Characters */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl">
              <label className="block text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                <UserPlus size={18} className="text-emerald-400" />
                2. Select Characters
              </label>
              <div className="flex flex-wrap gap-2">
                {activeFandom.characters.map(char => (
                  <button
                    key={char}
                    onClick={() => toggleSelection(char, selectedCharacters, setSelectedCharacters)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                      selectedCharacters.includes(char) 
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.2)]' 
                        : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                    }`}
                  >
                    {char}
                  </button>
                ))}
              </div>
            </div>

            {/* Tropes & Genres */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl space-y-6">
              
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-pink-400" />
                  3. Select Fandom Tropes
                </label>
                <div className="flex flex-wrap gap-2">
                  {activeFandom.tropes.map(trope => (
                    <button
                      key={trope.name}
                      onClick={() => toggleTropeSelection(trope, selectedTropes, setSelectedTropes)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                        selectedTropes.find(t => t.name === trope.name) 
                          ? 'bg-pink-500/20 border-pink-500/50 text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.2)]' 
                          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                      }`}
                      title={trope.tags.join(', ')} // Shows the multiple tags on hover
                    >
                      {trope.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <Tag size={18} className="text-amber-400" />
                  General Tropes
                </label>
                <div className="flex flex-wrap gap-2">
                  {GENERAL_TROPES.map(trope => (
                    <button
                      key={trope.name}
                      onClick={() => toggleTropeSelection(trope, selectedGeneralTropes, setSelectedGeneralTropes)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                        selectedGeneralTropes.find(t => t.name === trope.name) 
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.2)]' 
                          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                      }`}
                      title={trope.tags.join(', ')}
                    >
                      {trope.name}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-cyan-400" />
                  Genres
                </label>
                <div className="flex flex-wrap gap-2">
                  {GENRES.map(genre => (
                    <button
                      key={genre}
                      onClick={() => toggleSelection(genre, selectedGenres, setSelectedGenres)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-all border ${
                        selectedGenres.includes(genre) 
                          ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]' 
                          : 'bg-slate-900/50 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Keyword Search */}
            <div className="md:col-span-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-2xl shadow-xl">
              <label className="block text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                <Search size={18} className="text-white" />
                4. Extra Keywords (Title/Description)
              </label>
              <input 
                type="text"
                placeholder="E.g., crossover, specific artifact, custom tag..."
                className="w-full bg-slate-900 border border-slate-600 text-white rounded-xl p-4 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search Actions */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={generateAO3Link()} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#900000] hover:bg-[#a60000] text-white py-4 px-6 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Search on AO3 <ExternalLink size={20} />
              </a>
              <a 
                href={generateFFNLink()} 
                target="_blank" 
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#333399] hover:bg-[#4444cc] text-white py-4 px-6 rounded-xl font-bold text-lg transition-colors shadow-lg"
              >
                Search on FanFiction.net <ExternalLink size={20} />
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default App;