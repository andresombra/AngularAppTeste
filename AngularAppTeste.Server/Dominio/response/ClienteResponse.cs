using System.Text.Json.Serialization;

namespace AngularAppTeste.Server.Dominio.response
{
    public class ClienteResponse : ApiResp
    {
        [JsonPropertyName("nome")]
        public string? Nome { get; set; }
        [JsonPropertyName("endereco")]
        public string? Endereco { get; set; }
        [JsonPropertyName("estado")]
        public string? Estado { get; set; }
        [JsonPropertyName("cidade")]
        public string? Cidade { get; set; }

    };
}
