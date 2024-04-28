import React from "react";


export const Main = () =>{
        return(
         <div className="mx-96 mt-10"> 
                
            <div className="flex   text-[#4F6F52] items-center justify-between" >
                <span className="font-bold text-2xl">New releases</span>
                <span className=" underline underline-offset-4">View all</span>            
            </div>
            {/* Place holder until we can generate actual dynamic data */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
  <div className="bg-gray-100 p-4">Item 1</div>
  <div className="bg-gray-100 p-4">Item 2</div>
  <div className="bg-gray-100 p-4">Item 3</div>
  <div className="bg-gray-100 p-4">Item 4</div>
  <div className="bg-gray-100 p-4">Item 5</div>
  <div className="bg-gray-100 p-4">Item 6</div>
  <div className="bg-gray-100 p-4">Item 7</div>
  <div className="bg-gray-100 p-4">Item 8</div>
</div>


        </div>
           
            
        );
}