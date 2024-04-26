using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IonicWebApi.Models
{
    public class Usuario
    {
        public int Id { get; set; }
        public string Nombre { get; set; }
        public string User { get; set; }
        public string Password { get; set; }
    }
}