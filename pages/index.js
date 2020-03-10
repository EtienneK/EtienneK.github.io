import Head from 'next/head'

const Home = () => (
  <div className="container">
    <Head>
      <title>etiennek.com - The personal website of Etienne Koekemoer.</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to <a href="https://www.etiennek.com">etiennek.com</a>.
      </h1>

      <p className="description">
        The personal website of Etienne Koekemoer.
      </p>

      <a href="/cv.pdf" className="card card-hover">
        <h3>Download my Curriculum Vitae &rarr;</h3>
      </a>

      <div className="card">
        <h3>About Me</h3>
        <p>Hi there! My name is Etienne Koekemoer and this is my personal website.</p>
        <p>I am the proud father of two gorgeous daughters and the loving husband of a beautiful wife.</p>
        <p>Most of my professional career has been spent designing and building Information Technology systems, primarily in the Banking domain. Crafting systems and applications that make peoples' lives better is my passion.</p>
        <p>In my spare time, I like to code and work on a few personal projects. You can see most of these personal projects of mine on my <a href="https://github.com/EtienneK">Github</a> page.</p>
        <p>I am also an avid Gamer and enjoy Video- as well as Board games. You can view my <a href="https://boardgamegeek.com/user/EtienneK">current collection of board games on BoardGameGeek.com</a>.</p>

        <h4>Follow me</h4>
        <p>Some ways you can follow me around the web:</p>
        <ul>
          <li><a href="https://www.linkedin.com/in/etiennekoekemoer">LinkedIn</a> - Add me to your professional network</li>
          <li><a href="https://github.com/EtienneK">Github</a> - See some of my code</li>
          <li><a href="mailto:me@etiennek.com">Email</a> - Send me an email</li>
        </ul>
      </div>

    </main>

    <footer>
      <a href="https://www.etiennek.com">etiennek.com</a>&nbsp;- The personal website of Etienne Koekemoer.
    </footer>

    <style jsx>{`
      .margin-0 {
        margin: 0 !important;
      }
  
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: #0070f3;
        text-decoration: none;
      }

      a:hover,
      a:focus,
      a:active {
        text-decoration: underline;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      li {
        line-height: 1.5;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
        width: 600px;
      }

      .card-hover {
        color: #0070f3;
      }

      .card-hover:hover,
      .card-hover:focus,
      .card-hover:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 0 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 1rem 0 0 0;
        font-size: 1rem;
        line-height: 1.5;
      }

      @media (max-width: 700px) {
        .card {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
