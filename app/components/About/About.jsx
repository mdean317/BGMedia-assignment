'use client'
import NavBar from '../NavBar/NavBar';


export const metadata = {
  title: 'About Secco',
  description: `Learn Secco's Story`,
}

export default function About() {

  return (
    <>
    <header>
      <NavBar> </NavBar>
    </header>
      <main className="justify-items-center">
        <article className='w-[60vw] grid'>
          <h1 className='h1-primary'>About Us</h1>
          <p className='p-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
  proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing
  elit. Vivamus luctus urna sed urna ultricies ac tempor dui sagittis. In condimentum facilisis porta. Sed nec diam eu diam
  mattis viverra. Nulla fringilla, orci ac euismod semper, magna diam porttitor mauris, quis sollicitudin sapien justo in libero..</p>
        </article>
      </main>
    </>
  );
}
