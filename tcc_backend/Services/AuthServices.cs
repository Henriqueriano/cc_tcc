using System;
using tcc_backend.Dtos;
using tcc_backend.Interfaces;
namespace tcc_backend.Services;

public class AuthServices : AuthInterface
{
   private bool ValidateLogin() 
   {
      return true;
   }

   public AuthReturnDto Login(LoginDto payload)
   {
      throw new NotImplementedException();
   } 

   public AuthReturnDto Register(RegisterDto payload) 
   {
      throw new NotImplementedException();
   } 
}
