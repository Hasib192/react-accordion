import AccordionList from "../accordionlist/AccordionList";

const Accordion = ({ data }) => {
  return (
    <ul>
      {data.map((item, index) => {
        return <AccordionList key={index} question={item.title} answer={item.body} index={index}/>;
      })}
    </ul>
  );
};

export default Accordion;
