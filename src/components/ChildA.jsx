import ChildB from './ChildB';

const ChildA = ({ name }) => {
  return (
    <div>
      ChildA
      <div>
        <ChildB name={name}></ChildB>
      </div>
    </div>
  );
};

export default ChildA;
