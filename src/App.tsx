import React, { useState } from "react";
import "./App.css";

interface IGrade {
  grade: string;
  names: string;
  total: string[];
  gradeName: string;
  points: number;
}
interface IGrade2 {
  grade: string;
  names: string;
}
const App: React.FC<IGrade> = () => {
  const [names, setNames] = useState("");
  const [grade, setGrade] = useState("");
  const [total, setTotal] = useState<IGrade2[]>([]);

  const submitGrade = () => {
    const test = { names, grade };
    const gradeName = [...total, test];
    setTotal(gradeName);
  };
  const nameOfgrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNames(e.target.value);
  };

  const calGrade = (e: React.ChangeEvent<HTMLInputElement>) => {
    const points = parseFloat(e.target.value);
    if (points >= 80) {
      setGrade("A");
    } else if (points >= 75) {
      setGrade("B+");
    } else if (points >= 70) {
      setGrade("B");
    } else if (points >= 65) {
      setGrade("C+");
    } else if (points >= 60) {
      setGrade("C");
    } else if (points >= 55) {
      setGrade("D+");
    } else if (points >= 50) {
      setGrade("D");
    } else {
      setGrade("F");
    }
  };

  const reSet = () => {
    setTotal([]);
  }

  return (
    <form>
      <div>
        <label>ชื่อ</label>
        <input type="text" name="names" onChange={nameOfgrade} />
        <label>เกรด</label>
        <input type="number" name="gpax" onChange={calGrade} />
      </div>
      <button type="button" onClick={submitGrade}>
        submit
      </button>
      <button type="button" onClick={reSet}>
        Reset
      </button>

      <table style={{border: '1px solid'}}>
        <tr>
          <th>ชื่อ</th>
          <th>เกรด</th>
        </tr>
        {total.map((item: any) => (
          <tr>
            <td>{item.names}</td>
            <td>{item.grade}</td>
          </tr>
        ))}
      </table>
    </form>
  );
};

export default App;
