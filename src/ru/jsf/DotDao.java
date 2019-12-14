package ru.jsf;

import java.util.ArrayList;
import java.util.List;

public interface DotDao {

    public void save(Dot dot);
    public void update(Dot dot);
    public void delete(Dot dot);
    ArrayList<Dot> findAll();


}
