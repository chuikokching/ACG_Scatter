package com.uni.due.charts;

public class ScatterplotFactory extends ChartFactory {
    @Override
    public Chart createChartObject() {
        return new Scatterplot();
    }
}
