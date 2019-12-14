package ru.jsf;

import org.hibernate.Session;
import org.hibernate.Transaction;

import java.util.ArrayList;
import java.util.List;

public class DotDaoImp implements DotDao {
    Session session = HibernateSessionFactoryUtil.getSessionFactory().openSession();
    @Override
    public void save(Dot dot) {
        Transaction tx1 = session.beginTransaction();
        session.save(dot);
        tx1.commit();
    }

    @Override
    public void update(Dot dot) {
        Transaction tx1 = session.beginTransaction();
        session.update(dot);
        tx1.commit();

    }

    @Override
    public void delete(Dot dot) {
        Transaction tx1 = session.beginTransaction();
        session.delete(dot);
        tx1.commit();
    }

    @Override
    public ArrayList<Dot> findAll() {
        Transaction tx1 = session.beginTransaction();
        ArrayList<Dot> dots = (ArrayList<Dot>) session.createQuery("From Dot").list();
        tx1.commit();
        return dots;
    }
}
