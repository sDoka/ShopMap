using PreWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PreWeb.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        // создаем контекст данных
        ShopContext db = new ShopContext();
        
        public ActionResult Index()
        {
            // получаем из бд все объекты Shop
            IEnumerable<Shop> shops = db.Shops;
            // передаем все полученный объекты в динамическое свойство Sops в ViewBag
            ViewBag.Shops = shops;
            // возвращаем представление
            return View();
        }

    }
}
