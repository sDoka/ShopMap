using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PreWeb.Models
{//модель магазина
       public class Shop
        {
            // ID магазина
            public int Id { get; set; }
            // название магазина
            public string Name { get; set; }
            // адрес магазина
            public string Address { get; set; }
            // Телефон
            public string Phone { get; set; }
            // Координаты
            public string Coordinates { get; set; }
            // Описание
            public string Description { get; set; }
        } 
}