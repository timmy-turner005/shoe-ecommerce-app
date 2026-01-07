// import Image from "next/image";
// import Link from "next/link";

// export const metadata = {
//   title: "Products — Leather Shop",
//   description: "Browse our premium shoe collection.",
// };

// export default function ProductsPage() {
//   const products = [
//     {
//       id: 1,
//       name: "Classic Oxford",
//       price: "$129",
//       image: "https://picsum.photos/seed/oxford/800/600",
//     },
//     {
//       id: 2,
//       name: "Casual Loafer",
//       price: "$99",
//       image: "https://picsum.photos/seed/loafer/800/600",
//     },
//     {
//       id: 3,
//       name: "Sport Runner",
//       price: "$149",
//       image: "https://picsum.photos/seed/runner/800/600",
//     },
//     {
//       id: 4,
//       name: "Chelsea Boot",
//       price: "$159",
//       image: "https://picsum.photos/seed/chelsea/800/600",
//     },
//     {
//       id: 5,
//       name: "Desert Boot",
//       price: "$119",
//       image: "https://picsum.photos/seed/desert/800/600",
//     },
//     {
//       id: 6,
//       name: "Slip-On Sneaker",
//       price: "$89",
//       image: "https://picsum.photos/seed/slipon/800/600",
//     },
//   ];

//   return (
//     <div className="app-container py-12">
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold">Products</h1>
//         <Link href="/" className="text-sm text-gray-600 hover:text-[#673147]">
//           Back to Home
//         </Link>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {products.map((p) => (
//           <article
//             key={p.id}
//             className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
//           >
//             <div className="h-48 w-full overflow-hidden">
//               <img
//                 src={p.image}
//                 alt={p.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="p-4 flex-1 flex flex-col justify-between">
//               <div>
//                 <h2 className="text-lg font-medium text-gray-800">{p.name}</h2>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Premium leather build.
//                 </p>
//               </div>

//               <div className="mt-4 flex items-center justify-between ">
//                 <span className="text-[#C08081] font-semibold">{p.price}</span>
//                 <button className="bg-[#C08081] text-white px-3 py-1 rounded text-sm hover:bg-[#bb6a6c] cursor-pointer">
//                   View
//                 </button>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </div>
//   );
// }
