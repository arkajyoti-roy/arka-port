
// import Timeline from "./Timeline";


const Edu = () => {
 
  return (
    <div id='edu'>
        <div className="justify-center text-center">
        <h1 className="text-5xl font-semibold text-black">Education</h1>
        <h3>My Educational details</h3>
      </div>
      

      <div className="p-4">
    <div className="flex flex-col grid-cols-9 p-2 mx-auto md:grid">
        <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">Schooling (2009-2021)</h3>
                <p className="mt-2 leading-6">Done my schooling from Udaipur English Medium H.S School.</p>
                {/* <span className="absolute text-sm text-gray-800/75 -top-5 left-2 whitespace-nowrap">Date 1</span> */}
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-gray-700 rounded-t-full bg-gradient-to-b from-gray-800 to-gray-700"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-700 rounded-full top-1/2"></div>
            </div>
        </div>

        <div className="flex md:contents">
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-gray-700"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-700 rounded-full top-1/2"></div>
            </div>
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-6 col-end-10 mr-auto">
                <h3 className="text-lg font-semibold lg:text-xl">Diploma in Computer Science & Technology (2021-2024)</h3>
                <p className="mt-2 leading-6">Persuied diploma in Computer Science & Technology from Gomati District Polytechnic, Fulkumari Tripura </p>
                {/* <span className="absolute text-sm text-gray-100/75 -top-5 left-2 whitespace-nowrap">Date 2</span> */}
            </div>
        </div>

        <div className="flex md:contents flex-row-reverse">
            <div className="relative p-4 my-6 text-gray-800 bg-white rounded-xl col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <h3 className="text-lg font-semibold lg:text-xl">B.Tech in CSE.</h3>
                <p className="mt-2 leading-6">Currently persuing my bachelor degree from Techno Collage of Engineering, Agartala Tripura.</p>
                <span className="absolute text-sm text-gray-100/75 -top-5 left-2 whitespace-nowrap">Date 3</span>
            </div>
            <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                    <div className="w-1 h-full bg-gray-700 rounded-t-full bg-gradient-to-b from-gray-800 to-gray-700"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white border-4 border-gray-700 rounded-full top-1/2"></div>
            </div>
        </div>
    </div>
</div>




<br />
<br />
<br />

    </div>

  );
};
export default Edu;