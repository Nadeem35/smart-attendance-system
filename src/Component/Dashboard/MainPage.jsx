
const MainPage = () => {
  return (
    <>

      {/* Main Content */}
      <main className="flex-1 p-2 overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">

          {/* Card-1 */}
          <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition-all duration-300 bg-linear-to-r from-indigo-400 to-indigo-200">
            <div className="w-1/2 ">
              <h3 className='font-semibold'> <span className='font-mono text-4xl'>11</span></h3>
              <p className='uppercase mt-3'>Classes</p>
            </div>
            <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
              <span className="text-indigo-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                library_books
              </span>
            </div>
          </div>

          {/* Card-2 */}
          <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition-all duration-300 bg-linear-to-r from-emerald-400 to-emerald-200">
            <div className="w-1/2 ">
              <h3 className='font-semibold'> <span className='font-mono text-4xl'>43</span></h3>
              <p className='uppercase mt-3'>Teachers</p>
            </div>
            <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
              <span className="text-emerald-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                person_add
              </span>
            </div>
          </div>

          {/* Card-3 */}
          <div className="bg-white flex h-32 py-5 px-10 rounded-3xl justify-between items-center shadow hover:scale-105 transition-all duration-300 bg-linear-to-r from-orange-400 to-orange-200">
            <div className="w-1/2 ">
              <h3 className='font-semibold'> <span className='font-mono text-4xl'>31</span></h3>
              <p className='uppercase mt-3'>Subjects</p>
            </div>
            <div className='w-18 h-18 flex justify-center items-center bg-amber-50 rounded-full'>
              <span className="text-orange-400 material-symbols-outlined" style={{ fontSize: "40px" }}>
                dictionary
              </span>
            </div>
          </div>

        </div>


        <h1 className='text-center mt-15 bg-black text-3xl text-red-400 p-3'>This is Main Dashboard</h1>
      </main >
    </>
  )
}

export default MainPage