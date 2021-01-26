package com.uni.due.servlets.cookie;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/CookieLogin")
public class CookieLogin extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //Cookie数据保存在客户端 有时效性 会随着请求一并发送到tomcat服务器
        System.out.println("login success");
        Cookie cs = new Cookie("user","jeff");
        //cs.setMaxAge(60*60*24); 保存24小时
        response.addCookie(cs);
        response.getWriter().println("login success");
    }
}
