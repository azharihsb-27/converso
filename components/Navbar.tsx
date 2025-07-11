import Image from 'next/image';
import Link from 'next/link';
import NavItems from './NavItems';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2.5">
          <Image src="/images/logo.svg" alt="Logo" width={46} height={44} />
        </div>
      </Link>

      {/* Navigation Items */}
      <div className="flex items-center gap-8">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <Button className="btn-signin">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
