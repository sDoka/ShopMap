using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using PreWeb.Models;

namespace PreWeb.Models
{
    public class ShopDbInitializer : DropCreateDatabaseAlways<ShopContext>
    {
        protected override void Seed(ShopContext db)
        {
            db.Shops.Add(new Shop { Name = "Первый", Address = "Спб1", Phone = "1-555-444",Coordinates = "45.9998;75.8886" , Description = "Продуктовый"});
            db.Shops.Add(new Shop { Name = "Второй", Address = "Спб2", Phone = "2-555-444", Coordinates = "45.9998;75.8886", Description = "Обувной" });
            db.Shops.Add(new Shop { Name = "Третий", Address = "Спб3", Phone = "3-555-444", Coordinates = "45.9998;75.8886", Description = "Хозяйственный" });
            base.Seed(db);
        }
    }
}