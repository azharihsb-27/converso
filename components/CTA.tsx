import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice, & personality - and start learning through
        voice conversation that feels natural and fun
      </p>
      <Image src="/images/cta.svg" alt="CTA" width={362} height={232} />
      <Button>
        <Image src="/icons/plus.svg" alt="Plus" width={12} height={12} />
        <Link href="/companion/new">
          <p>Build a New Companion</p>
        </Link>
      </Button>
    </section>
  );
};

export default CTA;
