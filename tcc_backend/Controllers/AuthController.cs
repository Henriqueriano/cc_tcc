using System;
using tcc_backend.Dtos;
using tcc_backend.Interfaces;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace tcc_backend.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class AuthController : ControllerBase
{
    private readonly IAuthServices _authServices;

    public AuthController(IAuthServices authService) 
    {
       this._authServices = authService; 
    }

    [HttpPost(Name = "login")]
    public async Task<AuthReturnDto> Login(LoginDto request)
    {
        if (string.IsNullOrEmpty(request.UserLogin) || string.IsNullOrEmpty(request.UserPassword))
            throw new ArgumentException("Username and password must be provided.");

        AuthReturnDto response = await _authServices.Login(request);

        if (string.IsNullOrEmpty(response.Token)) 
        {
           AuthReturnDto backdata = new AuthReturnDto(); 
        }

        response.Token = "mocked_token";
        return response;
    }

    // note: maybe useless.
    public record RegisterRequest(string Username, string Password);
    [HttpPost(Name = "register")]
    public async Task<IActionResult> Register(RegisterRequest request)
    {
        throw new NotImplementedException();
    }

}
