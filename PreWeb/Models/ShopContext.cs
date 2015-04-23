using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PreWeb.Models
{//нужен для облегчения доступа к БД на основе некоторой модели

        public class ShopContext : DbContext
        {
            public DbSet<Shop> Shops { get; set; }
        }
}