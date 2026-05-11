import styles from "./AboutUsPage.module.css";

export const OurPartners = () => {
  // 🧑🏽‍🚀 Task - Week 1 [DONE]
  // Create the "Our Partners section".
  // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
  // Use the pictures from /public/business_partners.
  // Some inspiration ideas can be found in /data/inspiration_about_us.


  const partners = [

    {
      name: "alphabet",
      img: "/business_partners/alphabet-logo.png",
    },
    {
      name: "amazon",
      img: "/business_partners/amazon_logo.png",
    },
    {
      name: "CBC",
      img: "/business_partners/CBC_Logo_White.png",
    },
    {
      name: "Microsoft",
      img: "/business_partners/Microsoft-Logo-white.png",
    },
    {
      name: "nyu",
      img: "/business_partners/nyu-logo.png",
    },
    {
      name: "Queens",
      img: "/business_partners/QueensLogo_white.png",
    },
    {
      name: "samsung",
      img: "/business_partners/samsung-logo.png",
    },
    {
      name: "sodexo",
      img: "/business_partners/sodexo-logo.png",
    },
  ];

  return (

 <section>
      
      <div id= "description">
      <h4>We collaborate with some of the most respected names in the space and technology industries to make every journey extraordinary.</h4>
    </div>

    <div className={styles.container}>
            {partners.map((partner) => (
      <div className={styles.partnersCard} key={partner.name}>
                  <img src={partner.img} alt={partner.name} />
                  <h3>{partner.name}</h3>
                </div>
              ))}
            </div>

    </section>

  );
}