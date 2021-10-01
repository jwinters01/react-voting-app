import { useRegistrationForm } from "../hooks/useRegistrationForm";
import { useHistory } from 'react-router-dom';

export const RegistrationForm = ({buttonText, onSubmitForm}) => {

    const [
        registrationForm,
        change,
        resetRegistrationForm,
      ] = useRegistrationForm({
        firstName: '', lastName: '', address: '', city: '', birthdate: '', email: '', phone: '',
      });

      const submitForm = () => {

        onSubmitForm({ ...registrationForm });
    
        resetRegistrationForm();
      };

      const history = useHistory();

      const onButtonClickHandler = () => {
        window.alert('Thanks for registering!')
      };

    return (
        <form>
        <label>
            First Name:
            <input type="text" name="firstName" value={registrationForm.firstName} onChange={change}></input>
        </label>
        <label>
            Last Name:
            <input type="text" name="lastName" value={registrationForm.lastName} onChange={change}></input>
        </label>
        <label>
            Address:
            <input type="text" name="address" value={registrationForm.address} onChange={change}></input>
        </label>
        <label>
            City:
            <input type="text" name="city" value={registrationForm.city} onChange={change}></input>
        </label>
        <label>
            Birth Date:
            <input type="text" name="birthdate" value={registrationForm.birthdate} onChange={change}></input>
        </label>
        <label>
            Email:
            <input type="text" name="email" value={registrationForm.email} onChange={change}></input>
        </label>
        <label>
            Phone:
            <input type="text" name="phone" value={registrationForm.phone} onChange={change}></input>
        </label>
        

        <button type="button" onClick={() => {
          submitForm();
          onButtonClickHandler();
          history.push("/");
        }}>{buttonText}</button>
    </form>
    )
};