import { Layout } from "../components/layout";
import Section from "../components/Section";
import { ReferralBox } from "../components/ReferralBox";
import { Steps } from "../components/Steps";
import { StoresBar } from "../components/StoresBar";

export default function Home() {
  return (
    <>
      <div className="main-body">
        <Section>
          <div className="main-container">
            <ReferralBox />
            <Steps />
          </div>
        </Section>
      </div>
      <StoresBar />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
