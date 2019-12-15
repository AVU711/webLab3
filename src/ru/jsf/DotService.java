package ru.jsf;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;

public class DotService {
    EntityManager em = Persistence.createEntityManagerFactory("hibernate").createEntityManager();

    public  void  addDot(Dot dot){
        em.getTransaction().begin();
        em.persist(dot);
        em.getTransaction().commit();
    }
}
