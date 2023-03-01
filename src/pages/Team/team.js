import "./team.css";

import Button from "../../components/button/button";
export default function Team() {
  return (
    <main id="team">
      <h1>
        We bring a wealth of skills and experience from a wide range of
        backgrounds.
      </h1>
      {/* <p>
        Kijani Africa was founded by Andreen Muchiri and Enock Mokua with a
        shared vision to create innovative solutions that solve real-world
        problems. Our team may be small, but we are passionate about delivering
        exceptional products and services to our clients.
      </p> */}

      <section id="team-containers">
        <div className="team-container">
          <img src="#" alt="headshot" className="team-container-image" />
          <span className="team-container-info">
            <h3>Andreen Muchiri</h3>
            <p>Co-Founder & CEO</p>
          </span>
        </div>

        <div className="team-container">
          <img src="#" alt="headshot" className="team-container-image" />
          <span className="team-container-info">
            <h3>Enock Mokua</h3>
            <p>Co-Founder & COO</p>
          </span>
        </div>
      </section>
    </main>
  );
}
