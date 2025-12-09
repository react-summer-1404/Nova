import { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import useMiceState from "../../core/store/miceState";

const SearchDict = ({setQuery}) => {
  const { setActiveMice } = useMiceState();
  const { transcript, resetTranscript } = useSpeechRecognition();

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

  useEffect(() => {
    setQuery(transcript)
  }, [transcript]);

  return (
    <div
      className="bg-red-500 text-white px-3 py-2 rounded-full cursor-pointer"
      onClick={() => setActiveMice(null)}
    >
      توقف  
    </div>
  );
};

export default SearchDict;
