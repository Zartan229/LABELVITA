import HeaderArrow from "../components/HeaderArrow/index.jsx"



let title;
var str = window.location.href;
var n = str.lastIndexOf('/');
var result = str.substring(n + 1);

export default function Mail() {
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
    </>
  );
}