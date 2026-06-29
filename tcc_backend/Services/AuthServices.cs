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

   async public Task<AuthReturnDto> Login(LoginDto payload)
   {
      throw new NotImplementedException();
   } 

   public AuthReturnDto Register(RegisterDto payload) 
   {
      throw new NotImplementedException();
   } 
}
