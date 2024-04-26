using System.Web.Http;
using IonicWebApi.Models;
using IonicWebApi.Data;

namespace IonicWebApi.Controllers
{
    public class LoginController : ApiController
    {
        private readonly UserData userData;

        public LoginController()
        {
            userData = new UserData();
        }

        [HttpPost]
        [Route("api/login")]
        public IHttpActionResult Login(Usuario request)
        {
            Usuario usuario = userData.Login(request.User, request.Password);

            if (usuario != null)
            {
                return Ok(usuario);
            }
            else
            {
                return BadRequest("Credenciales inválidas");
            }
        }
    }
}
