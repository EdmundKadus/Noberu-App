import React from "react";



export const Navbar = () =>{
    return(
        <nav className="bg-[#1A4D2E]  p-4 text-[#E8DFCA]  ">
            <div className="flex items-center justify-between mx-10">
                <h1 className="font-bold text-2xl mx-5"><a href="">NOBERU</a>!</h1>
                           <input type="search"
    className="m-0  rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
    placeholder="Search by book title, author or series"
    aria-label="Search"
    id="exampleFormControlInput4"
  />
                <div className="flex flex-col" >                   
                    <a href="">Create Account</a>
                    <span className=" text-xs">Have an account? <a className=" underline" href="">Sign in</a></span>
                </div>
            </div>
        </nav>
        
    )
}


