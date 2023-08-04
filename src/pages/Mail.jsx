import HeaderArrow from "../components/HeaderArrow/index.jsx";
import ChatBox from "../components/Conv/index.jsx";
import Send from "../components/Send/index.jsx"

let title = "";
var str = window.location.href;
var n = str.lastIndexOf("/");
var result = str.substring(n + 1);

export default function Mail() {
  if (result == "chat") {
    title = "Conversations";
    console.log("bobo");
  } else {
    title = "Jenny Hue";
  }
  return (
    <>
      <HeaderArrow title={title} />
      <ChatBox />
      <Send />
    </>
  );
}
