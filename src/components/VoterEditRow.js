import { useRegistrationForm } from '../hooks/useRegistrationForm';
 
export const VoterEditRow = ({
  voter,
  onSaveVoter,
  onCancelVoter: cancelVoter,
}) => {

  const [
    voterForm,
    change,
  ] = useRegistrationForm({
    firstName: voter.firstName,
    lastName: voter.lastName,
    address: voter.address,
    city: voter.city,
    birthDate: voter.birthDate,
    email: voter.email,
    phone: voter.phone
  });

  const saveVoter = () => {
    onSaveVoter({
      ...voterForm,
      id: voter.id,
    });
  };


  return (
    <tr>
      <td>{voter.id}</td>
      <td><input
          type="text"
          value={voterForm.firstName}
          onChange={change}
          name="firstName"
        /></td>
      <td><input
          type="text"
          value={voterForm.lastName}
          onChange={change}
          name="lastName"
        /></td>
      <td><input
          type="text"
          value={voterForm.address}
          onChange={change}
          name="address"
        /></td>
      <td><input
          type="text"
          value={voterForm.city}
          onChange={change}
          name="city"
        /></td>
      <td><input
          type="text"
          value={voterForm.birthDate}
          onChange={change}
          name="birthDate"
        /></td>
          <td><input
          type="text"
          value={voterForm.email}
          onChange={change}
          name="email"
        /></td>
           <td><input
          type="text"
          value={voterForm.phone}
          onChange={change}
          name="phone"
        /></td>
      <td>
        <button type="button" onClick={saveVoter}>Save</button>
        <button type="button" onClick={cancelVoter}>Cancel</button>
      </td>
    </tr>
  );

};