const AccordionList = ({ question, answer, index }) => {
  return (
    <li className={`accordion-item-${index + 1}`}>
      <input type="checkbox" defaultChecked="checked" />
      <i />
      <h2>{question}</h2>
      <p>{answer}</p>
    </li>
  );
};

export default AccordionList;
