package ru.jsf;

import java.util.ArrayList;

public class myBean  {

    private DotService dotService = new DotService();
    private ArrayList<Dot> history = new ArrayList<>();

    private String x = "";
    private String y = "";
    private String R = "";
    private String secretX = "";
    private String secretY = "";
    private String secretR = "";

    public String getSecretX() {
        return secretX;
    }

    public String getSecretY() {
        return secretY;
    }

    public String getSecretR() {
        return secretR;
    }

    public void setSecretX(String secretX) {
        this.secretX = secretX;
    }

    public void setSecretY(String secretY) {
        this.secretY = secretY;
    }

    public void setSecretR(String secretR) {
        this.secretR = secretR;
    }

    public void setX(String x) {
        this.x = x;
    }

    public void setY(String y) {
        this.y = y;
    }

    public void setR(String r) {
        R = r;
    }

    public void setHistory(ArrayList<Dot> history) {
        this.history = history;
    }

    public String getX() {
        return x;
    }

    public String getY() {
        return y;
    }

    public String getR() {
        return R;
    }

    public ArrayList<Dot> getHistory() {
        return history;
    }

    public void addDot(boolean flag){
        if (flag) {
            Double x = Double.parseDouble(this.x.replace(",", "."));
            Double y = Double.parseDouble(this.y.replace(",", "."));
            Double R = Double.parseDouble(this.R.replace(",", "."));
            if ((0.0 <= x && x <= R / 2 && 0.0 <= y && y <= R) || (x <= 0.0 && y <= 0.0 && (x * x + y * y) <= R * R) || (x <= 0 && 0 <= y && y <= x + R)) {
                history.add(new Dot(this.x, this.y, this.R, "Попадение"));
                dotService.addDot(new Dot(this.x, this.y, this.R, "Попадение"));
            } else {
                history.add(new Dot( this.x, this.y, this.R, "Промах"));
                dotService.addDot(new Dot( this.x, this.y, this.R, "Промах"));
            }
        }else{
            Double x = Double.parseDouble(this.secretX.replace(",", "."));
            Double y = Double.parseDouble(this.secretY.replace(",","."));
            Double R = Double.parseDouble(this.secretR.replace(",","."));
            if ((0.0 <= x && x <= R / 2 && 0.0 <= y && y <= R) || (x <= 0.0 && y <= 0.0 && (x * x + y * y) <= R * R) || (x <= 0 && 0 <= y && y <= x + R)) {
                history.add(new Dot(this.secretX, this.secretY, this.secretR, "Попадение"));
                dotService.addDot(new Dot(this.secretX, this.secretY, this.secretR, "Попадение"));
            } else {
                history.add(new Dot( this.secretX, this.secretY, this.secretR, "Промах"));
                dotService.addDot(new Dot( this.secretX, this.secretY, this.secretR, "Промах"));
            }
        }

    }
}
