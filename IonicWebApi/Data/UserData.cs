using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using IonicWebApi.Models;

namespace IonicWebApi.Data
{
    public class UserData
    {
        private readonly string connectionString;

        public UserData()
        {
            connectionString = ConfigurationManager.ConnectionStrings["ConexionIonicApp"].ConnectionString;
        }

        public Usuario Login(string loginUser, string loginPass)
        {
            Usuario usuario = null;

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                string sqlQuery = "spLogin";
                using (SqlCommand command = new SqlCommand(sqlQuery, connection))
                {
                    command.CommandType = System.Data.CommandType.StoredProcedure;

                    command.Parameters.AddWithValue("@LoginUser", loginUser);
                    command.Parameters.AddWithValue("@LoginPass", loginPass);

                    connection.Open();
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        if (reader.Read())
                        {
                            usuario = new Usuario
                            {
                                Id = reader.GetInt32(reader.GetOrdinal("UsuarioID")),
                                User = reader.GetString(reader.GetOrdinal("Usuario"))
                            };
                        }
                    }
                }
            }

            return usuario;
        }
    }
}
