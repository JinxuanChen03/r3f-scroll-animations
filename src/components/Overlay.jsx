import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Section = (props) => {
  return (
    //position the 2nd section to the right
    <section 
      className={`h-screen flex flex-col justify-center p-10 
        ${props.right ? "items-end" : "items-start"}`}
      // style={{opacity: props.opacity}}
    >
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-sm w-full">
          <div className="bg-white rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {

  // const scroll = useScroll();
  // const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  // const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  // const [opacityLastSection, setOpacityLastSection] = useState(1);

  // useFrame(() => {
  //   setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
  //   setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
  //   setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  // });

  //opacity={opacityFirstSection}
  //opacity={opacitySecondSection}
  //opacity={opacityLastSection}

  return (
    <Scroll html>
      <div class="w-screen">
        <Section >
          <h1 className="font-serif text-2xl">
            1
          </h1>
        </Section>
        <Section right >
          <h1 className="font-serif text-2xl">
            2
          </h1>
        </Section>
        <Section >
          <h1 className="font-serif text-2xl">
            3
          </h1>
        </Section>
      </div>
    </Scroll>
  );
};