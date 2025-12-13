import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import React, { useEffect, useState } from "react";
import { FaRobot } from "react-icons/fa";
import { Tooltip } from "react-leaflet";
import ChatMessage from "../../chatbotElement/ChatMessage";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();
  const [loading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

//   const apiKey = process.env.REACT_APP_OPENROUTER_KEY;

  const handleOpen = () => {
    onOpen();
  };
  useEffect(() => {
    console.log("text changed:", text);
  }, [text]);

  //   ** Handle Sending Message ==========
  const handleSendMessage = async () => {
    const userMessage = {
        id: Date.now(),
      text: text,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setText("");

    await RebotResponse(text);
  };

  //   ======================================= //
  //   ** Handle Robot Response ==========
  const RebotResponse = async (keyword) => {
    console.log("RebotResponse called with:", keyword);
    setLoading(true);

    try {
      const response = await fetch(
        "https://openrouter.ai/api/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer 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",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "mistralai/mistral-7b-instruct:free",
            messages: [
              {
                role: "user",
                content: keyword,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("API response:", data);
      const botMessage = {
        id: Date.now() + 1,
        text: data.choices[0].message.content,
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-4 items-center fixed  bottom-50 left-10 z-50">
      <Button
        isIconOnly
        aria-label="Like"
        className="w-[48px] h-[48px]  bg-dark-purple dark:bg-Violet-Blue cursor-pointer transition-all ease-in-out"
        onPress={() => handleOpen()}
        title="چت با هوش مصنوعی"
      >
        <FaRobot className="text-white" size={20} />
      </Button>
      <Modal
        className=" bg-Cosmic-Blue flex items-center"
        backdrop="opaque"
        isOpen={isOpen}
        size="4xl"
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <div className="w-full bg-Cosmic-Blue">
              <ModalHeader style={{ direction: "rtl" }} className="flex flex-col gap-1 text-white">
               
              </ModalHeader>
              <ModalBody>
                <div className=" h-80 bg-Sunray flex flex-col items-center justify-between relative">
                  <div className="w-[90%] flex flex-col gap-4 justify-start overflow-y-auto">
                    {messages.map((msg) => (
                      <ChatMessage
                        key={msg.id}
                        text={msg.text}
                        sender={msg.sender}
                      />
                    ))}
                    {loading && (
                      <ChatMessage text="در حال تایپ..." sender="bot" />
                    )}
                  </div>
                  <div
                    style={{ direction: "rtl" }}
                    className="w-full flex items-center justify-between gap-1"
                  >
                    <Input
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSendMessage();
                        }
                      }}
                      className="w-[90%]"
                      placeholder="پیام خود را بنویسید"
                      value={text}
                      onChange={(e) => {
                        setText(e.target.value);
                      }}
                    />
                    <Button className="bg-Electric-Blue text-white" onPress={handleSendMessage}>ارسال</Button>
                  </div>
                </div>
              </ModalBody>
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ChatBot;
