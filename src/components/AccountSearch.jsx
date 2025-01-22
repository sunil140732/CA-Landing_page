// import { useEffect, useState } from 'react';
// import SearchBar from './SearchBar';
// import axios from 'axios';

// const AccountSearch = () => {
//   const [accounts, setAccounts] = useState([]); 
//   const [filteredAccounts, setFilteredAccounts] = useState([]); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     // Fetch accounts from the API on component mount
//     const fetchAccounts = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/accounts'); 
//         setAccounts(response.data);
//         setFilteredAccounts(response.data); 
//       } catch (err) {
//         console.error('Error fetching accounts:', err);
//         setError('Failed to fetch accounts. Please try again later.');
//       }
//     };

//     fetchAccounts();
//   }, []);

//   const handleSearch = (query) => {
//     const results = accounts.filter((account) =>
//       account.name.toLowerCase().includes(query.toLowerCase())
//     );
//     setFilteredAccounts(results);
//   };

//   return (
//     <div className="p-4">
//       <SearchBar onSearch={handleSearch} />
//       {error && <p className="text-red-500">{error}</p>}
//       <div className="mt-4">
//         <h2 className="text-lg font-bold">Search Results:</h2>
//         {filteredAccounts.length > 0 ? (
//           <ul className="list-disc pl-6">
//             {filteredAccounts.map((account) => (
//               <li key={account.id} className="text-md">
//                 {account.name}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No results found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AccountSearch;
