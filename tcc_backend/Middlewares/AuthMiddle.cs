using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using System.IdentityModel.Tokens.Jwt;

namespace tcc_backend.Middlewares;
public class AuthMiddleware
{
    private readonly RequestDelegate _next;
    public AuthMiddleware(RequestDelegate next) => _next = next;
    public async Task InvokeAsync(HttpContext context)
    {
        var token = context.Request.Headers["Authorization"].
                    FirstOrDefault()?.Split(" ").Last();

        if (token == null || !ValidateToken(token))
        {
            context.Response.StatusCode = StatusCodes.Status401Unauthorized;
            await context.Response.WriteAsync("Unauthorized");
            return;
        }
        await _next(context);
    }
    private bool IsValidToken(string token) => !string.IsNullOrEmpty(token) && token.StartsWith("Bearer ");
    private bool ValidateToken(string token)=> IsValidToken(token) && !IsTokenExpired(token);
    private bool IsTokenExpired(string token)
    {
        JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
        JwtSecurityToken payload = handler.ReadJwtToken(token);
        DateTime currentTime = DateTime.UtcNow;
        DateTime token_time = payload.ValidTo;
        return currentTime > token_time;
    }
}