import * as React from "react";
import { speciality } from "./constants";

const Table = () => {
  const num = speciality.map((s) =>
    Array.from({ length: s.countOfGroups }, (_, i) => i).map(
      (n) => `${s.shortForm} - ${n + 1}`
    )
  );

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">#</th>
          {speciality.map((s) => (
            <th
              scope="col"
              colSpan={s.countOfGroups}
              key={`${s.name}-${s.countOfGroups}`}
            >
              {s.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"></th>
          <td></td>
          {num.map((nu) => nu.map((n) => <td key={n}>{n}</td>))}
        </tr>

        <tr>
          <td rowSpan={5}>Понеділок</td>
          <td>1 пара</td>
        </tr>
        <tr>
          <td>2 пара</td>
        </tr>
        <tr>
          <td>3 пара</td>
        </tr>
        <tr>
          <td>4 пара</td>
        </tr>
        <tr>
          <td>5 пара</td>
        </tr>

        <tr>
          <td rowSpan={5}>Вівторок</td>
          <td>1 пара</td>
        </tr>
        <tr>
          <td>2 пара</td>
        </tr>
        <tr>
          <td>3 пара</td>
        </tr>
        <tr>
          <td>4 пара</td>
        </tr>
        <tr>
          <td>5 пара</td>
        </tr>

        <tr>
          <td rowSpan={5}>Середа</td>
          <td>1 пара</td>
        </tr>
        <tr>
          <td>2 пара</td>
        </tr>
        <tr>
          <td>3 пара</td>
        </tr>
        <tr>
          <td>4 пара</td>
        </tr>
        <tr>
          <td>5 пара</td>
        </tr>

        <tr>
          <td rowSpan={5}>Четвер</td>
          <td>1 пара</td>
        </tr>
        <tr>
          <td>2 пара</td>
        </tr>
        <tr>
          <td>3 пара</td>
        </tr>
        <tr>
          <td>4 пара</td>
        </tr>
        <tr>
          <td>5 пара</td>
        </tr>

        <tr>
          <td rowSpan={5}>П'ятниця</td>
          <td>1 пара</td>
        </tr>
        <tr>
          <td>2 пара</td>
        </tr>
        <tr>
          <td>3 пара</td>
        </tr>
        <tr>
          <td>4 пара</td>
        </tr>
        <tr>
          <td>5 пара</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
