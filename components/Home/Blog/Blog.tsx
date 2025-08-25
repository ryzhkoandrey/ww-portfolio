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
            <div data-aos="fade-right" data-aos-anchor-placement="top-center">
               <BlogCard
                  image="/images/b1.jpg"
                  title="Learn how to build an amazing portfolio website using next js"
               />
            </div>

            {/* POST 2 */}
            <div
               data-aos="fade-right"
               data-aos-anchor-placement="top-center"
               data-aos-delay="100"
            >
               <BlogCard
                  image="/images/b2.jpg"
                  title="Learn how to build an amazing portfolio website using next js"
               />
            </div>

            {/* POST 3 */}
            <div
               data-aos="fade-right"
               data-aos-anchor-placement="top-center"
               data-aos-delay="200"
            >
               <BlogCard
                  image="/images/b3.jpg"
                  title="Learn how to build an amazing portfolio website using next js"
               />
            </div>
         </div>
      </div>
   );
};

export default Blog;
