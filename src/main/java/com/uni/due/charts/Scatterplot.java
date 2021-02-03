package com.uni.due.charts;

public class Scatterplot implements Chart{
    @Override
    public void getTitle() {
        System.out.println("Scatterplot_Chart!!");
    }

    @Override
    public void analyse() {
        System.out.println("Scatterplot analysing!!");
    }
}
