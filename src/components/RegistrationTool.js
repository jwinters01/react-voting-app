import { ToolHeader } from "./ToolHeader";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationTool = ({addForm}) => {

    return (
    <>
    <ToolHeader title="Registration Page" />
    <RegistrationForm buttonText="Complete Registration" onSubmitForm={addForm}/>
    </>
    )
}