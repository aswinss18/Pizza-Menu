<Account name="Aswin" age="20" address="Cheriyakolla" />;
<Account name="Gopakumar" age="40" address="Cheriyakolla" />;
function Account(props) {
  return (
    <div>
      <h1>name:{props.name} </h1>
      <h1>age:{props.age}</h1>
      <h1>address:{props.address}</h1>
    </div>
  );
}
//   props = { name: "Aswin", age: "20", address: "Cheriyakolla" };========= 1
//   props = { name: "Gopakumar", age: "40", address: "Cheriyakolla" };========= 2
