package ru.jsf;

import javax.persistence.*;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DotService {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("hibernate");


    public  void  addDot(Dot dot){
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        em.persist(dot);
        em.getTransaction().commit();
    }

    public ArrayList<Dot> getAll(){
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        List<String> coordinatesX = (List<String>) em.createQuery("select coordinateX  from Dot", String.class)
                .getResultList();
        List<String> coordinatesY = (List<String>) em.createQuery("select coordinateY from Dot", String.class)
                .getResultList();
        List<String> parametrsR = (List<String>) em.createQuery("select parametrR from Dot", String.class)
                .getResultList();
        List<String> results = (List<String>) em.createQuery("select result from Dot", String.class).getResultList();
        em.getTransaction().commit();
        ArrayList<Dot> dots = new ArrayList<>();
        for (int i = 0; i < coordinatesX.size(); i ++){
            dots.add(new Dot(coordinatesX.get(i),coordinatesY.get(i), parametrsR.get(i), results.get(i)));
        }
        return dots;
    }
}
