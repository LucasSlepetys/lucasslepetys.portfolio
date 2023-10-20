import React, { useState } from 'react';
import Wrapper from '../Wrappers/about';
import { Helmet } from 'react-helmet-async';

const About = () => {
  const [isExtra, setIsExtra] = useState(false);

  return (
    <Wrapper>
      <Helmet>
        <title>About</title>
        <meta
          name='description'
          content='A little about Lucas Rodrigues Slepetys.'
        />
        <link rel='canonical' href='/about' />
      </Helmet>

      <div className='center'>
        <div className='about-me'>
          <p onClick={() => setIsExtra(!isExtra)}>
            A <span className={!isExtra ? 'isSelected ' : ''}>little</span>/
            <span className={isExtra ? 'isSelected ' : ''}>lot </span>ABOUT ME
          </p>
          <div className='underline' />
        </div>
        {isExtra ? (
          <p className='text'>
            Prepare to dive into the whirlwind of my journey – a concoction of
            passions that blend Parkour, calisthenics, programming, and
            languages into a vibrant story. Hailing from Brazil, I've been
            soaking up the charm of Germany for 7 adventure-packed years. I'm a
            language chameleon, fluent in the lively tongues of Portuguese,
            Spanish, and English. And hey, let's not forget, I've added a
            sprinkle of German to my linguistic palette – because life's more
            fun with a multilingual twist! Talking about multilingal twist, in
            tech I'm the conductor of the Web Development symphony, waving my
            wand (or coding keyboard) to conjure digital wonders. My go to
            languages are Python and Javascript, to be specific React is my
            magic spell, crafting websites that are as user-friendly as a secret
            passage. Imagine creating a website that's the fitness-test
            headquarters for an IB program – yep, that's me! Turning ideas into
            reality? You bet! But wait, there's more. I'm like a code-cracking
            ninja, tackling complex challenges with the flair of a superhero.
            And speaking of superheroes, I've mastered calisthenics and parkout
            moves that would make even Spider-Man envious – muscle up, backflip,
            double backflip? front lever, human flag – you name it! Challenges?
            They're just my playground. As the sun sets on my tech exploits, the
            moon rises on my appetite for learning. Ever heard of machine
            learning and AI? They've got my attention, and I'm dancing my way
            into their world. Mix in some entrepreneurial spirit, and you've got
            a recipe for business experiments that might just change the game.
            So, what's my secret sauce? It's the zest for growth, the thrill of
            diversity, and the exhilaration of innovation. Each step is a chance
            to learn, evolve, and inspire. Join me in this adventure, where
            languages, cultures, and accomplishments collide in a symphony of
            boundless possibilities! Where do I see myself in 5 years? Buckle
            up, because it's a journey that's all about embracing the grind,
            regardless of the twists and turns that come my way. If the stars
            align and the universe nods in agreement, I'll be on a relentless
            pursuit of massive success in both my entrepreneurial ventures and
            my professional trajectory. Think of me as a determined explorer
            charting uncharted territories, leaving a trail of accomplishments
            in my wake. But hold on, what if the path isn't paved with roses? No
            worries, because if life throws curveballs, I'll just be grinding
            even harder. Challenges don't intimidate me; they're my catalysts
            for growth. Whether it's the smooth sail or the bumpy ride, I'm
            dedicated to wringing out success from every situation. Now, let's
            talk about a monumental milestone on my horizon. I've got my sights
            set on engineering university, and that's not just any university –
            it's in the vibrant city of Valencia, Spain. Why Spain? Because when
            it comes to learning the intricacies of Mechatronic Engineering with
            a foundation in Electrical and Industrial Automation Engineering,
            it's the perfect playground. Imagine me diving into the world of
            Mechatronics, combining mechanical wizardry with electronic finesse.
            Picture me unraveling the mysteries of automation, transforming
            industries with cutting-edge solutions. It's a journey that melds
            creativity, innovation, and technical prowess – all on the
            picturesque backdrop of Valencia. In the grand tapestry of my
            journey, these coming years are a canvas waiting to be painted with
            bold strokes of achievement, growth, and learning. So, fasten your
            seatbelt – because the road ahead is lined with dreams,
            determination, and a splash of daring adventure. With each step
            forward, I'm poised to embrace the challenges, seize the
            opportunities, and create a legacy that's nothing short of
            extraordinary.
          </p>
        ) : (
          <p className='text'>
            My professional life is a little strange – I'm a dynamic force
            blending the worlds of Parkour, Magic, gym/calisthenics, business
            and programming. From sunny to cold, with Brazilian roots and a
            German adventure spanning 7 years, I've got the cultural blend that
            spices up my story. You can catch me speaking the rhythms of
            Portuguese, Spanish, English, and even a dash of German! When I'm
            not crafting code with React for Web Development wizardry, I'm
            conquering calisthenics & parkour moves like a superhero. Challenges
            are my playmates, and I'm never one to turn down a chance to learn
            and conquer.
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default About;
