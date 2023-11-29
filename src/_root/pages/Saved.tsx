/* eslint-disable @typescript-eslint/no-explicit-any */

import GridPostList from "@/components/shared/GridPostList";
import Loader from "@/components/shared/Loader";
//import { useGetSavedPosts } from "@/lib/react-query/queriesAndMutations";
import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
import { Models } from "appwrite";



const Saved = () => {
  const {data: currentUser} = useGetCurrentUser();

 const savedPosts = currentUser?.save.map((savePost: Models.Document) => ({
  ...savePost.post,
  creator: {
    imageUrl: currentUser.imageUrl
  },
 }))
 .reverse();
  
  
  return (
    <div className='explore-container'>
      <div className='explore-inner_container'>
        <div className='max-w-5xl flex-start gap-3 justify-start w-full'>
          <img src='/assets/icons/save.svg' width={36} height={36} alt='saved' />
          <h2 className='h3-bold md:h2-bold text-left w-full'>Saved Posts</h2>
        </div>
        <div className=' w-full max-w-5xl mt-4 mb-7 lg:flex-between'>
          <div className="flex flex-1 gap-2">
            <div className="flex-center gap-3 bg-dark-3 rounded-md px-4 py-2 cursor-pointer">
            <img src='/assets/icons/posts.svg' width={20} height={20} alt='filter' />
              <p className="small-medium md:base-medium text-light-2">Posts</p>
             
            </div>
            <div className="flex-center gap-3 bg-dark-3 rounded-md px-4 py-2 cursor-pointer">
            <img src='/assets/icons/people.svg' width={20} height={20} alt='filter' />
              <p className="small-medium md:base-medium text-light-2">Reels</p>
             
            </div>
            <div className="flex-center gap-3 bg-dark-3 rounded-md px-4 py-2 cursor-pointer">
            <img src='/assets/icons/bookmark.svg' width={20} height={20} alt='filter' />
              <p className="small-medium md:base-medium text-light-2">Collections</p>
             
            </div>

          </div>
          <div className="flex-center gap-3 bg-dark-3 rounded-md px-4 py-2 mt-2 lg:mt-0 cursor-pointer">
          <p className="small-medium md:base-medium text-light-2">All</p>
            <img src='/assets/icons/filter.svg' width={20} height={20} alt='filter' />
  
             
            </div>

        </div>

        {!currentUser ? (
          <Loader />
        ) : (
          <ul className="w-full flex justify-center text-center gap-9">
            {savedPosts.length === 0 ? (
              <p className="text-light-4">No available posts</p>
            ) : (
              <GridPostList posts={savedPosts} showStats={false} />
            )}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Saved


// /* eslint-disable @typescript-eslint/no-explicit-any */
// import GridPostList from "@/components/shared/GridPostList";
// import Loader from "@/components/shared/Loader";
// import { useGetCurrentUser } from "@/lib/react-query/queriesAndMutations";
// import { Models } from "appwrite";

// const Saved = () => {
//   const { data: currentUser, isLoading } = useGetCurrentUser();

//   const savedPosts = currentUser?.save?.map((savePost: Models.Document, index: number) => ({
//     ...savePost.post,
//     creator: {
//       imageUrl: currentUser.imageUrl
//     },
//     // Assuming you want to use the 'index' as the unique key for each GridPostList item
//     key: index.toString(),
//   })).reverse();

//   return (
//     <div className='explore-container'>
//       {/* ... Rest of your JSX */}
//       {isLoading ? (
//         <Loader /> // Show a loader while data is being fetched
//       ) : (
//         <ul className="w-full flex justify-center text-center gap-9">
//           {savedPosts && savedPosts.length > 0 ? (
//             savedPosts?.map((post:any) => (
//               <GridPostList key={post.key} posts={savedPosts} />
//             ))
//           ) : (
//             <p className="text-light-4">No available posts</p>
//           )}
//         </ul>
//       )}
//     </div>
//   );
// };


