const AccordionList = ({ question, answer }) => {
  return (
    <ul>
      <li>
        <input type="checkbox" defaultChecked="checked" />
        <i />
        <h2>{question}</h2>
        <p>{answer}</p>
      </li>
    </ul>
  );
};

export default AccordionList;
