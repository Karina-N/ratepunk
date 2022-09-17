import { Layout } from "../components/layout";

import { ReferralBox } from "../components/ReferralBox";
import { Steps } from "../components/Steps";
import { StoresBar } from "../components/storesBar";

export default function Home() {
  return (
    <>
      <div className="main-body">
        <ReferralBox />
        <Steps />
      </div>
      <StoresBar />
    </>
  );
}
Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
