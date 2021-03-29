import React from "react";
import Header from "../../components/Header/Header";
import Link from "../../components/Link/Link";
import "./Splash.css";

const Splash = () => {
  return (
    <main className="splash" data-testid="Splash">
      <Header title="Rumour Publisher" />
      <div className="container">
        <Link
          to="/create"
          label="Create new rumour"
          iconBefore="add"
          variant="primary"
        />
      </div>
    </main>
  );
};

export default Splash;
