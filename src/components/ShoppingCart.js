// // components/ShoppingCart.js
// import React from 'react';

// const ShoppingCart = ({ items, onClose, onCheckout }) => {
//   return (
//     <div className="fixed inset-0 overflow-hidden z-50">
//       {/* Add your overlay or backdrop here */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>

//         <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
//           <div className="relative w-screen max-w-md">
//             <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
//               <div className="p-6">
//                 <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
//                 {/* Display your cart items here */}
//                 {items.map((item, index) => (
//                   <div key={index} className="flex justify-between mt-4">
//                     <p>{item.name}</p>
//                     <p>${item.price}</p>
//                   </div>
//                 ))}
//               </div>
//               <div className="p-6">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onCheckout}>
//                   Checkout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;
