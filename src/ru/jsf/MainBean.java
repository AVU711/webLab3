package ru.jsf;
import javax.faces.application.FacesMessage;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.faces.component.UIComponent;
import javax.faces.component.UIInput;
import javax.faces.context.FacesContext;
import javax.faces.event.ComponentSystemEvent;
import javax.faces.validator.FacesValidator;
import javax.faces.validator.Validator;
import javax.faces.validator.ValidatorException;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.servlet.http.HttpSession;
import javax.swing.*;
import java.util.ArrayList;
import java.util.List;

public class MainBean {

    private String x;
    private String y;
    private String R;
    private String res;
    private String testX;
    private String testY;
    private String testR;
    private String parametrR;

//    DotDaoImp service = new DotDaoImp();
    private List<Dot> history = new ArrayList<>();


    public String getRes() {
        return res;
    }

    public void setRes(String res) {
        this.res = res;
    }

    public String getTestR() {
        return testR;
    }

    public void setTestR(String testR) {
        this.testR = testR;
    }

    public String getTestY() {
        return testY;
    }

    public void setTestY(String textY) {
        this.testY = textY;
    }

    public String getTestX() {
        return testX;
    }

    public void setTestX(String testX) {
        this.testX = testX;
    }

    public List<Dot> getHistory() {
        return history;
    }


    public void setCoordinateX(String coordinateX) {
        this.x = coordinateX;
    }


    public void setCoordinateY(String coordinateY) {
        this.y = coordinateY;
    }

    public String getCoordinateY() {
        return y;
    }
    public String getCoordinateX() {return x; }

    public void setParametrR(String parametrR) {

        System.out.println(parametrR);
        this.R = parametrR;
    }
    public String getParametrR(){return this.parametrR;}

    public void sendData() {
        if (x != null) {

            Double x = Double.parseDouble(this.x);
            Double y = Double.parseDouble(this.y.replace(",", "."));
            Double R = Double.parseDouble(this.R);

            if ((0.0 <= x && x <= R / 2 && 0.0 <= y && y <= R) || (x <= 0.0 && y <= 0.0 && (x * x + y * y) <= R * R) || (x <= 0 && 0 <= y && y <= x + R)) {
                res = "Попадание";
                history.add(new Dot(this.x, this.y, this.R, this.res));
//                service.update(new Dot(this.x, this.y, this.R, this.res));
            } else {
                res = "Промах";
                history.add(new Dot(this.x, this.y, this.R, this.res));
//                service.update(new Dot(this.x, this.y, this.R, this.res));
            }
        }
    }



    public String getDrawingDot(){
        return "showData()";
    }

    public String getCommandDraw(String s){
        return String.format("draw(%s)",s);
    }

    public String getCommandSet(String s){
        return String.format("setR(%s)",s);
    }


    public void sendDot() {
        Double x = Double.parseDouble(this.testX);
        Double y = Double.parseDouble(this.testY);
        Double R = Double.parseDouble(this.testR);
        this.testX = testX.replace(".", ",");
        this.testY = testY.replace(".", ",");
        if ((0.0 <= x && x <= R / 2 && 0.0 <= y && y <= R) || (x <= 0.0 && y <= 0.0 && (x * x + y * y) <= R * R) || (x <= 0 && 0 <= y && y <= x + R)) {
            res = "Попадание";
            history.add(new Dot(testX, testY, testR, this.res));
        } else {
            res = "Промах";
            history.add(new Dot(testX, testY, testR, this.res));
        }
    }
    public void check(ComponentSystemEvent event){
        FacesContext fc = FacesContext.getCurrentInstance();
        if (x == null){
            FacesMessage msg = new FacesMessage("Не выбрано ни одно из значений координаты X");
            msg.setSeverity(FacesMessage.SEVERITY_ERROR);
            fc.addMessage("X",msg);
            fc.renderResponse();
        }
    }

    public String getCommands(){
        return "setR(1);\ndraw(1);\nshowData();";
    }

}


