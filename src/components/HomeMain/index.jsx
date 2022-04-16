import { FormContent } from "../FormContent";

export const HomeMain = ({cpfMessage, cpfInput, handleValidate, handleGenerate, typeInput}) => (
  <main>
    <form>
      <FormContent 
        cpfMessage = {cpfMessage}
        cpfInput = {cpfInput}
        handleValidate = {handleValidate}
        handleGenerate = {handleGenerate}
        typeInput = {typeInput}
      />
    </form>
  </main>
)

