
export const VoterViewRow = ({ voter }) => {

    return (
      <tr>
        <td>{voter.id}</td>
        <td>{voter.firstName}</td>
        <td>{voter.lastName}</td>
        <td>{voter.address}</td>
        <td>{voter.city}</td>
        <td>{voter.birthDate}</td>
        <td>{voter.email}</td>
        <td>{voter.phone}</td>
        <td>
          <button type="button">Edit</button>
          <button type="button" >Delete</button>
        </td>
      </tr>
    );
  
  };
  