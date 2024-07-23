import Layout from '../components/Layout'
import Logo from "../components/Logo"
import Section from "../components/Section"
import Head from "next/head"
import YellowHeroInner from "../components/HeroInner/YellowHeroInner";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>    
      <Layout
        heroContent={
          <YellowHeroInner>
            <div>
              <h1>2022 - Free Election In The Polling Stations!</h1>
            </div><br />
            <div>
              <h2>20k22 - 20,000 Delegated Poll-Watchers in ‘22</h2>
            </div>
          </YellowHeroInner>
        }>
        <Section>
          <Logo width={192} />
        </Section>
        <Section>
          <h2>We Are Here To Assure Free Elections</h2>

          <h3>What We Are Facing</h3>
          <p>In Hungary, the principle of democratic elections - that they should be free and fair -is openly challenged. Critics claim freedom of the elections is undermined by multiple factors. Voters are pressed to“vote correctly”, data is illegally leaked, extra voters are mobilised where needed, suspiciously many invalid votes turn up or votes go missing in key districts.</p>
          <p>The Hungarian electoral system appoints poll counting agents (tellers) - nominated by the local Electioral Commission (practically by the local municipality). Their impartiality is not guaranteed as they may directly or indirectly depend on the local authorities. Beside the official appointees there are counting agents delegated by individual candidates or political parties, who have the right to delegate up to 2 such agents each. If multiple political parties run in a coalition they can jointly delegate at most 2 tellers to each polling station. Civil organizations do not have any right to delegate tellers unless they are nominating organizations themselves.</p>
          <p>In the last parliamentary elections, the Hungarian opposition parties failed to delegate enough counting agents. According to the data of the National Electoral Commission (NVI) 40 % of the polling stations did not have enough agents delegated by any of the opposition parties.</p>


          <h3>Our Mission</h3>
          <p>The 2022 Hungarian Parliamentary Elections will have 10.285 polling stations throughout the country. Acting on the mandate of the opposition parties, our mission is  to make sure that two tellers are delegated to oversee conduct of the poll at each polling stations to ensure the freedom, fairness, accuracy and impartiality of the election.</p>
          <p>This is why we launched the <strong>20k22 Mission</strong>.</p>
          <p>20k22 aims to recruit and allocate more than 20,000 well-prepared, trained and impartial vote counting tellers to the polling stations, covering the entire country.</p>
          <p>We have experience in organizing delegates. But the upcoming 2022 general elections will be the most challenging one.</p>

          <h3>How We Work</h3>
          <p>To fullfill our mission we need a professional organization and special set of skills. Therefore, we have built a well-structured organization.</p>


          <h4>The Core Team</h4>
          <p>Core Team members (100+) are seasoned volunteer experts with the know-how to execute such a complex project. The Core Team writes and operates processes, builds communications and establishes links to relevant civil organizations and political parties.</p>

          <h4>20k</h4>
          <p>20,000 tellers are to be recruited, trained and deployed nationwide. They are the key to reaching our goal; truly free and fair elections at the polling stations.</p>


          <h3>Work To Be Done</h3>
          <p>Currently, we have over 100 talented and enthusiastic volunteer experts in the team who have elaborated most of the relevant  processes, are implementing them and refining them where needed. </p>

          <h3>What We Need</h3>
          <p>We rely on voluntary participation. </p>
          <p>However, there obviously are operational expenses to meet:</p>
          <ol>
            <li>Staff related expenses to pay for 2-3 full time organizers, so that our goals can be executed seamlessly and at the highest quality. </li>
            <li>Logistics - travel and accommodation costs</li>
            <li>Expenses related to mass-training either on-line or on-site the 20k+ tellers</li>
            <li>Call centers to support operative teams and tellers</li>
            <li>IT cost (servers, app development, etc.) </li>
            <li>Recruiting expenses: online advertisement costs</li>
          </ol>

          <h4>Going Further</h4>
          <p>The Hungarian election system uses a compensational votes list, allocating non-winning votes not only to losing candidates but also to the winner. This makes every vote valuable, regardless of which party is predicted to win. Our mission aims to increase both the integrity as well as the fairness and the freedom of the elections. Overseeing the election process will also help re-establish broad trust in the elections and enhance the mandate of the winning political party or candidate.</p>
          </Section>
      </Layout>
    </>
  )
}

export default AboutUsPage
