import { VoterViewRow } from "./VoterViewRow";
import {VoterEditRow} from "./VoterEditRow"
const dataCols = [
  { name: "id", caption: "Id" },
  { name: "firstName", caption: "FirstName" },
  { name: "lastName", caption: "LastName" },
  { name: "address", caption: "Address" },
  { name: "city", caption: "City" },
  { name: "birthDate", caption: "BirthDate" },
  { name: "email", caption: "Email" },
  { name: "phone", caption: "Phone" },
];

const sortArrowWrapper = (col, dir) => (aCol) => {
  if (col === aCol) {
    return dir === "asc" ? "v" : "^";
  } else {
    return "";
  }
};

const sortHeaderColWrapper =
  (sortVoters, sortArrow) =>
  ({ col: { name, caption } }) => {
    return (
      <th>
        <button type="button" onClick={() => sortVoters(name)}>
          {caption} {sortArrow(name)}
        </button>
      </th>
    );
  };

export const VotersTable = ({
  voters,
  editVoterId,
  onEditVoter: editVoter,
  onDeleteVoter: deleteVoter,
  voterSort: { col, dir },
  onSortVoters: sortVoters,
  onSaveVoter:saveVoter,
  onCancelVoter:cancelVoter
}) => {
  const sortArrow = sortArrowWrapper(col, dir);
  sortArrow("id");

  const SortHeaderCol = sortHeaderColWrapper(
    sortVoters,
    sortArrowWrapper(col, dir)
  );
  return (
    <table>
      <thead>
        <tr>
          {dataCols.map((dataCol) => (
            <SortHeaderCol key={dataCol.id} col={dataCol} />
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {voters.map((voter) =>
          voter.id === editVoterId ? (
            <VoterEditRow
              key={voter.id}
              voter={voter}
              onSaveVoter={saveVoter}
              onCancelVoter={cancelVoter}
            />
          ) : (
            <VoterViewRow
              key={voter.id}
              voter={voter}
              onEditVoter={editVoter}
              onDeleteVoter={deleteVoter}
            />
          )
        )}
      </tbody>
    </table>
  );
};
