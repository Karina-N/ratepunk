import styles from "./Steps.module.scss";
import { SingleStep } from "./SingleStep";

export function Steps() {
  const steps = [
    {
      id: "1",
      src: "/images/Invite Friends Img.svg",
      stepNo: "Step 1",
      title: "Invite Friends",
      description: "Refer friends with your unique referral link.",
    },
    {
      id: "2",
      src: "/images/Collect Coins Img.svg",
      stepNo: "Step 2",
      title: "Collect Coins",
      description:
        "Get 1 coin for each friend that installs our extension using your referral link.",
    },
    {
      id: "3",
      src: "/images/Get Voucher Img.svg",
      stepNo: "Step 3",
      title: "Get Voucher",
      description:
        "Redeem for a $20 hotel booking voucher once you collect 20 coins.",
    },
  ];

  return (
    <div className={styles.steps}>
      {steps.map((step) => {
        return (
          <SingleStep
            src={step.src}
            key={step.id}
            stepNo={step.stepNo}
            title={step.title}
            description={step.description}
          />
        );
      })}
    </div>
  );
}
