import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>What the Hell is Gala?</title>
        <meta
          name="description"
          content="A guide to the Danish tradition of Gala."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-xl mx-auto my-12">
        <h1 className="text-3xl font-bold underline mb-2">
          What the hell is Gala?
        </h1>
        <h5 className="italic mb-2">From a Danish perspective</h5>
        <p>
          Gala is a festive celebration, usually marking a very special occasion
          and is in many regards very close to the American notion of a
          &quot;prom&quot;. In Denmark, a gala party is both held for the
          seniors at the end of High School, but can also be done at jubilees,
          fundraisers, royal events etc. In general, prom in the states and gala
          in Denmark are very much alike. This includes several traditions such
          as:
        </p>
        <ul className="list-disc pl-4">
          <li>Wearing one&apos;s finest attire</li>
          <li>Bringing a partner 👀</li>
          <li>Going a little too overboard in the punch</li>
          <li>Taking snazzy pictures</li>
        </ul>
        <p>In Denmark, we have one very unique twist to this.</p>
        <p className="mt-3">
          Every hour for the entire party, we dance{' '}
          <span className="italic">les lanciers</span>.
        </p>
        <h2 className="mt-8 text-xl font-bold underline mb-2">Les Lancier</h2>
        <p>
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Les_Lanciers"
          >
            Les Lancier
          </a>{' '}
          is a form of formal square dance, that is danced at Danish gala
          parties. Almost all Danes are taught this dance some time through
          their schooling, most often in high school, although it might be a
          little rusty for most. It is danced in sets of four couples, each with
          a &quot;leader&quot; and a &quot;follower&quot;, and consists of five
          different acts.
        </p>
        <br />
        <p>
          You can listen to the music that is always used for les lanciers{' '}
          <a className="underline" href="https://youtu.be/D_H_OrDzs1g">
            here
          </a>
        </p>
        <p>
          You can learn how to dance it{' '}
          <a className="underline" href="https://youtu.be/o98mhPIypEA">
            here
          </a>{' '}
          (for the party at Mønten Kollegium, we will do dance classes
          beforehand. Otherwise, you&apos;ll pick it up quickly!)
        </p>
        <p>
          And if you want to learn from the very best, you can see how her
          Majesty does it{' '}
          <a className="underline" href="https://youtu.be/RELFdoIoSOE">
            here
          </a>
          .
        </p>
        <br />
        <p>
          Since almost everyone is taught the dance in Denmark during their
          schooling, there are plenty of regional variances in how we learnt it.
          Part of the fun is trying to make the dance work anyway.
        </p>
        <p>Have fun!</p>
      </main>
    </div>
  );
};

export default Home;
