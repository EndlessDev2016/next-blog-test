import { Fragment } from 'react';
import Image from 'next/image';

import classes from './hero.module.css';

function HeroPage() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/lee.png"
          alt="an image showing lee"
          width={300}
          height={300}
        />
      </div>
      <h1>Lee Next Blog :)</h1>
      <p>ほげ～(・∀・)</p>
    </section>
  );
}
export default HeroPage;
