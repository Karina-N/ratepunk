import styles from "./StoresBar.module.scss";
import { SingleStore } from "./SingleStore";
import Section from "./Section";

export function StoresBar() {
  const stores = [
    {
      id: 1,
      src: "/images/Chrome Icon.svg",
      alt: "chrome web store icon",
      title: "chrome webs store",
      link: "https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk",
    },
    {
      id: 2,
      src: "/images/Apple Store Icon.svg",
      alt: "chrome web store icon",
      title: "apple app store",
      link: "https://apps.apple.com/app/ratepunk/id1607823726",
    },
  ];

  return (
    <div className={styles.storesBar}>
      <Section>
        <div className={styles.storesBarWrapper}>
          {stores.map((store) => {
            return (
              <SingleStore
                src={store.src}
                alt={store.alt}
                key={store.id}
                title={store.title}
                link={store.link}
              />
            );
          })}
          <div className={styles.reviewsStars}>
            <p>
              <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
              Chrome Store Reviews
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
