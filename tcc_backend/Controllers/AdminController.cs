using System;
using Microsoft.AspNetCore.Mvc;
namespace tcc_backend.Controllers;

[ApiController]
[Route("[controller]/[action]")]
public class AdminController : ControllerBase 
{
  [HttpGet(Name = "statistics")]
  public void Statistics() => throw new NotImplementedException();
}
