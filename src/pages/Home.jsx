import AudioVideo from "../components/AudioVideo";
import Chat from "../components/Chat";
import Document from "../components/Document";
import Features from "../components/Features";
import Gpt from "../components/Gpt";
import Hero from "../components/Hero";
import Plugin from "../components/Plugin";

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
    </div>
  );
}
