import { useEffect, useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animations.css'; // Aquí se definirán las animaciones en CSS
import { WelcomeQuests } from './pages/WelcomeQuests';
import { Quest1 } from './pages/Quest1';
import { Quest2 } from './pages/Quest2';
import { Quest3 } from './pages/Quest3';
import { Quest4 } from './pages/Quest4';
import { SupportButton } from './components/atomos/SupportButton';



function App() {
  const [yourParamValue, setYourParamValue] = useState(null);
  const [questState, setQuestState] = useState("start");
  const [questType, setQuestType] = useState("");
  const nodeRef = useRef(null);
  const nodeRef2 = useRef(null);

  useEffect(() => {
    // Obtén la URL actual
    const queryString = window.location.search;
    // Crea una instancia de URLSearchParams
    const queryParams = new URLSearchParams(queryString);
    // Obtén el valor de un parámetro de consulta específico
    const paramValue = queryParams.get('quest');

    // Actualiza el estado con el valor del parámetro
    setYourParamValue(paramValue);
  }, []);

  useEffect(() => {
    // Subir el scroll al inicio cuando show cambie
    window.scrollTo(0, 0);
  }, [questState]);

  return (<>
    <SupportButton />
    <TransitionGroup>
      {questState === "start" && (
        <CSSTransition
          in={questState}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <WelcomeQuests setQuestState={setQuestState} setQuestType={setQuestType} />
        </CSSTransition>
      )}


      {(questState === "questStarting" && questType === "questOne") && <CSSTransition
        in={questState}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Quest1 />
      </CSSTransition>}

      {(questState === "questStarting" && questType === "questTwo") && <CSSTransition
        in={questState}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Quest2 />
      </CSSTransition>}

      {(questState === "questStarting" && questType === "questThree") && <CSSTransition
        in={questState}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Quest3 />
      </CSSTransition>}

      {(questState === "questStarting" && questType === "questFour") && <CSSTransition
        in={questState}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <Quest4 />
      </CSSTransition>}
    </TransitionGroup>
  </>
  )
}

export default App