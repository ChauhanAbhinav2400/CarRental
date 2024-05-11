import React from 'react';

function Overpatner() {
    return (
        <div>
            <section className='bg-white overflow-hidden'>
                <div>
                    {/* <div className='text-center text-gray-700 text-xl font-sans my-10'>
                        <h2>Our Partners</h2>
                    </div> */}
        <div className=" text-center p-0 text-3xl font-bold mt-[12px]  mb-[10px]  font-serif  text-[#526977]">
          <h2>Our Partners</h2>
        </div>

                    <div className="flex flex-wrap justify-content">
                        <div>
                            <a href="https://garvitcabs.online/">
                                <div className="border border-gray-200 text-center rounded-lg mb-10 mt-5 h-auto flex ml-7.5 items-center p-5 transition-all ease-in-out cursor-pointer mx-2">
                                    <img className="img-fluid" src="https://alxtrip.b-cdn.net/vendor/5F226CCC/290x88/5F226CCD-MicrosoftTeams-image-(3).png" alt="Garvit Cabs" width="161" height="90"/>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://vaishnavmotors.online/">
                                <div className="border border-gray-200 text-center rounded-lg mb-10 mt-5 h-auto flex ml-7.5 items-center p-5 transition-all ease-in-out cursor-pointer mx-2">
                                    <img className="img-fluid" src="https://alxtrip.b-cdn.net/vendor/7C148CFE/290x88/7C148CFF-MicrosoftTeams-image-(4).png" alt="Vaishnav Motors" width="161" height="90"/>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Overpatner;
