import ChildC from './ChildC';
const ChildB = ({ name }) => {
  return (
    <div>
      In ChildB
      <div className="">
        <ChildC name={name}></ChildC>
      </div>
    </div>
  );
};

export default ChildB;
