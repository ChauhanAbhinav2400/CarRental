import News from "./News/news";


function NewsAndUpdates({Token}) {
      
    return (
        <div className="h-auto w-full flex justify-center items-center my-8">
            <section className='h-[90%] w-[90%] '>
                <div className="h-auto w-full text-center my-4">
                           
                                <h5 className="text-4xl font-bold text-gray-800">Explore Best Holiday Destinations</h5>
                                <h5 className='text-md font-semibold text-gray-500 my-4'>Experience the royalty of Rajasthan on a tour with your family. Known for its rich history and regal heritage, Rajasthan continues to exude a grandeur that is unparalleled. Embark on a journey to explore the royal state and indulge in its majestic charm.</h5>
                               
                            
                  

                </div>

                <div className="h-auto w-full my-4">

                     <News  Token={Token}/>
                </div>
            </section>
        </div>
    );
}

export default NewsAndUpdates;