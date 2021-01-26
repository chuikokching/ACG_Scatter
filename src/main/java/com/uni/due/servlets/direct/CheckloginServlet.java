package com.uni.due.servlets.direct;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/check")
public class CheckloginServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("login success");
        request.setAttribute("username","admin");
        //请求转发 只会有一次请求
        request.getRequestDispatcher("/index").forward(request,response);

        //响应重定向 2次请求 自定义属性获取失败，第一次请求对象已经销毁
        //response.sendRedirect("/ACG/index");
    }
}
