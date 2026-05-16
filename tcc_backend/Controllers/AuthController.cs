using System;
using tcc_backend.Dtos;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace tcc_backend.Controllers;
[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase
{
    public record LoginRequest(string Username, string Password);
    [HttpPost(Name = "login")]
    public async Task<AuthReturnDto> Login(LoginRequest request)
    {
        if (string.IsNullOrEmpty(request.Username) || string.IsNullOrEmpty(request.Password))
            throw new ArgumentException("Username and password must be provided.");

        AuthReturnDto response = new AuthReturnDto();
        response.Token = "mocked_token";
        return response;
    }

    public record RegisterRequest(string Username, string Password);
    [HttpPost(Name = "register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        throw new NotImplementedException();
    }

}
