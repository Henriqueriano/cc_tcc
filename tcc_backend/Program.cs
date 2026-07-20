using tcc_backend.Services;
using tcc_backend.Interfaces;
using tcc_backend.Middlewares;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi;
using System.Collections.Generic;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

#region Swagger
builder.Services.AddOpenApi();
builder.Services.AddSwaggerGen( config => 
{
    config.AddSecurityDefinition(
       "Bearer",
        new OpenApiSecurityScheme
        {
            Description = "JWT Authorization",
            Name = "Authorization",
            In = ParameterLocation.Header,
            Type = SecuritySchemeType.ApiKey,
            Scheme = "bearer",
            BearerFormat = "JWT"
        });

    config.AddSecurityRequirement(document => 
        new OpenApiSecurityRequirement
        {
            [new OpenApiSecuritySchemeReference("Bearer", document)] = new List<string>()
        }
    );
});
#endregion
#region Application
builder.Services.AddControllers();
builder.Services.AddScoped<IAuthServices, AuthServices>();
builder.Services.AddScoped<IRDFServices, RDFServices>();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
builder.Services.Configure<RouteOptions>(options =>
{
    options.LowercaseUrls = true;
    options.AppendTrailingSlash = true;
});
#endregion
#region Environment
WebApplication app = builder.Build();
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI();
}
#endregion

app.UseMiddleware<AuthMiddleware>();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();