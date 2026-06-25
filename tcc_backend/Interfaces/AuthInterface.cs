using tcc_backend.Dtos;
namespace tcc_backend.Interfaces;

public interface AuthInterface 
{
    public AuthReturnDto Login(LoginDto payload);
    public AuthReturnDto Register(RegisterDto payload);
}
