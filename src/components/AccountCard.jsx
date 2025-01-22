// import { Link } from 'react-router-dom';

// const AccountCard = ({ account }) => {
//     if (!account || !account.image || !account.name) {
//         console.error('Invalid account data:', account);
//         return <p>Invalid data</p>;
//       }

//       const handleBackClick = () => {
//         window.location.href = '/accounts'; // Navigate to /accounts and refresh the page
//       };
       
//   return (
//     <div className="card flex justify-center items-center p-4">
//       <div className="max-w-3xl shadow-md rounded-lg" >
//         <div className="flex flex-col items-center p-4">
//           <img
//             src={account.image}
//             alt={account.name}
//             className="card-img-top w-full h-40  rounded-md mb-4"
//           />
//           <div className='card-body'>
//             <h2 className="card-title text-lg font-bold">{account.name}</h2>
//             <p className='card-text'>{account.intro}</p>
//             <div className="mt-2 flex justify-between">
//               <Link
//                 to={`/details/${account.id}`}
//                 className="text-blue-500 hover:underline"
//               >
//                 View Details
//               </Link>
//               <Link onClick={handleBackClick} className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none' >Back</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountCard;  