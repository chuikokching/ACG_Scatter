package com.uni.due.charts;

public interface Chart {
    public void getAllTitle();

    //Form: Is the association linear or nonlinear?
    public String if_linear_or_nonlinear(String array[]);

    //Direction: Is the association positive or negative?
    public String if_positive_or_negative(String array[]);

    //Strength: Does the association appear to be strong, moderately strong, or weak?
    public String if_strong_or_moderate_or_weak(String array[]);

    //Outliers: Do there appear to be any data points that are unusually far away from the general pattern?
    public String if_outliers(String array[]);

}
