using tcc_backend.Dtos;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace tcc_backend.Interfaces;
public interface IAuthServices
{
    public Task<RetrieveAuthDto> Login(LoginDto payload);
    public RetrieveAuthDto Register(RegisterDto payload);
}
