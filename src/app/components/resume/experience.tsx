import React from "react";

export default function Experience(){
    return(
        <div className="p-1">
            <h5 className="mb-2 text-m font-bold tracking-tight">Experience</h5>
            <hr className="h-px my-8 bg-black border-0 separator mt-0 mb-0" />
            <div className="mb-3 font-normal">
                <strong>Company Title</strong>
                <p className="text-sm font-light">Job Title</p>
                <p className="text-sm font-light italic">June 2023 - September 2023</p>
                <p className="text-sm font-light font">
                    Job experience description</p>
            </div>
        </div>       
    );
}