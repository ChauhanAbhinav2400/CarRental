import React, { useEffect, useState } from 'react';
import CompanyInfo from './CompanyInfo';
import ContactForm from './ContactForm';
import withTokenHandler from '../globalTokenGenerated';

function Maincontact({Token}) {

  


   

    return (
        <>
            <div className="mx-auto max-w-7xl mt-25 mb-50">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-4">
                        <CompanyInfo/>
                    </div>
                    <div className="p-4">
                        <ContactForm Token={Token} />
                    </div>
                </div>
            </div>
        </>
    );
}




export default Maincontact
