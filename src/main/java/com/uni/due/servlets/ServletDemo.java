package com.uni.due.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

/*loadOnStartup 0~9999*/
@WebServlet(value = "/Demo",loadOnStartup = 1)
public class ServletDemo extends HttpServlet {

    //请求处理的核心方法 无论get还是post都会被处理 如果被重写则不会继续分发到get和post当中
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //String name=request.getParameter("name");
        String name="jeff";
        String html="<h1>"+name+"</h1>";
        PrintWriter out = response.getWriter();
        out.println(html);
    }
    //Post method
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    //Get method
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.getWriter().println("helloworld from servlet");
    }
}
