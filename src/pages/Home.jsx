import AudioVideo from "../components/AudioVideo";
import Chat from "../components/Chat";
import Diagram from "../components/Diagram";
import Document from "../components/Document";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Gpt from "../components/Gpt";
import Hero from "../components/Hero";
import Plugin from "../components/Plugin";
import Qna from "../components/Qna";
import Youtube from "../components/Youtube";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Plugin />
      <Gpt />
      <Document />
      <Chat />
      <AudioVideo />
      <Diagram />
      <Youtube />
      <Qna />
      <Footer />
    </div>
  );
}
