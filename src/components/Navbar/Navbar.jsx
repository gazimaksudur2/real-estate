import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink className={({ isActive }) => isActive ? 'text-[#D74B76da] -my-2 px-2 py-1 border-b-4 border-[#D74B76] font-semibold text-lg' : 'font-medium text-sm'} to={'/'}>Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-[#D74B76da] -my-2 px-2 py-1 border-b-4 border-[#D74B76] font-semibold text-lg' : 'font-medium text-sm'} to={'/facilities'}>Facilities</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-[#D74B76da] -my-2 px-2 py-1 border-b-4 border-[#D74B76] font-semibold text-lg' : 'font-medium text-sm'} to={'/login'}>login</NavLink>
      <NavLink className={({ isActive }) => isActive ? 'text-[#D74B76da] -my-2 px-2 py-1 border-b-4 border-[#D74B76] font-semibold text-lg' : 'font-medium text-sm'} to={'/authenticate'}>Authenticate</NavLink>
    </>
  )

  return (
    <div className="w-[95%] mx-auto">
      <div className='navbar bg-[#FFAF45da] px-4 py-3 rounded-b-2xl'>
        <div className='navbar-start'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <h2 className='btn btn-ghost text-xl font-ubuntu'>Industria</h2>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 items-center gap-8 font-exo'>{navLinks}</ul>
        </div>
        <div className='navbar-end'>
          <Link to={'/authenticate'} className='btn bg-[#673F69ab] hover:bg-[#673F697a]  outline-none border-none'>LogIn</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
