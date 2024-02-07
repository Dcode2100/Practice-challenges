/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactEventHandler, useEffect, useState } from 'react'
import './App.css'
const data = 
  [
    "Google",
    "Googleerinthecoean",
    "GoogleIssueinthepart",
    "Type",
    "Ahead",
    "Machine",
    "Coding",
    "Dummy",
    "Data",
    "Search",
    "Algorithm",
    "Suggestion",
    "Query",
    "Autocomplete",
    "Prediction",
    "Programming",
    "Development",
    "Software",
    "Framework",
    "React",
    "Node.js",
    "Express",
    "Flutter",
    "Database",
    "Oracle",
    "Frontend",
    "Backend",
    "API",
    "JavaScript",
    "HTML",
    "CSS"
  ];


  function App() {
    const [searchInput, setSearchInput] = useState("");
    const [suggestion, setSuggestion] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const abortController = new AbortController();
      const { signal } = abortController;
  
      const fetchData = async () => {
        setLoading(true);
        try {
          if (searchInput.length > 2) {
            const filteredData: string[] = data.filter((item) => item.toLowerCase().includes(searchInput.toLowerCase()))
            setSuggestion(filteredData);
            console.log(filteredData);
          }
          if (searchInput.length < 1 ) {
            setSuggestion([]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
  
      const timeoutId = setTimeout(() => fetchData(), 200); // Debouncing delay
  
      return () => {
        clearTimeout(timeoutId);
        abortController.abort(); // Cancel previous requests when a new search is initiated
      };
    }, [searchInput]);
  
    function typeAhead(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchInput(e.target.value);
    }
  
    return (
      <div className='flex flex-col gap-5'>
        <h1 className='text-5xl text-blue-800 font-medium'>GOOGLE</h1>
        <input
          className='bg-white border-2 border-gray-600 p-4 rounded-xl'
          value={searchInput}
          onChange={(e) => typeAhead(e)}
          placeholder='Search...'
        ></input>
  
        {loading && <p>Loading...</p>}
  
        {suggestion.length > 0 && (
          <ul>
            {suggestion.map((item, index) => (
              <li key={index} style={{}} onClick={() => setSearchInput(item)} >{item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
  
  export default App;
