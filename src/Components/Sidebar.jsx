import { Link } from "react-router-dom";

export const Sidebar = () => {

  return (
    <>
    <aside className='fixed top-0 left-0 max-w-[240px] w-full min-h-[100vh]  px-4 shadow-2xl bg-white py-3'>
        <div className="py-5 min-h-[80vh]">
            <h2 className='text-2xl px-2 mb-10 font-bold italic'>
              <Link to="/">LODGN</Link> 
            </h2>

            <nav className="my-5">
              <div className="py-4 border-bottom">
                  <Link to="/requests" 
                  className="active font-semibold"
                  >Current Requests</Link>
              </div>

              <div className="py-3 border-bottom hover:text-secondary">
                  <Link to="/ongoingStays" 
                  className="font-semibold"
                  >Ongoing Stays</Link>
              </div>

              <div className="py-3 border-bottom hover:text-secondary">
                  <Link to="/previousStays" 
                  className="font-semibold"
                  >Previous Stays</Link>
              </div>

              <div className="py-3 border-bottom hover:text-secondary">
                  <Link to="/reports" 
                  className="font-semibold"
                  >Reports</Link>
              </div>
            </nav>

        </div>
        <div className='flex items-center justify-center gap-1 w-[90%] mx-auto flex-col'>
            <button className='py-3 px-5 w-full bg-primary rounded-md cursor-pointer text-white'>Logout</button>
            <p className="text-sm text-txt">help desk</p>
            <p className="text-sm text-txt">786-874-9988</p>
        </div>
    </aside>
    </>
  )
}
