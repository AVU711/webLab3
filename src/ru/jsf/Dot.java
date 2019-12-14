package ru.jsf;


import org.hibernate.annotations.Tables;

import javax.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "dots")
public class Dot implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column(name = "x")
    private String coordinateX = "";
    @Column(name = "y")
    private String coordinateY = "";
    @Column(name = "r")
    private String parametrR = "";
    @Column(name = "result")
    private String result =  "";


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Dot(){}

    public Dot(String coordinateX, String coordinateY, String parametrR, String result){
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.parametrR = parametrR;
        this.result = result;
    }

    public void setResult(String result){
        this.result = result;
    }

    public String getResult() {
        return result;
    }

    public void setCoordinateY(String coordinateY) {
        this.coordinateY = coordinateY;
    }

    public String getCoordinateY() {
        return coordinateY;
    }

    public void setCoordinateX(String coordinateX) {
        this.coordinateX = coordinateX;
    }

    public String getCoordinateX() {
        return coordinateX;
    }

    public void setParametrR(String parametrR) {
        this.parametrR = parametrR;
    }

    public String getParametrR() {
        return parametrR;
    }
}
