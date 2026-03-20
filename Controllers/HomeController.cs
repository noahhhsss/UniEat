using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UniEat.Models;

namespace UniEat.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Login()
    {  
        return View();
     
    }

    public IActionResult Menu()
    {
        ViewBag.Page = "Menu";
        return View();
    }

    public IActionResult Profile()
    {
        ViewBag.Page = "Profile";
        return View();
    }

    public IActionResult Orders()
    {
        return View();
    }

    public IActionResult AdminMenu()
    {
        return View();
    }

    public IActionResult Adminstudent()
    {   
        ViewBag.Page = "Adminstudent";
        return View();
    }

    public IActionResult Adminorder()
    {
        ViewBag.Page = "Adminorder";
        return View();
    }
 
    

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
