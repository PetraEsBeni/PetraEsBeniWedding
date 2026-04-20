import React from 'react';
import './MenuDetails.css';

export const MenuDetails: React.FC = () => {
  return (
    <section className="menu-details">
      <div className="menu-title">Esküvői menü</div>

      <div className="menu-grid">
        <div className="menu-column menu-foods">
          <div className="column-title">Ételek</div>
          <div className="food-row">
            <div className="food-card">
              <div className="food-card-title">Levesek</div>
              <p>Tanyasi aranyló tyúkhúsleves saját husával, zöldségekkel, házi csigatésztával és májas töltelékkel</p>

              <div className="food-card-title">Főételek</div>
              <p>Kemencés konfitált disznóságok fokhagymás pecsenyelével nyakon öntve
                <span className="small-break"></span>
             Csirkemell talján módra kemencében lesütve
             <span className="small-break"></span>
             Házi morzsában bundázott sertés szelet baconnel és füstölt sajttal töltve</p>
            </div>

            <div className="food-card">
              <div className="food-card-title">Köretek</div>
              <p>Házi héjas steakburgonya <br/> Párolt jázmin rizs <br/> Párolt zöldség</p>

              <div className="food-card-title">Savanyúságok</div>
              <p>Házi káposztasaláta, Csemegeuborka</p>

              <div className="food-card-title">Éjféli vacsora</div>
              <p>Töltött káposzta</p>
            </div>
          </div>
        </div>

        <div className="menu-column menu-drinks">
          <div className="column-title">Italok</div>
          <div className="food-row">
            <div className="food-card">
              <div className="food-card-title">Alkoholmentes italok</div>
              <p>
                Szénsavmentes ásványvíz<br/>
                Szénsavas ásványvíz<br/>
                Szóda<br/>
                Tonik, Fanta<br/>
                Cola, Zero Cola<br/>
                Sió őszibarack<br/>
                Borsodi Zero Citrom<br/>
                Hell original<br/>
                Kávé, Cappuccino
              </p>
            </div>

            <div className="food-card">
              <div className="food-card-title">Alkoholos italok</div>
              <p>
                Sörök:<br/> csapolt Staropramen, meggysör
                <span className="small-break"></span>
                Borok:<br/> Irsai Olivér (száraz fehér)<br/>  Mátrai Kékfrankos (száraz rosé)<br/> Mátrai Cabernet Sauvignon (száraz vörös)
                <span className="small-break"></span>
                Rövid italok:<br/> Házi pálinka (szilva, irsai szőlő)<br/>  Unicum, Finlandia, Gin, Tequila, Jack Daniels
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;