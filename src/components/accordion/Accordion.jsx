import AccordionList from "../accordionlist/AccordionList";

const Accordion = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return <AccordionList key={index} question={item.title} answer={item.body} />;
      })}
    </>
  );
};

export default Accordion;
