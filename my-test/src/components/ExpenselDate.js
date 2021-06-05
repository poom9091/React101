function ExpenselDate(props) {
  const mouth = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  return (
    <div>
      <div>{mouth}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}

export default ExpenselDate;
