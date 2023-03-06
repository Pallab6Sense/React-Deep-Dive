import ChildC from './ChildC';
const ChildB = ({ name }) => {
  return (
    <div>
      ChildB
      <div className="">
        <ChildC name={name}></ChildC>
      </div>
    </div>
  );
};

export default ChildB;
