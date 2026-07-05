using System;
using tcc_backend.Dtos;
using tcc_backend.Interfaces;
using System.Threading.Tasks;

namespace tcc_backend.Services;

public class AuthServices : IAuthServices
{
   private bool ValidateLogin() 
   {
      return true;
   }

   async public Task<RetrieveAuthDto> Login(LoginDto payload)
   {
      throw new NotImplementedException();
   } 

   public RetrieveAuthDto Register(RegisterDto payload) 
   {
      throw new NotImplementedException();
   } 
}
