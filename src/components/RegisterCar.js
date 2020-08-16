import React from "react";
import RegForm from "./RegForm";
export default function RegisterCar() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>Kjøp bilforsikring </h1>
      </header>
      <p>
        Lorem Ipsum er rett og slett dummytekst fra og for trykkeindustrien.
        Lorem Ipsum har vært bransjens standard for dummytekst helt siden
        1500-tallet, da en ukjent boktrykker stokket en mengde bokstaver for å
        lage et prøveeksemplar av en bok.
      </p>
      <RegForm />
    </div>
  );
}
