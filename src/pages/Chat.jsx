import HeaderArrow from "../components/HeaderArrow/index.jsx"
import Search from "../components/Search/index.jsx"
import Message from "../components/Message/index.jsx"

let title;
var str = window.location.href;
var n = str.lastIndexOf('/');
var result = str.substring(n + 1);

export default function Chat() {
  if (result == "chat")
{
 title =  "Conversations"
 console.log("bobo")
}
else
{
 title = "Nom de la personne"
}
  return (
    <> 
    <HeaderArrow title={title}/>
    <Search/>
    <Message/>
    </>
  );
}