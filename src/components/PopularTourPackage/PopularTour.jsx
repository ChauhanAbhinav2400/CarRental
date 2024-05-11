import Tour from "./PopularTour/tour";


function PopularTour({Token}) {
     

    return (
        <div className="h-auto w-full flex justify-center items-center">
            <section className='h-[90%] w-[90%] my-10'>
                <div className='h-auto w-full text-center'>
                           
                                <h6 className="text-4xl font-bold text-gray-800">Popular Tour Package</h6>
                                <h5 className='text-[16px] font-[400] text-[#4a5f6d] my-[10px]'>Experience the royalty of Rajasthan on a tour with your family. Known for its rich history and regal heritage, Rajasthan continues to exude a grandeur that is unparalleled. Embark on a journey to explore the royal state and indulge in its majestic charm.</h5>
                               
                           
                </div>
                <div className="h-auto w-full">

                    <Tour Token={Token}/>
                </div>
            </section>
        </div>
    );
}

export default PopularTour;