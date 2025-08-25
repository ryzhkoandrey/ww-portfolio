import BlogCard from './BlogCard';

const Blog = () => {
   return (
      <div className="p-16">
         {/* TITLE */}
         <h2 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white">
            My latest <span className="text-cyan-200">Blogs</span>
         </h2>

         {/* POSTS */}
         <div
            className="w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-3 xl:gap-4 gap-10
            items-center mt-16"
         >
            {/* POST 1 */}
            <BlogCard
               image="/images/b1.jpg"
               title="Learn how to build an amazing portfolio website using next js"
            />

            {/* POST 2 */}
            <BlogCard
               image="/images/b2.jpg"
               title="Learn how to build an amazing portfolio website using next js"
            />

            {/* POST 3 */}
            <BlogCard
               image="/images/b3.jpg"
               title="Learn how to build an amazing portfolio website using next js"
            />
         </div>
      </div>
   );
};

export default Blog;
