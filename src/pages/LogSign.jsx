import image from "../images/Plan-de-travail-7-copie 1Logo.svg"
import Banner from "../components/Banner/index.jsx"
import Greeting from "../components/Greeting/index.jsx"
import Form from "../components/Form/index.jsx"
import Social from "../components/Social/index.jsx"

export default function Home() {
  return (
    <> 
    <Banner image={image}/>
    <Greeting/>
    <Form/>
    <Social/>
      { /* <Header/>
     
      <Housing />
      <Footer />*/}
    </>
  );
}