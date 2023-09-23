import { sortBlogs } from "@/src/utils";
import Image from "next/image";

function HomeCoverSection({ blogs }) {
  const sortedBlogs = sortBlogs(blogs);
  const blog = sortedBlogs[1];
  console.log(`sorted: ${blog}`);
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh] ">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-black rounded-3xl z-0" />
        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />
      </article>
    </div>
  );
}

export default HomeCoverSection;
