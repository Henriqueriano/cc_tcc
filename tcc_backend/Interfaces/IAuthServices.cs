using tcc_backend.Dtos;
using System.Threading.Tasks;

namespace tcc_backend.Interfaces;

public interface IAuthServices
{
    public Task<AuthReturnDto> Login(LoginDto payload);
    public AuthReturnDto Register(RegisterDto payload);
}
