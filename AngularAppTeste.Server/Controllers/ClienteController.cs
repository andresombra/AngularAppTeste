using AngularAppTeste.Server.Dominio.response;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace AngularAppTeste.Server.Controllers
{
    [AllowAnonymous]
    [ApiController]
    [Route("[controller]")]
    public class ClienteController : ControllerBase
    {

        [HttpPost]
        public ClienteResponse Post(ClienteRequest cliente)
        {
            ClienteResponse resp = new ClienteResponse();

            try
            {
                resp.sucesso = true;

                resp.Nome = cliente.Nome;
                resp.Endereco = cliente.Endereco;
                resp.Cidade = cliente.Cidade;
                resp.Estado = cliente.Estado;

                return resp;
            }
            catch(Exception ex)
            {
                resp.sucesso = false;
                resp.mensagem = ex.ToString();
                return resp;
            }
        }
    }

    public class ClienteRequest
    {
        public string Nome { get; set; } = string.Empty;
        public string Endereco { get; set; } = string.Empty;
        public string Estado { get; set; } = string.Empty;
        public string Cidade { get; set; } = string.Empty;

    }
   
}

