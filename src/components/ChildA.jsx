import ChildB from './ChildB';

const ChildA = ({ name }) => {
  return (
    <div>
      In ChildA
      <div>
        <ChildB name={name}></ChildB>
      </div>
    </div>
  );
};

export default ChildA;
