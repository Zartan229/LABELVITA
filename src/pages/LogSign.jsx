import image from "../images/Plan-de-travail-7-copie 1Logo.svg"
import Banner from "../components/Banner/index.jsx"
import Greeting from "../components/Greeting/index.jsx"
import Form from "../components/Form/index.jsx"

export default function Home() {
  return (
    <> 
    <Banner image={image}/>
    <Greeting/>
    <Form/>
      { /* <Header/>
     
      <Housing />
      <Footer />*/}
    </>
  );
}