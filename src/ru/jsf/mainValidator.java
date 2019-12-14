package ru.jsf;


import javax.faces.application.FacesMessage;
import javax.faces.component.UIComponent;
import javax.faces.context.FacesContext;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.ValidatorException;
import java.text.ParseException;

@FacesValidator("mainValidator")
public class mainValidator implements javax.faces.validator.Validator {

    @Override
    public void validate(FacesContext facesContext, UIComponent uiComponent, Object o) throws ValidatorException {
        try {
            if (Double.parseDouble(o.toString().replace(",",".")) > 3 || Double.parseDouble(o.toString().replace(",",".")) < -3) {
                FacesMessage msg = new FacesMessage("Неверное значение координаты Y, верный диапозон от -3 до 3");
                msg.setSeverity(FacesMessage.SEVERITY_ERROR);
                throw new ValidatorException(msg);
            }
        }catch (NumberFormatException e){
            FacesMessage msg = new FacesMessage("Не задано значение координаты Y");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            throw new ValidatorException(msg);
        }

    }
}
