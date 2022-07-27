import React from 'react';
import Card from './Card';
import Viper from '../Agents/Viper.png';
import Jett from '../Agents/Jett.png';
import Phoenix from '../Agents/Phoenix.png';
import Sova from '../Agents/Sova.png';
import Brim from '../Agents/Brim.png';
import Sage from '../Agents/Sage.png';
import Reyna from '../Agents/Reyna.png';
import Skye from '../Agents/Skye.png';
import Yoru from '../Agents/Yoru.png';
import Astra from '../Agents/Astra.png';
import Breach from '../Agents/Breach.png';
import Raze from '../Agents/Raze.png';
import Chamber from '../Agents/Chamber.png';
import Neon from '../Agents/Neon.png';
import KAYO from '../Agents/KAYO.png';
import Killjoy from '../Agents/Killjoy.png';
import Cypher from '../Agents/Cypher.png';
import Omen from '../Agents/Omen.png';

const agents = (
  <>
    {/* JETT */}
    <Card
      cardName="Jett"
      cardDescription="Agente Rápido"
      cardClass="Duelista"
      cardAttr1={ 10 }
      cardAttr2={ 3 }
      cardAttr3={ 6 }
      cardRare="Normal"
      cardImage={ Jett }
    />
    {/* PHOENIX */}
    <Card
      cardName="Phoenix"
      cardDescription="Agente de Fogo"
      cardClass="Duelista"
      cardAttr1={ 4 }
      cardAttr2={ 2 }
      cardAttr3={ 8 }
      cardRare="Normal"
      cardImage={ Phoenix }
    />
    {/* SOVA */}
    <Card
      cardName="Sova"
      cardDescription="Agente com Arco"
      cardClass="Iniciador"
      cardAttr1={ 3 }
      cardAttr2={ 8 }
      cardAttr3={ 10 }
      cardRare="Normal"
      cardImage={ Sova }
    />
    {/* BRIMSTONE */}
    <Card
      cardName="Brimstone"
      cardDescription="Agente Chefe"
      cardClass="Controlador"
      cardAttr1={ 1 }
      cardAttr2={ 6 }
      cardAttr3={ 10 }
      cardRare="Normal"
      cardImage={ Brim }
    />
    {/* SAGE */}
    <Card
      cardName="Sage"
      cardDescription="Agente de Cura"
      cardClass="Sentinela"
      cardAttr1={ 4 }
      cardAttr2={ 6 }
      cardAttr3={ 10 }
      cardRare="Normal"
      cardImage={ Sage }
    />
    {/* Breach */}
    <Card
      cardName="Breach"
      cardDescription="Agente Robôtico"
      cardClass="Iniciador"
      cardAttr1={ 1 }
      cardAttr2={ 3 }
      cardAttr3={ 10 }
      cardRare="Normal"
      cardImage={ Breach }
    />
    {/* Raze */}
    <Card
      cardName="Raze"
      cardDescription="Agente de Explosão"
      cardClass="Duelista"
      cardAttr1={ 8 }
      cardAttr2={ 3 }
      cardAttr3={ 4 }
      cardRare="Normal"
      cardImage={ Raze }
    />
    {/* Viper */}
    <Card
      cardName="Viper"
      cardDescription="Agente de Veneno"
      cardClass="Controlador"
      cardAttr1={ 2 }
      cardAttr2={ 9 }
      cardAttr3={ 7 }
      cardRare="Normal"
      cardImage={ Viper }
    />
    {/* Reyna */}
    <Card
      cardName="Reyna"
      cardDescription="Agente Vampira"
      cardClass="Duelista"
      cardAttr1={ 3 }
      cardAttr2={ 5 }
      cardAttr3={ 10 }
      cardRare="Raro"
      cardImage={ Reyna }
    />
    {/* Cypher */}
    <Card
      cardName="Cypher"
      cardDescription="Agente Informante"
      cardClass="Sentinela"
      cardAttr1={ 1 }
      cardAttr2={ 10 }
      cardAttr3={ 6 }
      cardRare="Raro"
      cardImage={ Cypher }
    />
    {/* Killjoy */}
    <Card
      cardName="Killjoy"
      cardDescription="Agente Engenheira"
      cardClass="Sentinela"
      cardAttr1={ 1 }
      cardAttr2={ 10 }
      cardAttr3={ 6 }
      cardRare="Raro"
      cardImage={ Killjoy }
    />
    {/* Omen */}
    <Card
      cardName="Omen"
      cardDescription="Agente das Sombras"
      cardClass="Controlador"
      cardAttr1={ 6 }
      cardAttr2={ 5 }
      cardAttr3={ 10 }
      cardRare="Raro"
      cardImage={ Omen }
    />
    {/* Yoru */}
    <Card
      cardName="Yoru"
      cardDescription="Agente das Fendas"
      cardClass="Duelista"
      cardAttr1={ 7 }
      cardAttr2={ 4 }
      cardAttr3={ 8 }
      cardRare="Raro"
      cardImage={ Yoru }
    />
    {/* Skye */}
    <Card
      cardName="Skye"
      cardDescription="Agente dos Animais"
      cardClass="Iniciador"
      cardAttr1={ 4 }
      cardAttr2={ 4 }
      cardAttr3={ 9 }
      cardRare="Raro"
      cardImage={ Skye }
    />
    {/* Astra */}
    <Card
      cardName="Astra"
      cardDescription="Agente da Galáxia"
      cardClass="Controlador"
      cardAttr1={ 3 }
      cardAttr2={ 5 }
      cardAttr3={ 10 }
      cardRare="Muito Raro"
      cardImage={ Astra }
    />
    {/* Chamber */}
    <Card
      cardName="Chamber"
      cardDescription="Agente das Armas"
      cardClass="Sentinela"
      cardAttr1={ 4 }
      cardAttr2={ 8 }
      cardAttr3={ 10 }
      cardRare="Muito Raro"
      cardImage={ Chamber }
    />
    {/* KAYO */}
    <Card
      cardName="KAY/O"
      cardDescription="Agente Robô"
      cardClass="Iniciador"
      cardAttr1={ 1 }
      cardAttr2={ 9 }
      cardAttr3={ 7 }
      cardRare="Muito Raro"
      cardImage={ KAYO }
    />
    {/* Neon */}
    <Card
      cardName="Neon"
      cardDescription="Agente de Raios"
      cardClass="Duelista"
      cardAttr1={ 10 }
      cardAttr2={ 3 }
      cardAttr3={ 7 }
      cardRare="Muito Raro"
      cardImage={ Neon }
    />
  </>
  // ATTR1 = VEL / ATTR2 = INT / ATTR3 = TEC
);

export default agents;
