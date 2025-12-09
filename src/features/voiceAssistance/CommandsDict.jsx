import { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useMiceState from "../../core/store/miceState";

const CommandsDict = ({ commands }) => {
  const { setActiveMice } = useMiceState();
  const { resetTranscript } = useSpeechRecognition({ commands });

  useEffect(() => {
    SpeechRecognition.startListening({
      continuous: true,
      language: "fa-IR",
    });

    return () => {
      SpeechRecognition.stopListening();
      resetTranscript();
    };
  }, []);

  return <div onClick={() => setActiveMice(null)}></div>;
};

export default CommandsDict;
