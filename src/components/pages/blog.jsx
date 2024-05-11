import Footer from "../footer/footer";
import blog from "../../ImagesFile/blog.png";
import { useParams } from "react-router-dom";

function Blog() {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <div className="h-auto w-full">
        <div className="h-[550px] w-full relative">
          <div className="h-full w-full absolute">
            <img className="h-full w-full" src={blog} />
          </div>

          <div className="h-full w-full absolute bg-[#112E3BD8] flex justify-center items-center">
            <div className=" h-[200px] w-[90%] text-white  flex flex-col justify-center items-center space-y-4">
              <h2 className="text-3xl font-bold">Blog Details</h2>
            </div>
          </div>
        </div>
        <div className="h-[90%] w-[85%]"></div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
