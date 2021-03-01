package com.uni.due.servlets;


import com.alibaba.fastjson.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;

/*loadOnStartup 0~9999*/
@WebServlet(value = "/Demo",loadOnStartup = 1)
public class ServletDemo extends HttpServlet {

    /*
     *The core method of request processing, either get or post will be processed. If it is rewritten, it will not continue to be distributed to get and post.
     *
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //String name=request.getParameter("name");
        String name="jeff";
        String html="<h1>"+name+"</h1>";
        PrintWriter out = response.getWriter();
        out.println(html);
    }*/

    //Post method
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        /*
        if you are using JSON.stringify() then you have to use BufferedReader in servlet ,
        You can use request.getparameter in servlet ,when you are passing data in URL of servlet.
        */
        BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String json = "";

        if (br != null) {
            json = br.readLine();
        }
        JSONObject wholedata= JSONObject.parseObject(json);

        System.out.println(wholedata.getString("chart_title")+" "+wholedata.getString("y_axis_title")+" "+wholedata.getString("x_axis_title")+" "+wholedata.getString("array"));

        response.setContentType("application/json; charset=utf-8");
        response.getWriter().print(wholedata);

    }

    //Get method
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().println("helloworld from servlet");
    }
}
