using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Labb4MVC.Models;

namespace Labb4MVC.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        private UserManager<User> _User;

        public HomeController(UserManager<User> User)
        {
            _User = User;
        }

        public IActionResult Index()
        {
            string CurrentUser = _User.GetUserName(HttpContext.User);
            ViewData["UserName"] = CurrentUser;
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
