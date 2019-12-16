package ru.jsf;

import javax.persistence.EntityManager;
import javax.persistence.Persistence;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class DotService {
    EntityManager em = Persistence.createEntityManagerFactory("hibernate").createEntityManager();

    public  void  addDot(Dot dot){
        em.getTransaction().begin();
        em.persist(dot);
        em.getTransaction().commit();
    }

    public void getAll(){
        em.getTransaction().begin();
        Query query = em.createQuery("select p from points p");
        List<Dot> list = query.getResultList();
        for (int i = 0; i < list.size(); i ++){
            System.out.println(list.get(i));
        }
        em.getTransaction().commit();

    }
}
