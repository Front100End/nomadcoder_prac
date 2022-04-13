import React from "react";

const Miniute_Hour = (props) => {
  const [minute, setMinute] = React.useState(0);
  const [flip, setFlip] = React.useState(false);
  const HandleMinute = (e) => {
    setMinute(e.target.value);
    console.log(e.target.dataset.id);
  };

  const Reset_btn = (e) => setMinute(0);
  const Flip_btn = () => setFlip((current) => !current);
  return (
    <div>
      <h1>Super Converter</h1>
      <label htmlFor="minute">Minute</label>
      <input
        type="number"
        id="minute"
        data-id="33"
        value={!flip ? minute : minute * 60}
        onChange={HandleMinute}
        disabled={flip}
      />
      <div></div>
      <label htmlFor="hour">Hour</label>
      <input
        type="number"
        id="hour"
        value={flip ? minute : Math.round(minute / 60)}
        disabled={!flip}
        onChange={HandleMinute}
        // onChange={HandleHour}
      />
      <div></div>
      <button onClick={Reset_btn} style={{ marginRight: "30px" }}>
        reset
      </button>
      <button onClick={Flip_btn}>filp</button>
    </div>
  );
};

export default Miniute_Hour;
